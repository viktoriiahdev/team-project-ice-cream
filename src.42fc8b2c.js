parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"/home/runner/work/team-project-ice-cream/team-project-ice-cream/src/images/ice-cream_320.png":[["ice-cream_320.6a81c16d.png","QdRn"],"QdRn"],"/home/runner/work/team-project-ice-cream/team-project-ice-cream/src/images/ice-cream_768.png":[["ice-cream_768.d3517b81.png","QKp2"],"QKp2"],"/home/runner/work/team-project-ice-cream/team-project-ice-cream/src/images/ice-cream_1200.png":[["ice-cream_1200.aa19c500.png","MeqF"],"MeqF"],"./../images/prod-1_320.png":[["prod-1_320.274e2603.png","TY3q"],"TY3q"],"./../images/prod-1_320@2x.png":[["prod-1_320@2x.de40543b.png","nLZO"],"nLZO"],"./../images/prod-1_768.png":[["prod-1_768.4b180c9b.png","vi6z"],"vi6z"],"./../images/prod-1_768@2x.png":[["prod-1_768@2x.eec00e13.png","IEJn"],"IEJn"],"./../images/prod-1_1200.png":[["prod-1_1200.2060a8a1.png","oM8y"],"oM8y"],"./../images/prod-1_1200@2x.png":[["prod-1_1200@2x.5b43322b.png","LlRV"],"LlRV"],"./../images/prod-2_320.png":[["prod-2_320.c559e236.png","Ryrm"],"Ryrm"],"./../images/prod-2_320@2x.png":[["prod-2_320@2x.d05ad36a.png","f7jD"],"f7jD"],"./../images/prod-2_768.png":[["prod-2_768.e43abb55.png","l8r2"],"l8r2"],"./../images/prod-2_768@2x.png":[["prod-2_768@2x.ef66443b.png","CmIH"],"CmIH"],"./../images/prod-2_1200.png":[["prod-2_1200.dd02071f.png","V9rl"],"V9rl"],"./../images/prod-2_1200@2x.png":[["prod-2_1200@2x.c91de28f.png","GTly"],"GTly"],"./../images/prod-3_320.png":[["prod-3_320.459ffbe0.png","BBqM"],"BBqM"],"./../images/prod-3_320@2x.png":[["prod-3_320@2x.11f0ca85.png","hh2X"],"hh2X"],"./../images/prod-3_768.png":[["prod-3_768.cf3d19e7.png","udFO"],"udFO"],"./../images/prod-3_768@2x.png":[["prod-3_768@2x.3df2cdd0.png","LxOs"],"LxOs"],"./../images/prod-3_1200.png":[["prod-3_1200.fbb05458.png","T6lH"],"T6lH"],"./../images/prod-3_1200@2x.png":[["prod-3_1200@2x.5a161d52.png","RVtT"],"RVtT"],"./../images/3dots.png":[["3dots.5bada95c.png","vcsj"],"vcsj"],"./../images/milk-wave_320.png":[["milk-wave_320.8c990fb5.png","PWtT"],"PWtT"],"./../images/milk-wave_320@2x.png":[["milk-wave_320@2x.ca51a2b1.png","PkU5"],"PkU5"],"./../images/milk-wave_768.png":[["milk-wave_768.1912192a.png","g6iK"],"g6iK"],"./../images/milk-wave_768@2x.png":[["milk-wave_768@2x.bef22d5c.png","pAUS"],"pAUS"],"./../images/milk-wave_1200.png":[["milk-wave_1200.323303f4.png","JTsn"],"JTsn"],"./../images/milk-wave_1200@2x.png":[["milk-wave_1200@2x.aa8449a4.png","qAld"],"qAld"],"./../images/advantage-img-1.png":[["advantage-img-1.1e6d7b9b.png","zGf0"],"zGf0"],"./../images/advantage-img-1@x2.png":[["advantage-img-1@x2.326c6123.png","kF9o"],"kF9o"],"./../images/advantage-img-2.png":[["advantage-img-2.32b75786.png","f351"],"f351"],"./../images/advantage-img-2@x2.png":[["advantage-img-2@x2.d810f702.png","tqD6"],"tqD6"],"./../images/advantage-img-3.png":[["advantage-img-3.fd8bdae9.png","mldB"],"mldB"],"./../images/advantage-img-3@x2.png":[["advantage-img-3@x2.58c891d1.png","E9o8"],"E9o8"],"./../images/review-quots.svg":[["review-quots.d20c615d.svg","afpP"],"afpP"]}],"RSqK":[function(require,module,exports) {
const o="backdrop--is-hidden",e=document.querySelector("[data-backdrop]"),c="modal--hidden",t=document.querySelectorAll(".modal"),a=document.querySelectorAll("[data-modal-open]"),l=document.querySelectorAll("[data-modal-close]");function d(){console.log(this),modal=document.querySelector("[data-modal-"+this.dataset.content+"]"),modal.classList.remove(c),e.classList.remove(o)}function s(){e.classList.add(o),modal.classList.add(c)}a.forEach(o=>{o.onclick=d}),l.forEach(o=>{o.onclick=s}),e.addEventListener("click",s),t.forEach(o=>{o.classList.contains("modal--gallery")||(o.onclick=function(o){console.log(this),o.stopPropagation()})});const n=document.querySelector("[data-modal-image]"),r=document.querySelectorAll(".gallery__image");function i(){modal=document.querySelector("[data-modal-"+this.dataset.content+"]"),modal.classList.remove(c),e.classList.remove(o),n.src=this.src}r.forEach(o=>{o.onclick=i});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/modal.js");
},{"./sass/main.scss":"clu1","./js/modal.js":"RSqK"}]},{},["Focm"], null)
//# sourceMappingURL=/team-project-ice-cream/src.42fc8b2c.js.map