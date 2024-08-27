(()=>{var e={951:(e,t,r)=>{t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;t.splice(1,0,r,"color: inherit");let s=0,n=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(s++,"%c"===e&&(n=s))})),t.splice(n,0,r)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&"undefined"!=typeof process&&"env"in process&&(e=process.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.destroy=(()=>{let e=!1;return()=>{e||(e=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=r(1741)(t);const{formatters:s}=e.exports;s.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}},1741:(e,t,r)=>{e.exports=function(e){function t(e){let r,n,o,i=null;function a(...e){if(!a.enabled)return;const s=a,n=Number(new Date),o=n-(r||n);s.diff=o,s.prev=r,s.curr=n,r=n,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let i=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((r,n)=>{if("%%"===r)return"%";i++;const o=t.formatters[n];if("function"==typeof o){const t=e[i];r=o.call(s,t),e.splice(i,1),i--}return r})),t.formatArgs.call(s,e);(s.log||t.log).apply(s,e)}return a.namespace=e,a.useColors=t.useColors(),a.color=t.selectColor(e),a.extend=s,a.destroy=t.destroy,Object.defineProperty(a,"enabled",{enumerable:!0,configurable:!1,get:()=>null!==i?i:(n!==t.namespaces&&(n=t.namespaces,o=t.enabled(e)),o),set:e=>{i=e}}),"function"==typeof t.init&&t.init(a),a}function s(e,r){const s=t(this.namespace+(void 0===r?":":r)+e);return s.log=this.log,s}function n(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){if(e instanceof Error)return e.stack||e.message;return e},t.disable=function(){const e=[...t.names.map(n),...t.skips.map(n).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let r;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const s=("string"==typeof e?e:"").split(/[\s,]+/),n=s.length;for(r=0;r<n;r++)s[r]&&("-"===(e=s[r].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")))},t.enabled=function(e){if("*"===e[e.length-1])return!0;let r,s;for(r=0,s=t.skips.length;r<s;r++)if(t.skips[r].test(e))return!1;for(r=0,s=t.names.length;r<s;r++)if(t.names[r].test(e))return!0;return!1},t.humanize=r(3171),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")},Object.keys(e).forEach((r=>{t[r]=e[r]})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let r=0;for(let t=0;t<e.length;t++)r=(r<<5)-r+e.charCodeAt(t),r|=0;return t.colors[Math.abs(r)%t.colors.length]},t.enable(t.load()),t}},3171:e=>{var t=1e3,r=60*t,s=60*r,n=24*s,o=7*n,i=365.25*n;function a(e,t,r,s){var n=t>=1.5*r;return Math.round(e/r)+" "+s+(n?"s":"")}e.exports=function(e,c){c=c||{};var d=typeof e;if("string"===d&&e.length>0)return function(e){if((e=String(e)).length>100)return;var a=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!a)return;var c=parseFloat(a[1]);switch((a[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*i;case"weeks":case"week":case"w":return c*o;case"days":case"day":case"d":return c*n;case"hours":case"hour":case"hrs":case"hr":case"h":return c*s;case"minutes":case"minute":case"mins":case"min":case"m":return c*r;case"seconds":case"second":case"secs":case"sec":case"s":return c*t;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===d&&isFinite(e))return c.long?function(e){var o=Math.abs(e);if(o>=n)return a(e,o,n,"day");if(o>=s)return a(e,o,s,"hour");if(o>=r)return a(e,o,r,"minute");if(o>=t)return a(e,o,t,"second");return e+" ms"}(e):function(e){var o=Math.abs(e);if(o>=n)return Math.round(e/n)+"d";if(o>=s)return Math.round(e/s)+"h";if(o>=r)return Math.round(e/r)+"m";if(o>=t)return Math.round(e/t)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},6895:(e,t,r)=>{"use strict";function s(e,t={}){const r={};let s;if("undefined"!=typeof window&&(s=window?.JP_CONNECTION_INITIAL_STATE?.calypsoEnv),0===e.search("https://")){const t=new URL(e);e=`https://${t.host}${t.pathname}`,r.url=encodeURIComponent(e)}else r.source=encodeURIComponent(e);for(const e in t)r[e]=encodeURIComponent(t[e]);!Object.keys(r).includes("site")&&"undefined"!=typeof jetpack_redirects&&Object.hasOwn(jetpack_redirects,"currentSiteRawUrl")&&(r.site=jetpack_redirects.currentBlogID??jetpack_redirects.currentSiteRawUrl),s&&(r.calypso_env=s);return"https://jetpack.com/redirect/?"+Object.keys(r).map((e=>e+"="+r[e])).join("&")}r.d(t,{Z:()=>s})},3998:(e,t,r)=>{"use strict";var s=r(2674),n=r.n(s),o=r(6895),i=r(2175),a=r(4981),c=r(5609),d=r(4333),l=r(9818),u=r(9307),p=r(2694),C=r(5736),f=r(9196),m=r.n(f);const __=C.__;function g({BlockListBlock:e,...t}){const{block:r}=t,{attributes:s,clientId:n,__unstableBlockSource:d}=r,{poster:p}=s,{replaceBlock:C}=(0,l.useDispatch)(i.store),[f,g]=(0,u.useState)();(0,u.useEffect)((()=>{!1===f&&C(n,(0,a.createBlock)("videopress/video",function(e,t){const r=e||t;return r?.videoPressTracks&&(r.tracks=r.videoPressTracks||[],delete r.videoPressTracks),r?.isVideoPressExample&&(r.isExample=r.isVideoPressExample||[],delete r.isVideoPressExample),r}(d?.attrs,s)))}),[n,f,s,d]);const w=(0,u.createInterpolateElement)(__("This block contains unexpected or invalid content, and it seems to be a <moreAboutVideoPressLink>VideoPress video block</moreAboutVideoPressLink> instance.","jetpack-videopress-pkg"),{moreAboutVideoPressLink:m().createElement(c.ExternalLink,{href:(0,o.Z)("jetpack-videopress")})});return f?m().createElement(e,t):m().createElement("div",null,m().createElement(i.Warning,{className:"extended-block-warning",actions:[m().createElement(c.Button,{key:"convert",variant:"primary",onClick:()=>g(!1)},__("Attempt VideoPress Block Recovery","jetpack-videopress-pkg")),m().createElement(c.Button,{key:"ignore",variant:"tertiary",onClick:()=>g(!0)},__("Skip","jetpack-videopress-pkg"))]},w,p&&m().createElement("p",{className:"wp-extended-block-wrapper is-disabled"},m().createElement("p",{className:"extended-block-player__overlay"}),m().createElement("span",{class:"videoplayer-play","aria-hidden":"true"}),m().createElement("img",{src:p,alt:__("VideoPress Video Block","jetpack-videopress-pkg")}))))}(0,p.addFilter)("blocks.registerBlockType","videopress/core-video/handle-block-conversion",((e,t)=>"core/video"!==t?e:{...e,attributes:{...e.attributes,guid:{type:"string"},poster:{type:"string"},videoPressTracks:{type:"array",items:{type:"object"},default:[]},keepUsingCoreVideoVideoPressBlock:{type:"boolean"}}}));const w=(0,d.createHigherOrderComponent)((e=>t=>{const{block:r,isValid:s}=t,{name:o,attributes:i}=r,{guid:a,videoPressTracks:c}=i;return!("core/video"!==o||s||!(a&&c))?m().createElement(g,n()({},t,{BlockListBlock:e})):m().createElement(e,t)}),"handleJetpackCoreVideoDeprecation");(0,p.addFilter)("editor.BlockListBlock","videopress/jetpack-videopress-deprecation",w)},9437:(e,t,r)=>{"use strict";r(3998)},2871:(e,t,r)=>{"use strict";var s=r(951);const n=r.n(s)()("videopress:extensions"),o=window?.videoPressEditorState?.extensions||[];n("Extensions: %o",o)},9196:e=>{"use strict";e.exports=window.React},2175:e=>{"use strict";e.exports=window.wp.blockEditor},4981:e=>{"use strict";e.exports=window.wp.blocks},5609:e=>{"use strict";e.exports=window.wp.components},4333:e=>{"use strict";e.exports=window.wp.compose},9818:e=>{"use strict";e.exports=window.wp.data},9307:e=>{"use strict";e.exports=window.wp.element},2694:e=>{"use strict";e.exports=window.wp.hooks},5736:e=>{"use strict";e.exports=window.wp.i18n},2674:e=>{function t(){return e.exports=t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var s in r)({}).hasOwnProperty.call(r,s)&&(e[s]=r[s])}return e},e.exports.__esModule=!0,e.exports.default=e.exports,t.apply(null,arguments)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}},t={};function r(s){var n=t[s];if(void 0!==n)return n.exports;var o=t[s]={exports:{}};return e[s](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";r(9437),r(2871)})()})();