import{a as e,b as t,c as n,d as o,e as r}from"./e8138ddd.js";!window.requestIdleCallback&&(window.requestIdleCallback=(e=>{const t=performance.now(),n=e.bind(null,{didTimeout:!1,timeRemaining:()=>Math.max(0,50-(performance.now()-t))});return window.setTimeout(n,1)}),window.cancelIdleCallback=(e=>window.clearTimeout(e)));const i=!navigator.sendBeacon;i&&(navigator.sendBeacon=function(e,t){const n=new XMLHttpRequest;n.open("POST",e),n.send(t)});const s=window.parent&&window.parent!==window?e=>window.parent.postMessage(e,"*"):()=>{};window.addEventListener("load",e=>{s("load"),window.requestAnimationFrame(()=>{const e=document.createElement("script");if(e.src="https://cdn.jsdelivr.net/npm/pwacompat@2.0.9/pwacompat.min.js",e.setAttribute("integrity","sha384-VcI6S+HIsE80FVM1jgbd6WDFhzKYA0PecD/LcIyMQpT4fMJdijBh0I7Iblaacawc"),e.setAttribute("crossorigin","anonymous"),document.head.appendChild(e),!document.currentScript){const e=document.createElement("script");e.src=document.body.getAttribute("data-ext"),e.type="module",document.head.appendChild(e)}if(window._dev)return;const t=document.createElement("script");t.src="https://www.google-analytics.com/analytics.js",document.head.appendChild(t)})});const c=function e(){e.q.push(arguments)};c.q=[],c.l=1*new Date,window.ga=c,window.GoogleAnalyticsObject="ga",window.addEventListener("message",e=>{switch(e.data.type||""){case"focus":typer.focus();break;case"ga":ga.apply(null,e.data.payload);break;default:console.debug("unhandled message",e.data)}}),i||ga("set","transport","beacon"),ga("create","UA-39885839-6","auto"),ga("send","pageview");const a=["Left","Right","Up","Down"];function l(e){return!(e instanceof MouseEvent)||(0===e.screenX&&0===e.detail||0===e.webkitForce)}let d;function u(e){d||((d=document.createElement("input")).style.position="fixed",d.style.opacity=0,document.body.appendChild(d)),d.value=e;try{d.hidden=!1,d.focus(),d.selectionStart=0,d.selectionEnd=d.value.length,document.execCommand("copy")}catch(e){return!1}finally{d.hidden=!0}return!0}const f=Array.from(input.querySelectorAll("button")),h=e=>{const t=e.detail.trim(),n=Boolean(t);f.forEach(e=>e.disabled=!n)};typer.addEventListener("value",h),h({detail:typer.value});function p(e){const t=e.length,n=[];for(let o=0;o<t;){const r=e.charCodeAt(o++)||0;if(r<55296||r>56319||o===t);else{const t=e.charCodeAt(o)||0;if(56320==(64512&t)){++o,n.push(65536+(1023&t)+((1023&r)<<10));continue}}n.push(r)}return n}!function(e,t){let n;const o=e.textContent;let r=!1;function i(){r&&(document.activeElement===e&&t.focus(),r=!1)}t.addEventListener("keydown",t=>{r||"Enter"!==t.key||t.repeat||(e.click(),e.focus(),r=!0,t.preventDefault())}),document.body.addEventListener("keyup",e=>{"Enter"===e.key&&i()}),e.addEventListener("click",c=>{c.preventDefault(),r||c.repeat||((()=>{const r=t.dataset.copy.trim().replace(/\s+/," ");if(!u(r))return console.warn("could not copy",r),!0;console.info("copied",r),ga("send","event","text","copy"),e.textContent=e.dataset.copied,e.classList.add("copied"),window.clearTimeout(n),n=window.setTimeout(t=>{e.textContent=o,e.classList.remove("copied"),i(),s("copy")},500)})(),l(c)&&e.focus())})}(copy,typer);const m=8205,g=65039;function v(e){return e>=127995&&e<=127999}function w(e){return e>=127462&&e<=127487}function y(e){return e>=917536&&e<917631}const E=[g,8419,917631];function b(e){let t=0;const n=e.length;for(let o=0;o<n;++o){const n=e[o];n===m?t-=2:-1!==E.indexOf(n)||y(n)||v(n)||(w(n)&&e[o+1]!==g?++t:t+=2)}return 0===e.length?0:t<=2?1:t+1>>1}function*x(e){let t={flag:!1,v:[]};const n=[t],o=e=>{t.flag!==e&&(t={flag:e,v:[]},n.push(t))},r=e.length;for(let i=0;i<r;++i){const r=e[i];if(w(r)&&e[i+1]!==g)o(!0),t.v.push(r);else if(-1!==E.indexOf(r)||y(r)||v(r)||r===m)o(!1),t.v.push(r);else{const e=t.v.length-1;-1!==e&&t.v[e]!==m?(t={flag:!1,v:[r]},n.push(t)):t.v.push(r)}for(;n.length>1;){const e=n.shift();e.v.length&&(yield e.v)}}const i=n[0];i.v.length&&(yield i.v)}const C=Boolean(/Mac|iP(hone|od|ad)/.exec(navigator.platform))||Boolean(/Android/.exec(navigator.userAgent))||!1,k=Boolean(/Win/.exec(navigator.platform)),L=1024,S=100,_=document.createElement("div");_.style.overflow="hidden",_.style.width="0px",_.style.position="absolute",_.setAttribute("href","https://github.com/samthor/ok-emoji");const A=document.createElement("div");function M(){_.getBoundingClientRect();return{width:A.offsetWidth,height:_.offsetHeight}}A.style.display="inline-block",A.style.whiteSpace="nowrap",A.style.fontSize=`${S}px`,A.style.lineHeight="normal",A.style.fontFamily="sans-serif",_.appendChild(A),document.body.appendChild(_),A.textContent="󿿽";const T=M();A.textContent="😂";const P=M();A.style.letterSpacing=`${L}px`;const q=function(){if(!C)return null;const e=document.createElement("canvas").getContext("2d");e.font="10.5px monospace";const t=e.measureText("😂").width;return function(n){return e.measureText(n).width/t}}();const j=k?e=>{let t=0,n=-1;for(;-1!==(n=e.indexOf("‍\ud83d",n+1));){const o=e.charCodeAt(n+2);56424!==o&&56425!==o||++t}return t}:()=>0,N=C?function(e){return 1===q(e)}:function(e){A.textContent=e;const t=M(),n=1+j(e);return!(Math.round(t.width/(L+S))>n)&&P.height===t.height&&T.width!==t.width-L},B=C?function(e){const t=q(e),n=function(e){return b(p(e))}(e);return~~t===t&&t<=n}:function(e){if(A.textContent=e,_.offsetHeight!==P.height)return!1;const t=p(e),n=b(t)+j(e);if(function(e){return A.textContent=e,Math.round(A.offsetWidth/(L+S))}(e)>n)return!1;for(const e of x(t)){if(null===e)return!1;if(w(e[0])){if(e[1]===g)continue;if(e.length%2)return!1;for(let t=0;t<e.length;t+=2){const n=String.fromCodePoint(e[t],e[t+1]);if(!N(n))return!1}continue}const t=String.fromCodePoint(...e);if(!N(t))return!1}return!0},R=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4e3,n={},o=0;return r=>{let i=n[r];return void 0===i&&(n[r]=i=e(r),++o>t&&(n={},o=0)),i}}(N),D=R("👨🏻"),W=[129309,128106,129340,128107,128108,128109];function I(e){return-1!==W.indexOf(e)}function O(e){return 128118===e||128102===e||128103===e}const F=function(){const e=[128105,128104,0,129334,127877,0,128131,128378,0,128112,129333,0,128103,128102,129490,128117,128116,129491,128109,128108,128107,128120,129332,0],t=new Map;for(let n=0;n<e.length;n+=3){const o={points:{f:e[n],m:e[n+1],n:e[n+2]}};for(let r=0;r<3;++r){const i=e[n+r];if(i){if(t.has(i))throw new Error("duplicate in gender list: "+i);t.set(i,o)}}}return e=>{const n=t.get(e)||null;return n&&void 0===n.single&&(n.single=R(String.fromCodePoint(n.points.f))&&R(String.fromCodePoint(n.points.m)),n.neutral=!!n.points.n&&R(String.fromCodePoint(n.points.n))),n}}();function*H(e){let t=-1;do{const n=e.lastIndexOf(m,t),o=n+1,r=-1===t?e.length:t+1;if(t=n-1,0===e.slice(o,r).length)continue;const i={part:e.slice(o,r),trailer:0!==o};yield i}while(-2!==t)}function $(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;const n={tone:!1,gender:{single:!1,double:!1,neutral:!1}},o=void 0!==t?[]:null;e:for(const i of function*(e){const t=p(e);yield*x(t)}(e)){o&&o.push(i);let e=0,s=!1;for(const o of H(i)){const i=o.part,c=o.trailer;if(void 0===t&&(n.tone||!D)&&n.gender.neutral&&n.gender.single&&n.gender.double)break e;const a=i[0];if(w(a))continue;const l=O(a);c&&l&&(s=!0);const d=128104===(r=a)||128105===r;if(l||d){n.tone=!s&&D,n.gender.single=!0,d&&++e>=2&&(n.gender.double=!0);continue}if(s)continue;const u=F(a);if(null!==u&&(n.gender.single|=u.single,n.gender.neutral|=u.neutral),D&&!n.tone&&!c&&!I(a)){const e=String.fromCodePoint(a,127995);n.tone=R(e)}if(!n.gender.neutral){const e=String.fromCodePoint(a,m,9792,g),t=R(e);n.gender.neutral=t,n.gender.single=n.gender.single||t}}}var r;if(void 0===t)return n;if(void 0!==t.tone&&n.tone&&o.forEach(e=>{if(v(e[1])){if(t.tone)e[1]=t.tone;else{const t=String.fromCodePoint(e[0]);R(t)?e.splice(1,1):e[1]=g}return}if(!t.tone){const t=e.filter(e=>!v(e));return void e.splice(0,e.length,...t)}if(I(e[0]))return;const n=String.fromCodePoint(e[0],t.tone,...e.slice(1));R(n)&&e.splice(1,0,t.tone)}),void 0!==t.gender){o.map(e=>(function(e){let t=0;const n=[];for(;;){const o=e.indexOf(m,t),r=-1===o?e.length:o,i=e.slice(t,r);if(0!==i.length&&n.push(i),-1===o)break;t=o+1}return n})(e)).map((e,n)=>{if(function(e){return 9792===e||9794===e}(e[e.length-1][0])){if(!t.gender)return e.pop(),e}else{let r=[],i=!1;for(let n=0;n<e.length;++n){const o=e[n],s=o[0],c=F(s);if(!c){if(0===n)break;continue}const a=(r=r.length?r:t.gender.split("")).shift();if(i&&(!a||O(s)))break;!a&&c.neutral?o[0]=c.points.n:a&&c.single&&(o[0]="m"===a?c.points.m:c.points.f),i=!0}if(i)return e;if(!t.gender)return null;const s=o[n].slice();s.push(m,9792,g);const c=String.fromCodePoint(...s);if(!R(c))return null;e.push([9792,g])}return e[e.length-1][0]="m"===t.gender[0]?9794:9792,e}).forEach((e,t)=>{if(null===e)return;const n=[];e.forEach(e=>{n.push(...e,m)}),n.pop(),o[t]=n})}return n.out=o.map(e=>String.fromCodePoint(...e)).join(""),n}function z(e,t){const n=e.charCodeAt(t);return e.charCodeAt(t+1)!==g&&(n<5e3&&n>32)}function U(e){const t=e.dataset;for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];o.forEach(e=>{e in t&&delete t[e]})}const K=new WeakMap;!function(e){if(K.has(e))return!1;const t={from:e.selectionStart,to:e.selectionEnd},n=document.createElement("div");n.className="overflow-helper",e.parentNode.insertBefore(n,e);const o=document.createElement("div");o.className="underline",n.appendChild(o);let r=null;const i=document.createElement("div");i.className="autocomplete sizer",n.appendChild(i);const s=function(){const e=document.createElement("div");e.className="sizer",n.appendChild(e);const t=document.createElement("div");return t.className="nonce",n=>(e.textContent=n,e.appendChild(t),t.offsetLeft)}();K.set(e,()=>{const t=~~((e.selectionStart+e.selectionEnd)/2);return s(e.value.substr(0,t))-e.scrollLeft}),"complete"!==document.readyState&&(o.classList.add("loading"),window.addEventListener("load",e=>{c(),o.classList.remove("loading")}));const c=()=>{if(t.from>=t.to)return o.hidden=!0,!1;const n=t.from,r=t.to,c=s(e.value.substr(0,n)),a=s(e.value.substr(n,r-n));a<=0&&console.warn("invalid sizer width",a,"for text",e.textContent),o.hidden=a<=0,o.style.left=c+"px",o.style.width=a+"px",o.style.transform=`translateX(${-e.scrollLeft}px)`,i.style.transform=`translateX(${-e.scrollLeft+c+a}px)`},a=(n,r)=>(t.from=n,t.to=Math.max(n,r),n>=r?(U(e,"prefix","focus"),o.hidden=!0,!1):(e.dataset.focus=e.value.substr(n,r-n),c(),!0)),l=e.value.length,d={start:l,end:l,value:void 0},u=t=>{if(!1!==t&&e.selectionStart===d.start&&e.selectionEnd===d.end&&e.value===d.value)return!0;var n=[e.selectionStart,e.selectionEnd];if(d.start=n[0],d.end=n[1],d.value!==e.value&&(e.dispatchEvent(new CustomEvent("value",{detail:e.value})),d.value=e.value),d.start!==d.end)return U(e,"prefix"),a(d.start,d.end),o.classList.add("range"),e.classList.add("range"),!1;o.classList.remove("range"),e.classList.remove("range");const r=function(e,t){let n=t,o=t;if(""===e.substr(t).trim()||!z(e,t)){for(;o>0&&!(e.charCodeAt(o-1)>32);--o);o<n&&(n=o)}for(;n>0&&z(e,n-1);--n);for(;o<e.length&&z(e,o);++o);return n>o&&(n=o),{from:n,to:o}}(e.value,d.start),i=r.from,s=r.to;return!(i>=s&&t||(a(i,s)&&(e.dataset.focus=e.dataset.prefix=e.value.substr(i,s-i).toLowerCase()),1))};let f={},h=0;const p=(n,o)=>{n.has("select-all")?e.setSelectionRange(0,e.value.length):n.has("select-end")?e.setSelectionRange(e.value.length,e.value.length):n.has("focus")&&(n.has("mousedown")||n.has("touchstart")||e.setSelectionRange(d.start,d.end)),(n.has("blur")||n.has("focus"))&&(e.scrollLeft=h),h=e.scrollLeft;const s=u(o);if((()=>{const n=e.dataset.prefix||"",o=0===e.value.substr(t.to).trim().length;if(null===r||0===n.length||"^"!==r.name[0]&&r.name.substr(0,n.length)!==n||!o)return i.textContent="",!1;const s=("^"===r.name[0]?"":r.name.substr(n.length))+r.emoji;return i.textContent=s,!0})()||(r=null),e.selectionStart!==e.selectionEnd?e.dataset.copy=e.value.substr(e.selectionStart,e.selectionEnd-e.selectionStart):e.dataset.copy=null!==r?e.value.substr(0,t.from)+e.value.substr(t.to)+r.emoji:e.value,s)return;const c={text:e.dataset.focus?e.dataset.prefix||null:"",prefix:"prefix"in e.dataset,focus:e.dataset.focus,selection:e.selectionStart!==e.selectionEnd};c.text===f.text&&c.prefix===f.prefix&&c.focus===f.focus&&c.selection===f.selection||(f=c,e.dispatchEvent(new CustomEvent("query",{detail:c})))};let m,g=!1;function v(){let n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e.selectionEnd<t.to)return!1;const o=e.dataset.prefix||"";if(0===o.length||!r||!r.name.startsWith(o))return!1;const i=e.value.substr(t.to),s=i.substr(0,e.selectionStart-t.to);if(0!==s.trim().length)return!1;if(n&&!s.length)return!1;if(0!==i.trim().length&&r.name!==o)return!1;ga("send","event","options","typing");const c={choice:r.emoji};return typer.dispatchEvent(new CustomEvent("emoji",{detail:c})),!0}!function(){let t,n=new Set;const o=e=>{t||(m=void 0,n.clear(),t=window.requestAnimationFrame(()=>{t=null,p(n,m)})),e&&n.add(e.type)};"change keydown keypress focus click mousedown touchstart select input select-all select-end blur".split(/\s+/).forEach(t=>e.addEventListener(t,o,{passive:!0})),o(),e.addEventListener("suggest",e=>{r=e.detail,g&&v(),o()}),e.addEventListener("mousemove",e=>{e.which&&o()}),document.addEventListener("selectionchange",t=>{document.activeElement===e&&o()})}(),e.addEventListener("keydown",e=>{switch(g=!1,e.key){case"Escape":m=!1;break;case"ArrowDown":case"Down":case"ArrowUp":case"Up":e.preventDefault();break;case" ":const t=v();e.shiftKey&&e.preventDefault(),t||(g=!0)}}),e.addEventListener("keyup",e=>{229!==e.keyCode&&e.keyCode||v(!0)}),function(){let t;const n=()=>{t||(t=window.requestAnimationFrame(()=>{t=null,c()}))};window.addEventListener("resize",n),e.addEventListener("wheel",n,{passive:!0})}();const w=n=>{const o=e.scrollLeft,r=t.from,i=t.to,s=e.value.substr(r,i-r);let c=[typer.selectionStart,typer.selectionEnd],l=c[0],u=c[1];const f=typer.selectionDirection,h=n(s);if(null==h)return!1;const p=document.activeElement;typer.focus(),typer.selectionStart=r,typer.selectionEnd=i;const g=typer.value.substr(0,r)+h+typer.value.substr(i);document.execCommand("insertText",!1,h)&&typer.value===g||(typer.value=typer.value.substr(0,r)+h+typer.value.substr(i)),typer.dispatchEvent(new CustomEvent("change"));const v=e=>(e>=i?e=e-(i-r)+h.length:e>r&&(e=r+h.length),e);var w=[v(l),v(u)];return d.start=w[0],d.end=w[1],typer.setSelectionRange(d.start,d.end,f),p&&p.focus(),m=!0,e.scrollLeft=o,a(r,r+h.length),!0};e.addEventListener("modifier",e=>{const t={[e.detail.type]:e.detail.code};w(e=>$(e,t).out)}),e.addEventListener("emoji",t=>{const n=t.detail.choice;w(()=>n)&&U(e,"prefix")})}(typer);const X=4,V=100;const G="a",J="-ok_",Q=window.localStorage,Y=new Map,Z=-1!==window.location.search.indexOf("ignore_valid");const ee=new class{constructor(e){this.fn_=e,this.queue_=[],this.waiting_=null,this.runner_().catch(e=>{throw console.info("worker runner failed",e),e})}async runner_(){for(await new Promise(e=>this.waiting_=e),this.waiting_=null,await e();;){if(this.chunk_())return this.runner_();await t()}}chunk_(){const e=window.performance.now();let t=0;for(;this.queue_.length;){const n=this.queue_.shift();if(n.resolve(this.fn_(n.arg)),++t==V||window.performance.now()-e>X)break}return!this.queue_.length}task(e){return new Promise(t=>{this.queue_.push({resolve:t,arg:e}),this.waiting_&&this.waiting_()})}}(function(e){if(8203===e.charCodeAt(0))return!0;const t=B(e);return Y.set(e,t),t&&(Q[J+e]=G),t}),te=Z?()=>!0:ee.task.bind(ee);function ne(e){const t=Y.get(e);return void 0!==t?t:Q[J+e]===G||void 0}class oe{constructor(e){this.holder_=e,this.options_=new Map,this.buttons_=new Map,this.buttonTarget_=new WeakMap,this.buttonPool_=[],window.requestIdleCallback(()=>{for(let e=0;e<10;++e)this.buttonPool_.push(document.createElement("button"))});const t=document.createElement("div");this.holder_.appendChild(t),this.setModifier=(()=>{const e=oe.optionType_("modifier","gender"),n=oe.optionType_("modifier","tone");t.appendChild(e),t.appendChild(n);const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=document.createElement("button");return n.textContent=e,n.dataset.value=t,n},r=[o("⚬",""),o("♀","f"),o("♀♂","fm"),o("♂","m"),o("♂♀","mf")],i=[o("—","")];for(let e=127995;e<=127999;++e)i.push(o(String.fromCodePoint(e),e));const s=(e,t,n)=>{e?n.appendChild(t):t.remove()};return function(o){const c=t.contains(document.activeElement)?document.activeElement:null;r.forEach(t=>{const n=t.dataset.value.length,r=!n&&o.gender.neutral||1===n&&o.gender.single||2===n&&o.gender.double;s(r,t,e)}),i.forEach(e=>s(o.tone,e,n)),t.insertBefore(e,e.nextSibling),t.insertBefore(n,n.nextSibling),c&&c.focus()}})()}static optionType_(e,t){const n=document.createElement("div");return n.className="options "+e,n.dataset[e]=t,n.dataset.name=t,n}optionForName_(e){const t=this.options_.get(e);if(t)return t;const n=document.createElement("div");return n.className="options",n.setAttribute("data-option",e),"^"===e[0]&&(n.classList.add("special"),e=e.substr(1)),n.setAttribute("data-name",e),n}addEmojiTo_(e,t){let n=this.buttons_.get(t);if(n){const t=this.buttonTarget_.get(n);if(null===t)return n;if(void 0===t)return e.appendChild(n),n}else(n=this.buttonPool_.pop()||document.createElement("button")).textContent=t,this.buttons_.set(t,n),async function(e){const t=ne(e);return void 0!==t?t:te(e)}(t).then(e=>{if(!e)return this.buttonTarget_.set(n,null);const t=this.buttonTarget_.get(n);t&&(t.parentNode.replaceChild(n,t),this.buttonTarget_.delete(n))});const o=document.createTextNode("");return this.buttonTarget_.set(n,o),e.appendChild(o),n}update(e){const t=new Map,n=new Map,o=this.holder_.contains(document.activeElement)?document.activeElement:null;e.forEach(e=>{const o=e[0],r="^"===o[0],i=this.optionForName_(o);t.set(o,i),this.options_.delete(o),this.holder_.appendChild(i);for(let e=0;e<i.children.length;++e){const t=i.children[e],o=t.textContent;r||n.has(o)?(t.remove(),this.buttonPool_.push(t),--e):n.set(o,t)}for(let t,o=1;t=e[o];++o)n.has(t)||n.set(t,this.addEmojiTo_(i,t))}),this.options_.forEach(e=>{for(let t=0;t<e.children.length;++t)this.buttonPool_.push(e.children[t]);e.remove()}),this.options_=t,this.buttons_=n,o&&(document.body.contains(o)?o.focus():typer.focus())}}let re=void 0,ie=!1;function se(e){const t={dist:1/0,button:null},n=document.activeElement.getBoundingClientRect(),o=void 0!==re?re:n.left;let r=void 0;for(let s=0;s<e.length;++s){const c=e[s],a=c.getBoundingClientRect();if(n.top===a.top)continue;if(void 0===r)r=a.top;else if(a.top!==r)break;const l=Math.abs(a.left-o);if(l<t.dist){var i=[l,c];t.dist=i[0],t.button=i[1]}}if(!t.button)return!1;ie=!0;try{t.button.focus()}finally{ie=!1}return!0}chooser.addEventListener("focus",e=>{ie||(re=document.activeElement.getBoundingClientRect().left)},!0),chooser.addEventListener("click",e=>{re=void 0;const t=l(e);let o=void 0;const r=e.target;if("button"!==r.localName);else if(r.parentNode.dataset.modifier){if(e.shiftKey)return;const t="value"in r.dataset?+r.dataset.value||r.dataset.value:null,n={type:r.parentNode.dataset.modifier,code:t};typer.dispatchEvent(new CustomEvent("modifier",{detail:n})),o="modifier"}else if(r.parentNode.dataset.option){if(e.shiftKey){u(r.textContent)&&ga("send","event","options","copy");const e=document.scrollingElement.scrollTop;return t?r.focus():typer.focus(),void(document.scrollingElement.scrollTop=e)}const i={choice:r.textContent};typer.dispatchEvent(new CustomEvent("emoji",{detail:i})),n(r.parentNode.dataset.option,i.choice),o="emoji"}o&&(ga("send","event","options","click",o),t||typer.focus())}),typer.addEventListener("keydown",e=>{if("ArrowDown"===e.key||"Down"===e.key){const e=typer.getBoundingClientRect();re=e.left+function(e){const t=K.get(e);if(void 0!==t)return t()}(typer),se(chooser.querySelectorAll("button"))&&ga("send","event","options","keyboardnav")}else if("ArrowRight"===e.key||"Right"===e.key){const e=typer.value.length;if(typer.selectionEnd===e&&typer.selectionStart===e){const e=chooser.querySelector("button");e&&e.focus()}}}),chooser.addEventListener("keydown",e=>{const t=function(e){return e.key?e.key.startsWith("Arrow")?e.key:-1===a.indexOf(e.key)?null:"Arrow"+e.key:null}(e);if(!t)return;if(!chooser.contains(document.activeElement))return;const n=Array.from(chooser.querySelectorAll("button")),o=n.indexOf(document.activeElement);if(-1===o)return;let r,i;if("ArrowLeft"===t?r=-1:"ArrowRight"===t&&(r=1),r){const e=o+r;e>=0&&e<n.length?n[e].focus():e<0&&(typer.focus(),typer.dispatchEvent(new CustomEvent("select-end")))}else{if("ArrowUp"===t)(i=n.slice(0,o)).reverse();else{if("ArrowDown"!==t)return;i=n.slice(o)}if(se(i)||"ArrowUp"===t&&typer.focus(),"ArrowDown"===t){const t=document.activeElement.getBoundingClientRect(),n=t.top+t.height;window.innerHeight-n>64&&e.preventDefault()}}}),function(){const e=new oe(chooser);let n={},r=performance.now(),i=[],s=0;function c(e){const t=++s;if(!e)return void typer.dispatchEvent(new CustomEvent("suggest",{detail:null}));let n=null;const o=i.slice().filter(t=>e.length>1&&t[0]===e?(n=t,!1):t[0].startsWith(e)||"^"===t[0][0]);n&&o.unshift(n);!async function(e,t){let n=!1;for(let o=0;o<e.length;++o){const r=e[o];for(let e=1;e<r.length;++e){const o=r[e];let i=ne(o);if(void 0===i&&(n||(t(null),n=!0),i=await te(o)),i)return t({name:r[0],emoji:o})}}n||t(null)}(o,e=>{t===s&&typer.dispatchEvent(new CustomEvent("suggest",{detail:e}))})}typer.addEventListener("query",s=>{const a=s.detail,l=performance.now(),d=$(!s.detail.prefix&&s.detail.focus||"");e.setModifier(d),n.text!==a.text&&c(a.text);const u=n.text&&a.text&&0!==n.text.length&&n.text.startsWith(a.text.substr(0,n.text.length))||!1;let f=!1;n.text&&n.prefix===a.prefix?l-r>2e3&&(f=!0):f=!0,n=a,r=l;const h=async function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(r&&(await t(r),n!==a))return-1;const l=await o(a.text,a.prefix,s);return n!==a?-1:(i=l,c(a.text),e.update(l))};h(f?0:250,u).then(e=>{if(e<0)return-2;if(!a.text){const e=window.innerHeight<=400?125:750;return h(e,!0)}const t=Math.max(1e3,100*Math.pow(e,.75));return h(t,!0)}).catch(e=>{console.error("error doing request",e)})})}();const ce=e=>{const t=e.detail.trim();document.body.classList.toggle("has-value",Boolean(t))};function ae(e){return e instanceof Element&&e.classList.contains("extent")}typer.addEventListener("value",ce),ce({detail:typer.value}),document.body.addEventListener("keydown",e=>{switch(e.key){case"Escape":if(document.activeElement!==typer){typer.focus();break}if(typer.selectionStart!==typer.selectionEnd){"backward"===typer.selectionDirection?typer.selectionStart=typer.selectionEnd:typer.selectionEnd=typer.selectionStart;break}const t=typer.value.length;typer.setSelectionRange(t,t)}}),document.addEventListener("selectionchange",e=>{const t=window.getSelection(),n=t.anchorNode,o=t.focusNode;n!==o&&ae(n)&&ae(o)&&(t.removeAllRanges(),typer.focus(),typer.dispatchEvent(new CustomEvent("select-all")))},!0),document.addEventListener("focusin",e=>{r().then(()=>{document.activeElement===document.body&&typer.focus()})});const le=e=>{const t=window.innerHeight;document.body.style.minHeight=`${t}px`};if(window.addEventListener("resize",le),window.addEventListener("load",le),le(),document.body.addEventListener("click",e=>{const t=e.target&&e.target.closest("a[href]");t&&ga("send","event","outbound","click",t.href)}),navigator.serviceWorker){navigator.serviceWorker.register("./sw.js").catch(e=>{console.warn("failed to register SW",e)});const e=Boolean(navigator.serviceWorker.controller);navigator.serviceWorker.addEventListener("controllerchange",()=>{e&&(console.debug("got SW controllerchange, reload"),window.location.reload())})}window.onerror=((e,t,n,o,r)=>{console.info("got err",String(e));try{ga("send","event","error",`${t},${n}:${o}`,String(e),{nonInteraction:!0})}catch(e){}});

//# sourceMappingURL=2386567a.js.map