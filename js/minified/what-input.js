!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("whatInput",[],t):"object"==typeof exports?exports.whatInput=t():e.whatInput=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){e.exports=function(){var e=document.documentElement,t="initial",n=null,o=["input","select","textarea"],i=[16,17,18,91,93],r={keyup:"keyboard",mousedown:"mouse",mousemove:"mouse",MSPointerDown:"pointer",MSPointerMove:"pointer",pointerdown:"pointer",pointermove:"pointer",touchstart:"touch"},u=[],d=!1,a={2:"touch",3:"touch",4:"mouse"},p=null,s=function(){r[h()]="mouse",c(),m()},c=function(){window.PointerEvent?(e.addEventListener("pointerdown",f),e.addEventListener("pointermove",w)):window.MSPointerEvent?(e.addEventListener("MSPointerDown",f),e.addEventListener("MSPointerMove",w)):(e.addEventListener("mousedown",f),e.addEventListener("mousemove",w),"ontouchstart"in window&&e.addEventListener("touchstart",v)),e.addEventListener(h(),w),e.addEventListener("keydown",f),e.addEventListener("keyup",f)},f=function(e){if(!d){var u=e.which,a=r[e.type];if("pointer"===a&&(a=l(e)),t!==a||n!==a){var p=document.activeElement&&-1===o.indexOf(document.activeElement.nodeName.toLowerCase())?!0:!1;("touch"===a||"mouse"===a&&-1===i.indexOf(u)||"keyboard"===a&&p)&&(t=n=a,m())}}},m=function(){e.setAttribute("data-whatinput",t),e.setAttribute("data-whatintent",t),-1===u.indexOf(t)&&(u.push(t),e.className+=" whatinput-types-"+t)},w=function(t){if(!d){var o=r[t.type];"pointer"===o&&(o=l(t)),n!==o&&(n=o,e.setAttribute("data-whatintent",n))}},v=function(e){window.clearTimeout(p),f(e),d=!0,p=window.setTimeout(function(){d=!1},200)},l=function(e){return"number"==typeof e.pointerType?a[e.pointerType]:"pen"===e.pointerType?"touch":e.pointerType},h=function(){return"onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll"};return"addEventListener"in window&&Array.prototype.indexOf&&s(),{ask:function(e){return"loose"===e?n:t},types:function(){return u}}}()}])});
