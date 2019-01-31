window.requestIdleCallback||(window.requestIdleCallback=(e=>{const t=performance.now(),n=e.bind(null,{didTimeout:!1,timeRemaining:()=>Math.max(0,50-(performance.now()-t))});return window.setTimeout(n,1)}),window.cancelIdleCallback=(e=>window.clearTimeout(e))),navigator.sendBeacon||(navigator.sendBeacon=function(e,t){return new Promise((n,o)=>{const r=new XMLHttpRequest;r.open("POST",e,!0),r.onerror=o,r.onload=n,r.send(t)})});const e=["Left","Right","Up","Down"];function t(e){return!(e instanceof MouseEvent)||(0===e.screenX&&0===e.detail||0===e.webkitForce)}let n;function o(e){n||((n=document.createElement("input")).style.position="fixed",n.style.opacity=0,document.body.appendChild(n)),n.value=e;try{n.hidden=!1,n.focus(),n.selectionStart=0,n.selectionEnd=n.value.length,document.execCommand("copy")}catch(e){return!1}finally{n.hidden=!0}return!0}const r=Array.from(input.querySelectorAll("button")),i=e=>{const t=e.detail.trim(),n=Boolean(t);r.forEach(e=>e.disabled=!n)};typer.addEventListener("value",i),i({detail:typer.value});function s(e){const t=e.length,n=[];for(let o=0;o<t;){const r=e.charCodeAt(o++)||0;if(r<55296||r>56319||o===t);else{const t=e.charCodeAt(o)||0;if(56320==(64512&t)){++o,n.push(65536+(1023&t)+((1023&r)<<10));continue}}n.push(r)}return n}!function(e,n){let r;const i=e.textContent,s=()=>{const t=n.dataset.copy.trim().replace(/\s+/," ");if(!o(t))return console.warn("could not copy",t),!0;console.info("copied",t),ga("send","event","text","copy"),e.textContent=e.dataset.copied,e.classList.add("copied"),window.clearTimeout(r),r=window.setTimeout(t=>{e.textContent=i,e.classList.remove("copied"),c(),window.parent&&window.parent.postMessage("copy","*")},500)};let a=!1;function c(){a&&(document.activeElement===e&&n.focus(),a=!1)}n.addEventListener("keydown",t=>{a||"Enter"!==t.key||t.repeat||(e.click(),e.focus(),a=!0,t.preventDefault())}),document.body.addEventListener("keyup",e=>{"Enter"===e.key&&c()}),e.addEventListener("click",n=>{n.preventDefault(),a||n.repeat||(s(),t(n)&&e.focus())})}(copy,typer);const a=8205,c=65039;function l(e){return e>=127995&&e<=127999}function d(e){return e>=127462&&e<=127487}function u(e){return e>=917536&&e<917631}const f=[c,8419,917631];function h(e){let t=0;const n=e.length;for(let o=0;o<n;++o){const n=e[o];n===a?t-=2:-1!==f.indexOf(n)||u(n)||l(n)||(d(n)&&e[o+1]!==c?++t:t+=2)}return 0===e.length?0:t<=2?1:t+1>>1}function*p(e){let t={flag:!1,v:[]};const n=[t],o=e=>{t.flag!==e&&(t={flag:e,v:[]},n.push(t))},r=e.length;for(let i=0;i<r;++i){const r=e[i];if(d(r)&&e[i+1]!==c)o(!0),t.v.push(r);else if(-1!==f.indexOf(r)||u(r)||l(r)||r===a)o(!1),t.v.push(r);else{const e=t.v.length-1;-1!==e&&t.v[e]!==a?(t={flag:!1,v:[r]},n.push(t)):t.v.push(r)}for(;n.length>1;){const e=n.shift();e.v.length&&(yield e.v)}}const i=n[0];i.v.length&&(yield i.v)}const m=Boolean(/Mac|iP(hone|od|ad)/.exec(navigator.platform))||Boolean(/Android/.exec(navigator.userAgent))||!1,g=Boolean(/Win/.exec(navigator.platform)),v=1024,w=100,y=document.createElement("div");y.style.overflow="hidden",y.style.width="0px",y.style.position="absolute",y.setAttribute("href","https://github.com/samthor/ok-emoji");const E=document.createElement("div");function b(){y.getBoundingClientRect();return{width:E.offsetWidth,height:y.offsetHeight}}E.style.display="inline-block",E.style.whiteSpace="nowrap",E.style.fontSize=`${w}px`,E.style.lineHeight="normal",E.style.fontFamily="sans-serif",y.appendChild(E),document.body.appendChild(y),E.textContent="󿿽";const x=b();E.textContent="😂";const C=b();E.style.letterSpacing=`${v}px`;const L=function(){if(!m)return null;const e=document.createElement("canvas").getContext("2d");e.font="10.5px monospace";const t=e.measureText("😂").width;return function(n){return e.measureText(n).width/t}}();const S=g?e=>{let t=0,n=-1;for(;-1!==(n=e.indexOf("‍\ud83d",n+1));){const o=e.charCodeAt(n+2);56424!==o&&56425!==o||++t}return t}:()=>0,k=m?function(e){return 1===L(e)}:function(e){E.textContent=e;const t=b(),n=1+S(e);return!(Math.round(t.width/(v+w))>n)&&C.height===t.height&&x.width!==t.width-v},_=m?function(e){const t=L(e),n=function(e){return h(s(e))}(e);return~~t===t&&t<=n}:function(e){if(E.textContent=e,y.offsetHeight!==C.height)return!1;const t=s(e),n=h(t)+S(e);if(function(e){return E.textContent=e,Math.round(E.offsetWidth/(v+w))}(e)>n)return!1;for(const e of p(t)){if(null===e)return!1;if(d(e[0])){if(e[1]===c)continue;if(e.length%2)return!1;for(let t=0;t<e.length;t+=2){const n=String.fromCodePoint(e[t],e[t+1]);if(!k(n))return!1}continue}const t=String.fromCodePoint(...e);if(!k(t))return!1}return!0},A=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4e3,n={},o=0;return r=>{let i=n[r];return void 0===i&&(n[r]=i=e(r),++o>t&&(n={},o=0)),i}}(k),P=A("👨🏻"),T=[129309,128106,129340,128107,128108,128109];function q(e){return-1!==T.indexOf(e)}function j(e){return 128118===e||128102===e||128103===e}const M=function(){const e=[128104,128105,0,129334,127877,0,128131,128378,0,128112,129333,0,128103,128102,129490,128117,128116,129491,128109,128108,128107,128120,129332,0],t=new Map;for(let n=0;n<e.length;n+=3){const o={points:{f:e[n],m:e[n+1],n:e[n+2]}};for(let r=0;r<3;++r){const i=e[n+r];if(i){if(t.has(i))throw new Error("duplicate in gender list: "+i);t.set(i,o)}}}return e=>{const n=t.get(e)||null;return n&&void 0===n.single&&(n.single=A(String.fromCodePoint(n.points.f))&&A(String.fromCodePoint(n.points.m)),n.neutral=!!n.points.n&&A(String.fromCodePoint(n.points.n))),n}}();function*N(e){let t=-1;do{const n=e.lastIndexOf(a,t),o=n+1,r=-1===t?e.length:t+1;if(t=n-1,0===e.slice(o,r).length)continue;const i={part:e.slice(o,r),trailer:0!==o};yield i}while(-2!==t)}function B(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;const n={tone:!1,gender:{single:!1,double:!1,neutral:!1}},o=void 0!==t?[]:null;e:for(const i of function*(e){const t=s(e);yield*p(t)}(e)){o&&o.push(i);let e=0,s=!1;for(const o of N(i)){const i=o.part,l=o.trailer;if(void 0===t&&(n.tone||!P)&&n.gender.neutral&&n.gender.single&&n.gender.double)break e;const u=i[0];if(d(u))continue;const f=j(u);l&&f&&(s=!0);const h=128104===(r=u)||128105===r;if(f||h){n.tone=!s&&P,n.gender.single=!0,h&&++e>=2&&(n.gender.double=!0);continue}if(s)continue;const p=M(u);if(null!==p&&(n.gender.single|=p.single,n.gender.neutral|=p.neutral),P&&!n.tone&&!l&&!q(u)){const e=String.fromCodePoint(u,127995);n.tone=A(e)}if(!n.gender.neutral){const e=String.fromCodePoint(u,a,9792,c),t=A(e);n.gender.neutral=t,n.gender.single=n.gender.single||t}}}var r;if(void 0===t)return n;if(void 0!==t.tone&&n.tone&&o.forEach(e=>{if(l(e[1])){if(t.tone)e[1]=t.tone;else{const t=String.fromCodePoint(e[0]);A(t)?e.splice(1,1):e[1]=c}return}if(!t.tone){const t=e.filter(e=>!l(e));return void e.splice(0,e.length,...t)}if(q(e[0]))return;const n=String.fromCodePoint(e[0],t.tone,...e.slice(1));A(n)&&e.splice(1,0,t.tone)}),void 0!==t.gender){o.map(e=>(function(e){let t=0;const n=[];for(;;){const o=e.indexOf(a,t),r=-1===o?e.length:o,i=e.slice(t,r);if(0!==i.length&&n.push(i),-1===o)break;t=o+1}return n})(e)).map((e,n)=>{if(function(e){return 9792===e||9794===e}(e[e.length-1][0])){if(!t.gender)return e.pop(),e}else{let r=[],i=!1;for(let n=0;n<e.length;++n){const o=e[n],s=o[0],a=M(s);if(!a){if(0===n)break;continue}const c=(r=r.length?r:t.gender.split("")).shift();if(i&&(!c||j(s)))break;!c&&a.neutral?o[0]=a.points.n:c&&a.single&&(o[0]="m"===c?a.points.m:a.points.f),i=!0}if(i)return e;if(!t.gender)return null;const s=o[n].slice();s.push(a,9792,c);const l=String.fromCodePoint(...s);if(!A(l))return null;e.push([9792,c])}return e[e.length-1][0]="m"===t.gender[0]?9794:9792,e}).forEach((e,t)=>{if(null===e)return;const n=[];e.forEach(e=>{n.push(...e,a)}),n.pop(),o[t]=n})}return n.out=o.map(e=>String.fromCodePoint(...e)).join(""),n}function W(e,t){const n=e.charCodeAt(t);return e.charCodeAt(t+1)!==c&&(n<5e3&&n>32)}function R(e){const t=e.dataset;for(var n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];o.forEach(e=>{e in t&&delete t[e]})}const D=new WeakMap;function O(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;return void 0!==e?new Promise(t=>{window.setTimeout(()=>window.requestAnimationFrame(t),e)}):new Promise(e=>window.requestAnimationFrame(e))}!function(e){if(D.has(e))return!1;const t={from:e.selectionStart,to:e.selectionEnd},n=document.createElement("div");n.className="overflow-helper",e.parentNode.insertBefore(n,e);const o=document.createElement("div");o.className="underline",n.appendChild(o);let r=null;const i=document.createElement("div");i.className="autocomplete sizer",n.appendChild(i);const s=function(){const e=document.createElement("div");e.className="sizer",n.appendChild(e);const t=document.createElement("div");return t.className="nonce",n=>(e.textContent=n,e.appendChild(t),t.offsetLeft)}();D.set(e,()=>{const t=~~((e.selectionStart+e.selectionEnd)/2);return s(e.value.substr(0,t))-e.scrollLeft}),"complete"!==document.readyState&&(o.classList.add("loading"),window.addEventListener("load",e=>{a(),o.classList.remove("loading")}));const a=()=>{if(t.from>=t.to)return o.hidden=!0,!1;const n=t.from,r=t.to,a=s(e.value.substr(0,n)),c=s(e.value.substr(n,r-n));c<0&&!document.getElementById("less")&&console.warn("invalid sizer width",c,"for text",sizer.textContent),o.hidden=c<=0,o.style.left=a+"px",o.style.width=c+"px",o.style.transform=`translateX(${-e.scrollLeft}px)`,i.style.transform=`translateX(${-e.scrollLeft+a+c}px)`},c=(n,r)=>(t.from=n,t.to=Math.max(n,r),n>=r?(R(e,"prefix","word","focus"),o.hidden=!0,!1):(e.dataset.focus=e.value.substr(n,r-n),a(),!0)),l=e.value.length,d={start:l,end:l,value:void 0},u=t=>{if(!1!==t&&e.selectionStart===d.start&&e.selectionEnd===d.end&&e.value===d.value)return!0;var n=[e.selectionStart,e.selectionEnd];if(d.start=n[0],d.end=n[1],d.value!==e.value&&(e.dispatchEvent(new CustomEvent("value",{detail:e.value})),d.value=e.value),d.start!==d.end)return R(e,"prefix","word"),c(d.start,d.end),o.classList.add("range"),e.classList.add("range"),!1;o.classList.remove("range"),e.classList.remove("range");const r=function(e,t){let n=t,o=t;if(""===e.substr(t).trim()||!W(e,t)){for(;o>0&&!(e.charCodeAt(o-1)>32);--o);o<n&&(n=o)}for(;n>0&&W(e,n-1);--n);for(;o<e.length&&W(e,o);++o);return n>o&&(n=o),{from:n,to:o}}(e.value,d.start),i=r.from,s=r.to;return!(i>=s&&t||(c(i,s)&&(e.dataset.focus=e.dataset.prefix=e.value.substr(i,s-i).toLowerCase(),R(e,"word")),1))};let f={},h=0;const p=(n,o)=>{n.has("select-all")?e.setSelectionRange(0,e.value.length):n.has("select-end")?e.setSelectionRange(e.value.length,e.value.length):!n.has("focus")||n.has("mousedown")||n.has("touchstart")||e.setSelectionRange(d.start,d.end),(n.has("blur")||n.has("focus"))&&(e.scrollLeft=h),h=e.scrollLeft;const s=u(o);if((()=>{const n=e.dataset.prefix||"";if(null===r||0===n.length||"^"!==r.name[0]&&r.name.substr(0,n.length)!==n||0!==e.value.substr(t.to).trim().length)return i.textContent="",!1;const o=("^"===r.name[0]?"":r.name.substr(n.length))+r.emoji;return i.textContent=o,!0})()||(r=null),e.selectionStart!==e.selectionEnd?e.dataset.copy=e.value.substr(e.selectionStart,e.selectionEnd-e.selectionStart):e.dataset.copy=null!==r?e.value.substr(0,t.from)+e.value.substr(t.to)+r.emoji:e.value,s)return;const a={text:e.dataset.focus?e.dataset.prefix||e.dataset.word||null:"",prefix:"prefix"in e.dataset,focus:e.dataset.focus,selection:e.selectionStart!==e.selectionEnd};a.text===f.text&&a.prefix===f.prefix&&a.focus===f.focus&&a.selection===f.selection||(f=a,e.dispatchEvent(new CustomEvent("query",{detail:a})))};let m,g=!1;function v(){let n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e.selectionEnd<t.to)return!1;const o=e.dataset.prefix||"";if(0===o.length||!r||!r.name.startsWith(o))return!1;const i=e.value.substr(t.to),s=i.substr(0,e.selectionStart-t.to);if(0!==s.trim().length)return!1;if(n&&!s.length)return!1;if(0!==i.trim().length&&r.name!==o)return!1;ga("send","event","options","typing");const a={choice:r.emoji,word:r.name};return typer.dispatchEvent(new CustomEvent("emoji",{detail:a})),!0}!function(){let t,n=new Set;const o=e=>{t||(m=void 0,n.clear(),t=window.requestAnimationFrame(()=>{t=null,p(n,m)})),e&&n.add(e.type)};"change keydown keypress focus click mousedown touchstart select input select-all select-end blur".split(/\s+/).forEach(t=>e.addEventListener(t,o,{passive:!0})),o(),e.addEventListener("suggest",e=>{r=e.detail,g&&v(),o()}),e.addEventListener("mousemove",e=>{e.which&&o()}),document.addEventListener("selectionchange",t=>{document.activeElement===e&&o()})}(),e.addEventListener("keydown",e=>{switch(g=!1,e.key){case"Escape":m=!1;break;case"ArrowDown":case"Down":case"ArrowUp":case"Up":return void e.preventDefault();case" ":const t=v();e.shiftKey&&e.preventDefault(),t||(g=!0)}}),e.addEventListener("keyup",e=>{229!==e.keyCode&&e.keyCode||v(!0)}),function(){let t;const n=()=>{t||(t=window.requestAnimationFrame(()=>{t=null,a()}))};window.addEventListener("resize",n),e.addEventListener("wheel",n,{passive:!0})}();const w=n=>{const o=e.scrollLeft,r=t.from,i=t.to,s=e.value.substr(r,i-r);let a=[typer.selectionStart,typer.selectionEnd],l=a[0],u=a[1];const f=typer.selectionDirection,h=n(s);if(null==h)return!1;const p=document.activeElement;typer.focus(),typer.selectionStart=r,typer.selectionEnd=i;const g=typer.value.substr(0,r)+h+typer.value.substr(i);document.execCommand("insertText",!1,h)&&typer.value===g||(typer.value=typer.value.substr(0,r)+h+typer.value.substr(i)),typer.dispatchEvent(new CustomEvent("change"));const v=e=>(e>=i?e=e-(i-r)+h.length:e>r&&(e=r+h.length),e);var w=[v(l),v(u)];return d.start=w[0],d.end=w[1],typer.setSelectionRange(d.start,d.end,f),p&&p.focus(),m=!0,e.scrollLeft=o,c(r,r+h.length),!0};e.addEventListener("modifier",e=>{const t={[e.detail.type]:e.detail.code};w(e=>B(e,t).out)}),e.addEventListener("emoji",t=>{const n=t.detail.choice;w(()=>n)&&(e.dataset.word=t.detail.word||"",R(e,"prefix"))})}(typer);const F=new Map;function $(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=F.get(e);if(!n){n={c:e};const t=new Promise(e=>n.r=e);n.p=t.then(()=>(F.delete(e),n.c())),F.set(e,n)}return window.clearTimeout(n.t),n.t=window.setTimeout(n.r,Math.max(0,t)),n.p}function H(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];if(!t.length)return[];const o={},r=t.shift();return r.forEach((e,t)=>o[e[0]]=t),t.forEach(e=>{e.forEach(e=>{const t=o[e[0]];if(void 0===t)return o[e[0]]=r.length,void r.push(e);const n=r[t],i=e.slice(1);r[t]=function(e){const t=new Set;return e.filter((e,n)=>{if(0!==n){if(t.has(e))return!1;t.add(e)}return!0})}(n.concat(i))})}),r}const I={abcd:[128289],abc:[128292],ab:[127374],a:[127344,65039],atm:[127975],cool:[127378],free:[127379],id:[127380],i:[8505,65039],m:[9410,65039],ok:[127383],o:[127358,65039],p:[127359,65039],sos:[127384],up:[127385],vs:[127386],"!!":[8252,65039],"!?":[8265,65039],"!":[10071],"?":[10067],$:[128178],"£":[128183],"€":[128182],"¥":[128180],new:[127381],ng:[127382],zzz:[128164],1234:[128290],cl:[127377],b:[127345,65039],wc:[128702],100:[128175],10:[128287],"*":[42,65039,8419],"#":[35,65039,8419],"<":[9664,65039],">":[9654,65039],"^":[128316],"+":[10133],"-":[10134],x:[10062],"~":[12336,65039],".":[9210,65039]},z=Object.keys(I);z.sort((e,t)=>e.length!==t.length?t.length-e.length:e<t?-1:e>t?1:0);const U=(e,t)=>{let n=null;if(e[0]>="a"&&e[0]<="z"){n={length:1,points:[e.codePointAt(0)-97+127462,65039]}}else if(e[0]>="0"&&e[0]<="9"){n={length:1,points:[e.codePointAt(0)-48+48,65039,8419]}}if(t&&n)return n;for(const t of z)if(e.startsWith(t))return{length:t.length,points:I[t]};return n};function K(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.toLowerCase();const o=[];for(;n.length;){const e=U(n,t);if(null===e)return null;o.push(...e.points),n=n.substr(e.length)}return String.fromCodePoint(...o)}const J="https://emojibuff.com/api";function X(e){let t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:24,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};const r=window.localStorage[e];if(r){let o;try{o=JSON.parse(r)}catch(t){console.debug("couldn't parse localStorage",e,t),o=null}if(o&&o.results&&(t=Promise.resolve(o.results),o.created>=+new Date-36e5*n))return()=>t}const i=new Promise((t,n)=>{const o=new XMLHttpRequest;o.open("GET",`${J}/${e}`),o.onerror=n,o.responseType="json",o.onload=(()=>t(o.response)),o.send()}).then(e=>"string"==typeof e?JSON.parse(e):e).then(n=>(t=i,n.created=+new Date,window.localStorage[e]=JSON.stringify(n),n.results));return t?()=>t:(o(!0),i.then(()=>o(!1)),()=>i)}const G=function(){const e=X("popular",24,e=>{window.loader.hidden=!e});return()=>e().then(e=>(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;const o={},r={};return e.forEach(e=>{const i=e[0];r[i]=e.slice(1);const s=i.substr(0,t);for(let e=1;e<=s.length;++e){const t=s.substr(0,e);let r=o[t];r||(r=o[t]=[]),r.length<n&&r.push(i)}}),function(e,n){const i=(e=e.toLowerCase()).substr(t);let s=o[e.substr(0,t)]||[];return i&&(s=s.filter(e=>e.substr(t).startsWith(i))),n||(s=s.filter(t=>t===e)),(s=s.map(e=>[e,...r[e]])).length?s:[]}})(e))}(),V=function(){const e=X("hot",1);return()=>e().then(e=>{let t=[];return e.forEach(e=>{t=t.concat(e.slice(1))}),t})}();const Q=function(){let e={};const t=()=>{const t=JSON.stringify(e);return e={},navigator.sendBeacon(J+"/sel",t)};return function(n,o){if("^"===n[0])return;const r=Y(),i=r.indexOf(o);return-1!==i&&r.splice(i,1),r.unshift(o),r.splice(16),window.localStorage.recent=r.join(","),e[n]=o,$(t,5e3)}}();function Y(){return(window.localStorage.recent||"").split(",").filter(e=>e)}const Z=4,ee=100;const te="a",ne="-ok_",oe=window.localStorage,re=new Map,ie=-1!==window.location.search.indexOf("ignore_valid");const se=new class{constructor(e){this.fn_=e,this.queue_=[],this.waiting_=null,this.runner_().catch(e=>{throw console.info("worker runner failed",e),e})}async runner_(){for(await new Promise(e=>this.waiting_=e),this.waiting_=null,await new Promise(e=>window.requestIdleCallback(e));;){if(this.chunk_())return this.runner_();await O()}}chunk_(){const e=window.performance.now();let t=0;for(;this.queue_.length;){const n=this.queue_.shift();if(n.resolve(this.fn_(n.arg)),++t==ee||window.performance.now()-e>Z)break}return!this.queue_.length}task(e){return new Promise(t=>{this.queue_.push({resolve:t,arg:e}),this.waiting_&&this.waiting_()})}}(function(e){if(8203===e.charCodeAt(0))return!0;const t=_(e);return re.set(e,t),t&&(oe[ne+e]=te),t}),ae=ie?()=>!0:se.task.bind(se);function ce(e){const t=re.get(e);return void 0!==t?t:oe[ne+e]===te||void 0}class le{constructor(e){this.holder_=e,this.options_=new Map,this.buttons_=new Map,this.buttonTarget_=new WeakMap,this.buttonPool_=[],window.requestIdleCallback(()=>{for(let e=0;e<10;++e)this.buttonPool_.push(document.createElement("button"))});const t=document.createElement("div");this.holder_.appendChild(t),this.setModifier=(()=>{const e=le.optionType_("modifier","gender"),n=le.optionType_("modifier","tone");t.appendChild(e),t.appendChild(n);const o=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=document.createElement("button");return n.textContent=e,n.dataset.value=t,n},r=[o("⚬",""),o("♀","f"),o("♀♂","fm"),o("♂","m"),o("♂♀","mf")],i=[o("—","")];for(let e=127995;e<=127999;++e)i.push(o(String.fromCodePoint(e),e));const s=(e,t,n)=>{e?n.appendChild(t):t.remove()};return function(o){const a=t.contains(document.activeElement)?document.activeElement:null;r.forEach(t=>{const n=t.dataset.value.length,r=!n&&o.gender.neutral||1===n&&o.gender.single||2===n&&o.gender.double;s(r,t,e)}),i.forEach(e=>s(o.tone,e,n)),t.insertBefore(e,e.nextSibling),t.insertBefore(n,n.nextSibling),a&&a.focus()}})()}static optionType_(e,t){const n=document.createElement("div");return n.className="options "+e,n.dataset[e]=t,n.dataset.name=t,n}optionForName_(e){const t=this.options_.get(e);if(t)return t;const n=document.createElement("div");return n.className="options",n.setAttribute("data-option",e),"^"===e[0]&&(n.classList.add("special"),e=e.substr(1)),n.setAttribute("data-name",e),n}addEmojiTo_(e,t){let n=this.buttons_.get(t);if(n){const t=this.buttonTarget_.get(n);if(null===t)return n;if(void 0===t)return e.appendChild(n),n}else(n=this.buttonPool_.pop()||document.createElement("button")).textContent=t,this.buttons_.set(t,n),async function(e){const t=ce(e);return void 0!==t?t:ae(e)}(t).then(e=>{if(!e)return this.buttonTarget_.set(n,null);const t=this.buttonTarget_.get(n);t&&(t.parentNode.replaceChild(n,t),this.buttonTarget_.delete(n))});const o=document.createTextNode("");return this.buttonTarget_.set(n,o),e.appendChild(o),n}update(e){const t=new Map,n=new Map,o=this.holder_.contains(document.activeElement)?document.activeElement:null;e.forEach(e=>{const o=e[0],r="^"===o[0],i=this.optionForName_(o);t.set(o,i),this.options_.delete(o),this.holder_.appendChild(i);for(let e=0;e<i.children.length;++e){const t=i.children[e],o=t.textContent;r||n.has(o)?(t.remove(),this.buttonPool_.push(t),--e):n.set(o,t)}for(let t,o=1;t=e[o];++o)n.has(t)||n.set(t,this.addEmojiTo_(i,t))}),this.options_.forEach(e=>{for(let t=0;t<e.children.length;++t)this.buttonPool_.push(e.children[t]);e.remove()}),this.options_=t,this.buttons_=n,o&&(document.body.contains(o)?o.focus():typer.focus())}}let de=0;chooser.addEventListener("keyup",e=>{" "===e.key&&"button"===e.target.localName&&(de=window.setTimeout(()=>de=0,0))});let ue=void 0,fe=!1;function he(e){const t={dist:1/0,button:null},n=document.activeElement.getBoundingClientRect(),o=void 0!==ue?ue:n.left;let r=void 0;for(let s=0;s<e.length;++s){const a=e[s],c=a.getBoundingClientRect();if(n.top===c.top)continue;if(void 0===r)r=c.top;else if(c.top!==r)break;const l=Math.abs(c.left-o);if(l<t.dist){var i=[l,a];t.dist=i[0],t.button=i[1]}}if(!t.button)return!1;fe=!0;try{t.button.focus()}finally{fe=!1}return!0}chooser.addEventListener("focus",e=>{fe||(ue=document.activeElement.getBoundingClientRect().left)},!0),chooser.addEventListener("click",e=>{ue=void 0;const n=t(e);let r=void 0;const i=e.target;if("button"!==i.localName);else if(i.parentNode.dataset.modifier){if(e.shiftKey)return;const t="value"in i.dataset?+i.dataset.value||i.dataset.value:null,n={type:i.parentNode.dataset.modifier,code:t};typer.dispatchEvent(new CustomEvent("modifier",{detail:n})),r="modifier"}else if(i.parentNode.dataset.option){if(e.shiftKey){o(i.textContent)&&ga("send","event","options","copy");const e=document.scrollingElement.scrollTop;return n?i.focus():typer.focus(),void(document.scrollingElement.scrollTop=e)}const t=0!==de||e.metaKey||e.ctrlKey?i.parentNode.dataset.option:null,s={choice:i.textContent,word:t};typer.dispatchEvent(new CustomEvent("emoji",{detail:s})),Q(i.parentNode.dataset.option,s.choice),r="emoji"}r&&(ga("send","event","options","click",r),n||typer.focus())}),typer.addEventListener("keydown",e=>{if("ArrowDown"===e.key||"Down"===e.key){const e=typer.getBoundingClientRect();ue=e.left+function(e){const t=D.get(e);if(void 0!==t)return t()}(typer),he(chooser.querySelectorAll("button"))&&ga("send","event","options","keyboardnav")}else if("ArrowRight"===e.key||"Right"===e.key){const e=typer.value.length;if(typer.selectionEnd===e&&typer.selectionStart===e){const e=chooser.querySelector("button");e&&e.focus()}}}),chooser.addEventListener("keydown",t=>{const n=function(t){return t.key?t.key.startsWith("Arrow")?t.key:-1===e.indexOf(t.key)?null:"Arrow"+t.key:null}(t);if(!n)return;if(!chooser.contains(document.activeElement))return;const o=Array.from(chooser.querySelectorAll("button")),r=o.indexOf(document.activeElement);if(-1===r)return;let i,s;if("ArrowLeft"===n?i=-1:"ArrowRight"===n&&(i=1),i){const e=r+i;e>=0&&e<o.length?o[e].focus():e<0&&(typer.focus(),typer.dispatchEvent(new CustomEvent("select-end")))}else{if("ArrowUp"===n)(s=o.slice(0,r)).reverse();else{if("ArrowDown"!==n)return;s=o.slice(r)}if(he(s)||"ArrowUp"===n&&typer.focus(),"ArrowDown"===n){const e=document.activeElement.getBoundingClientRect(),n=e.top+e.height;window.innerHeight-n>64&&t.preventDefault()}}}),function(){const e=new le(chooser);let t={},n=performance.now(),o=[],r=0;function i(e){const t=++r;if(!e)return void typer.dispatchEvent(new CustomEvent("suggest",{detail:null}));let n=null;const i=o.slice().filter(t=>e.length>1&&t[0]===e?(n=t,!1):t[0].startsWith(e)||"^"===t[0][0]);n&&i.unshift(n);!async function(e,t){let n=!1;for(let o=0;o<e.length;++o){const r=e[o];for(let e=1;e<r.length;++e){const o=r[e];let i=ce(o);if(void 0===i&&(n||(t(null),n=!0),i=await ae(o)),i)return t({name:r[0],emoji:o})}}n||t(null)}(i,e=>{t===r&&typer.dispatchEvent(new CustomEvent("suggest",{detail:e}))})}typer.addEventListener("query",r=>{const s=r.detail,a=performance.now(),c=B(!r.detail.prefix&&r.detail.focus||"");e.setModifier(c),t.text!==s.text&&i(s.text);const l=t.text&&s.text&&0!==t.text.length&&t.text.startsWith(s.text.substr(0,t.text.length))||!1;let d=!1;t.text&&t.prefix===s.prefix?a-n>2e3&&(d=!0):d=!0,t=s,n=a;const u=async function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(n&&(await O(n),t!==s))return-1;const a=await function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!e){if(n&&""===e){const e=Y();return e.unshift("^recent"),V().then(t=>(t.unshift("^trending"),[e,t]))}return Promise.resolve([])}const o=[G().then(n=>n(e,t))];if(n){let n=`${J}/q?q=${window.encodeURIComponent(e)}`;t||(n+="&exact");const r=window.fetch(n).then(e=>e.json()).then(e=>e.results);o.push(r)}const r=K(e),i=K(e,!0);if(r||i){const e=["^type"];r&&e.push(r),i&&i!==r&&e.push(i),o.push([e])}return Promise.all(o).then(e=>H(...e))}(s.text,s.prefix,r);return t!==s?-1:(o=a,i(s.text),e.update(a))};u(d?0:250,l).then(e=>{if(e<0)return-2;if(!s.text){const e=window.innerHeight<=400?0:750;return u(e,!0)}const t=Math.max(1e3,100*Math.pow(e,.75));return u(t,!0)}).catch(e=>{console.error("error doing request",e)})})}(),function(e,t){const n=t.querySelector("form"),o=n.querySelector("input"),r=n.querySelector("button");let i="",s=null;e.addEventListener("query",e=>{const n=e.detail,r=null===n.text&&void 0!==n.focus&&n.selection;if(i=n.focus,!r)return s||(o.value="",t.hidden=!0),!1;t.hidden=!1});const a=e=>{r.disabled=!o.value};"input change".split(/\s+/).forEach(e=>o.addEventListener(e,a)),n.addEventListener("submit",e=>{if(e.preventDefault(),s)return!1;n.classList.add("pending"),o.disabled=!0,r.disabled=!0;(s=function(e,t){const n=new FormData;return n.append("name",e),n.append("emoji",t),window.fetch(J+"/name",{method:"POST",mode:"cors",body:n})}(o.value,i).then(e=>{if(!e.ok)throw new Error(e.status);return r.classList.add("success"),!1}).catch(e=>(r.classList.add("failure"),console.warn("failed to submit emoji",e),!0)).then(e=>{n.classList.remove("pending"),o.disabled=!1,o.value="",o.dispatchEvent(new CustomEvent("change")),s=null,i||(t.hidden=!0)})).then(()=>(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return new Promise(t=>window.setTimeout(t,e))})(2e3)).then(()=>{r.className=""})})}(typer,advanced);const pe=e=>{const t=e.detail.trim();document.body.classList.toggle("has-value",Boolean(t))};function me(e){return e instanceof Element&&e.classList.contains("extent")}typer.addEventListener("value",pe),pe({detail:typer.value}),document.body.addEventListener("keydown",e=>{switch(e.key){case"Escape":if(document.activeElement!==typer){typer.focus();break}if(typer.selectionStart!==typer.selectionEnd){"backward"===typer.selectionDirection?typer.selectionStart=typer.selectionEnd:typer.selectionEnd=typer.selectionStart;break}const t=typer.value.length;typer.setSelectionRange(t,t)}}),document.addEventListener("selectionchange",e=>{const t=window.getSelection(),n=t.anchorNode,o=t.focusNode;n!==o&&me(n)&&me(o)&&(t.removeAllRanges(),typer.focus(),typer.dispatchEvent(new CustomEvent("select-all")))},!0),document.addEventListener("focusin",e=>{Promise.resolve().then(()=>{document.activeElement===document.body&&typer.focus()})});const ge=e=>{const t=window.innerHeight;document.body.style.minHeight=`${t}px`};window.addEventListener("resize",ge),window.addEventListener("load",ge),ge(),document.body.addEventListener("click",e=>{const t=e.target&&e.target.closest("a[href]");t&&ga("send","event","outbound","click",t.href)}),window.setTimeout(()=>{const e=(window.localStorage.sources||"").split(",").filter(Boolean),t=/utm_source=([_\w\d]*)/.exec(window.location.search);t&&(-1===e.indexOf(t[1])&&e.push(t[1]),window.localStorage.sources=e.join(",")),e.length||window.localStorage["dismiss-install"]||(document.querySelector("footer").addEventListener("click",e=>{e.target.classList.contains("dismiss-install")&&(ga("send","event","install","dismiss"),window.localStorage["dismiss-install"]=!0,document.body.removeAttribute("data-install"))}),document.body.dataset.install||(navigator.userAgent.match(/Chrome\//)&&navigator.platform.match(/^(Mac|Win|Linux)/)?document.body.dataset.install="ext":"undefined"==typeof Windows&&navigator.platform.startsWith("Win")&&(document.body.dataset.install="windows")))},2500),function(){let e=null;function t(){document.body.removeAttribute("data-install"),e=null}window.addEventListener("beforeinstallprompt",t=>(ga("send","event","install","available"),document.body.dataset.install="pwa",e=t,t.preventDefault(),!1)),window.addEventListener("appinstalled",e=>{ga("send","event","install","installed"),t()}),document.getElementById("install").addEventListener("click",n=>{e&&(e.prompt(),e.userChoice&&e.userChoice.then(e=>{ga("send","event","install",e)}).catch(e=>{console.warn("beforeinstallprompt prompt",e)}).then(t))})}();const ve=document.getElementById("adverts");function we(){const e=ve.querySelector(".active"),t=e&&e.nextElementSibling||ve.firstElementChild;t?(e&&e.classList.remove("active"),t.classList.add("active"),Ee()):console.warn("no adverts to choose from")}let ye;function Ee(){window.clearTimeout(ye),ye=window.setTimeout(()=>{window.requestAnimationFrame(we)},1e4)}if(Ee(),navigator.serviceWorker){navigator.serviceWorker.register("./sw.js").catch(e=>{console.warn("failed to register SW",e)});const e=Boolean(navigator.serviceWorker.controller);navigator.serviceWorker.addEventListener("controllerchange",()=>{e&&(console.debug("got SW controllerchange, reload"),window.location.reload())})}let be=!0;function xe(){"onLine"in navigator&&be!==navigator.onLine&&(ga("send","event","network",navigator.onLine?"online":"offline"),be=navigator.onLine)}xe(),window.addEventListener("online",()=>$(xe)),window.addEventListener("offline",()=>$(xe));const Ce=["Type words, receive emoji 👍","Use your keyboard to search 🔎","Find emoji that your heart desires ❤️⌨️","Keyboard. Emoji. Forever 😍","Keyboard emoji since 2016 📜","Just tap a key to search 👆","Type, tap enter to copy, profit 💸","Emoji for every occasion, just type 🔡"],Le=Math.floor(Math.random()*Ce.length);typer.placeholder=Ce[Le],window.onerror=((e,t,n,o,r)=>{console.info("got err",String(e));try{ga("send","event","error",`${t},${n}:${o}`,String(e),{nonInteraction:!0})}catch(e){}}),window.addEventListener("load",e=>{window.requestAnimationFrame(()=>{const e=document.createElement("script");if(document.head.appendChild(e),e.outerHTML='\n<script\nasync\nsrc="https://cdn.jsdelivr.net/npm/pwacompat@2.0.7/pwacompat.min.js"\nintegrity="sha384-ptgwb3/v69WGur7IwSnWOowVxE7hcRB3DG/EiHdejrw2sFNwUHynFbiRMPxc4hdS"\ncrossorigin="anonymous">\n<\/script>',window._dev)return;const t=document.createElement("script");t.src="https://www.google-analytics.com/analytics.js",t.async=!0,document.head.appendChild(t)})}),window.GoogleAnalyticsObject="ga";const Se=function e(){e.q.push(arguments)};Se.q=[],Se.l=1*new Date,window.ga=Se,navigator.sendBeacon&&ga("set","transport","beacon"),ga("create","UA-39885839-6","auto"),ga("send","pageview");

//# sourceMappingURL=bundle-8e5011f4fc.js.map