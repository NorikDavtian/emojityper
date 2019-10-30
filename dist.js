#!/usr/bin/env node

'use strict';

const util = require('util');

const crypto = require('crypto');
const path = require('path');
const fs = require('fs').promises;
const del = require('del');
const less = require('less');
const PluginAutoprefix = require('less-plugin-autoprefix');
const CleanCSS = require('clean-css');
const rollup = require('rollup');
const terser = require('terser');
const log = require('fancy-log');
const babelPlugin = require('rollup-plugin-babel');
const rollupNodeResolve = require('rollup-plugin-node-resolve');
const rollupTerser = require('rollup-plugin-terser').terser;
const htmlMinifier = require('html-minifier');
const workbox = require('workbox-build');
const globAll = require('./build/glob-all.js');
const {JSDOM} = require('jsdom');
const mkdirp = util.promisify(require('mkdirp'));

const version = (new Date).toISOString().replace(/[^\d]/g, '').substr(0, 12);
const dist = './dist';

function terserMinify(source) {
  const result = terser.minify(source);
  if (result.error) {
    throw new Error(`terser error: ${result.error}`);
  }
  return result.code;
}

async function buildLess(filename) {
  const lessSrc = await fs.readFile(filename, 'utf8');
  const styles = await less.render(lessSrc, {
    filename,
    plugins: [
      new PluginAutoprefix({browsers: '>1%'}),
    ],
    sourceMap: {},
  });

  const cc = new CleanCSS({sourceMap: true});
  const out = await cc.minify(styles.css, styles.map.toString());
  return {
    code: out.styles,
    map: out.sourceMap.toString(),
  };
}

async function buildJS(input, esTarget) {
  if (typeof input === 'string') {
    input = [input];
  }

  const babelOptions = {
    compact: true,
    sourcemap: true,
    presets: [
      ['@babel/preset-env', {
        targets: esTarget ? {esmodules: true} : {browsers: 'ie >= 11'},
      }],
    ],
    sourceType: 'module',
  };

  const bundle = await rollup.rollup({
    input,
    plugins: [
      rollupNodeResolve(),
      babelPlugin(babelOptions),
      rollupTerser(),
    ],
  });

  const generated = await bundle.generate({
    format: 'es',
    sourcemap: true,
    entryFileNames: '[hash].js',
    chunkFileNames: '[hash].js',
  });
  return generated.output.map((raw) => {
    return {
      name: raw.fileName,
      code: raw.code,
      map: raw.map,
      imports: raw.imports || null,
    };
  });
}

async function buildHTML(filename, callback=() => {}, options={}) {
  const raw = await fs.readFile(filename);
  const d = new JSDOM(raw);
  await callback(d.window.document);

  const mo = Object.assign({
    collapseBooleanAttributes: true,
    collapseWhitespace: true,
    includeAutoGeneratedTags: false,
    keepClosingSlash: true,
    minifyCSS: false,  // already done with cleanCSS
    minifyJS: terserMinify,
    removeRedundantAttributes: true,
    sortAttributes: true,
    sortClassName: true,
  }, options);

  const code = await htmlMinifier.minify(d.serialize(), mo);
  return {code};
}


class Writer {
  constructor(base) {
    this._base = base;
    this._done = {};
  }

  async write(out, name=undefined) {
    let code;
    let map;

    name = name || out.name;
    
    if (this._done[name]) {
      throw new Error(`duplicate write: ${name}`);
    }
    this._done[name] = true;

    if (typeof out === 'string' || out instanceof Buffer) {
      code = out;
    } else if (out.code) {
      code = out.code;
      map = out.map || undefined;
    } else {
      throw new Error(`can't write: ${out} ${JSON.stringify(out)}`)
    }
  
    if (map) {
      // nb. only works for JS, not CSS (needs C style)
      code += `\n//# sourceMappingURL=${path.basename(name)}.map`
    }

    const dir = path.join(this._base, path.dirname(name));
    await mkdirp(dir);
  
    const filename = path.join(dir, name)
    if (map) {
      await fs.writeFile(filename + '.map', map);
    }
    await fs.writeFile(filename, code);
  }
}


async function build() {
  log('Building Emojityper...');
  const writer = new Writer(dist);
  await del(dist);

  // main CSS (not written, inlined)
  const styles = await buildLess('styles.less');

  // module JS
  const bundleJS = await buildJS(['src/entrypoint/main.js', 'src/entrypoint/ext.js'], true);
  for (const out of bundleJS) {
    await writer.write(out);
  }

  // nomodule JS
  const supportJS = await buildJS('src/entrypoint/support.js', false);
  for (const out of supportJS) {
    await writer.write(out);
  }

  // HTML to update deps
  const html = await buildHTML('index.html', (document) => {
    // set version
    document.body.setAttribute('data-version', version);

    // inline styles from above
    const styleNode = Object.assign(document.createElement('style'), {textContent: styles.code});
    document.head.appendChild(styleNode);

    // insert path for nomodule code
    const supportNode = document.head.querySelector('script#support');
    supportNode.src = supportJS[0].name;
    supportNode.removeAttribute('id');

    // setup module code and extended bundle
    const moduleNode = document.head.querySelector('script[src^="src/"]');
    moduleNode.src = bundleJS[0].name;
    document.body.setAttribute('data-ext', bundleJS[1].name);

    for (const {name} of bundleJS.slice(2)) {
      const preload = document.createElement('link');
      preload.setAttribute('rel', 'modulepreload');
      preload.setAttribute('href', name);
      document.head.insertBefore(preload, moduleNode);
    }

    // remove all dev things
    Array.from(document.querySelectorAll('[_dev]')).forEach((x) => x.remove());
  });
  await writer.write(html, 'index.html');

  // copy random files
  const files = await globAll(
    'CNAME',
    'manifest.json',
    'opensearch.xml',
    'res/*',
    'robots.txt',
    '*.html',
    '!index.html',  // all HTML but index, already done
  );
  await Promise.all(files.map(async (filename) => {
    const target = path.join(dist, filename)
    await mkdirp(path.dirname(target));
    await fs.copyFile(filename, target);
  }));

  // build SW
  const globPatterns = [
    'index.html',
    '*.{js,json}',
    'res/icon-*.png',
  ];
  const target = path.join(dist, 'sw.js');
  const manifest = await workbox.injectManifest({
    swSrc: 'sw.js',
    swDest: target,
    globDirectory: dist,
    globPatterns,
    modifyUrlPrefix: {'/': './'},  // treat files as relative to SW
  });
  if (manifest.warnings.length) {
    throw new Error(`warnings generating manifest: \n${manifest.warnings.join('\n')}`);
  }

  // minify SW
  const code = await fs.readFile(target, 'utf8');
  const minified = await terserMinify(code);
  await writer.write(minified, 'sw.js');

  log('Done!');
}

build().catch((err) => {
  console.warn(err);
  process.exit(1);
});