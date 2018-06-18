
/**
 * @fileoverview The validator runs constantly and validates emoji rendering.
 */

import {isExpectedLength} from './modifier.js';
import Worker from './worker.js';

const prefix = '-ok_';
const ls = window.localStorage;
const known = new Map();

function runner(emoji) {
  const out = isExpectedLength(emoji);
  known.set(emoji, out);
  if (out) {
    ls[prefix + emoji] = 't';  // use dummy small string
  }
  return out;
}

const worker = new Worker(runner);

function immediate(emoji) {
  const immediate = known.get(emoji);
  if (immediate !== undefined) {
    return immediate;
  }
  return ls[prefix + emoji];
}

/**
 * As per isExpectedLength, but caches successful results.
 *
 * @param {string} string to check
 * @return {!Promise<boolean>} whether this is probably an emoji
 */
export async function valid(emoji) {
  const result = immediate(emoji);
  if (result !== undefined) {
    return result;
  }
  return worker.task(emoji);
}

/**
 * Async helper that finds the first valid autocomplete option. Uses a callback in order to hint
 * whether the result is coming in the current frame (before any await) or after (calls callback
 * with null first).
 *
 * @param {!Array<!Array<string>>} options
 * @param {function(?{name: string, emoji: string})} callback
 */
export async function findValidMatch(options, callback) {
  let calledWithDelay = false;

  for (let i = 0; i < options.length; ++i) {
    const row = options[i];
    for (let j = 1; j < row.length; ++j) {
      const emoji = row[j];
      let result = immediate(emoji);
      if (result === undefined) {
        // we have to wait for the runner, so call with a delay
        if (!calledWithDelay) {
          callback(null);
          calledWithDelay = true;
        }
        result = await worker.task(emoji);
      }

      if (result) {
        return callback({name: row[0], emoji});
      }
    }
  }

  if (!calledWithDelay) {
    callback(null);
  }
}