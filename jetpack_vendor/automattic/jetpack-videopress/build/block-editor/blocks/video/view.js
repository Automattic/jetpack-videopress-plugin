(()=>{"use strict";var e,r={7701:e=>{e.exports=window.wp.domReady}},t={};function o(e){var n=t[e];if(void 0!==n)return n.exports;var s=t[e]={exports:{}};return r[e](s,s.exports,o),s.exports}o.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},o.d=(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),e=o(7701),o.n(e)()((function(){!function(){const e=document.querySelectorAll(".wp-block-jetpack-videopress");0!==e.length&&e.forEach((function(e){const r=e.querySelector("iframe");if(!r)return;if(!window?.VideoPressIframeApi)return;const t=e.querySelector('script[type="application/json"]');if(!t)return;let o;try{o=JSON.parse(t.innerHTML)}catch(e){return void console.error(e)}t.remove();const n=window.VideoPressIframeApi(r,(()=>{n.status.onPlayerStatusChanged(((e,r)=>{"ready"===e&&"playing"===r&&(n.controls.pause(),n.controls.seek(o.previewAtTime))})),n.status.onTimeUpdate((e=>{const r=1e3*e,t=o.previewAtTime,s=t+o.previewLoopDuration;(r<t||r>s)&&n.controls.seek(t)}))}));e.addEventListener("mouseenter",n.controls.play),e.addEventListener("mouseleave",n.controls.pause)}))}()}))})();