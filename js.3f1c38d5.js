parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mwQg":[function(require,module,exports) {
var e=document.createElement("div");e.className="grid",document.body.appendChild(e),document.addEventListener("keydown",function(d){d.ctrlKey&&"KeyG"===d.code&&e.classList.toggle("grid_visible")});
},{}],"wzuc":[function(require,module,exports) {
var e=document.querySelector(".js-slide.carousel-section__slide_active");document.querySelector(".js-slide-buttons").addEventListener("click",function(s){var t=s.target.dataset.slideId;if(t&&e.dataset.slideId!=t){var i=document.querySelector('.js-slide[data-slide-id="'.concat(t,'"]'));i.classList.add("carousel-section__slide_show"),e.classList.add("carousel-section__slide_hide"),e.classList.remove("carousel-section__slide_active");var a=e;e=i,document.querySelector('.js-slide-button[data-slide-id="'.concat(a.dataset.slideId,'"]')).classList.remove("pagination__dot_active"),document.querySelector('.js-slide-button[data-slide-id="'.concat(t,'"]')).classList.add("pagination__dot_active"),e.addEventListener("animationend",function(){e.classList.add("carousel-section__slide_active"),e.classList.remove("carousel-section__slide_show"),a.classList.remove("carousel-section__slide_hide"),e.parentNode.insertBefore(e,a)},{once:!0})}});
},{}],"QvaY":[function(require,module,exports) {
"use strict";require("./grid"),require("./slider");
},{"./grid":"mwQg","./slider":"wzuc"}]},{},["QvaY"], null)
//# sourceMappingURL=js.3f1c38d5.js.map