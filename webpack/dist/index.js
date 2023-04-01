(()=>{"use strict";var e={578:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),a=n.n(o),r=n(645),i=n.n(r)()(a());i.push([e.id,'body{font-family:"Montserrat",sans-serif;font-size:10px}.container{width:1120px;margin:0 auto}.header{background-color:#fff}.header.fixed{position:fixed;top:0;width:100%;z-index:9999;padding-top:60px}.container_header{display:flex;justify-content:space-between;align-items:center;height:116px}.logo{font-weight:700;font-size:24px;color:#1c2a39;text-decoration:none}.menu__list{display:flex;justify-content:space-between;width:372px}.menu__item{font-weight:700;line-height:12px;text-transform:uppercase;cursor:pointer;color:#5c6a79;transition:all .3s ease}.menu__item:hover{color:#1c2a39;font-weight:900}.menu__item_active{color:#1c2a39;font-weight:900}.menu{display:flex;justify-content:space-between;width:120px}.menu__btn_img{transition:all .3s ease;width:14px}.cart{position:relative}.menu__btn_img:hover{width:16px}.cart-badge{display:none;width:13px;height:13px;background:#ff353a;color:#fff;border-radius:50%;text-align:center;position:absolute;left:5px;top:8px}.cart-badge_active{display:block}.news__image{position:relative}.promo1{position:absolute;right:-99px;top:82px}.promo2{position:absolute;top:362px;right:-155px}.slide{display:none}.active{display:block}.news__img{height:720px;width:100%;object-fit:none}.dots{display:flex;justify-content:space-between;width:56px;margin:0 auto}.dot{width:12px;height:12px;border-radius:50%;background-color:#efeef6;transition:all .3s ease}.dot:hover{background-color:#756ad3}.dot_active{background-color:#756ad3}.library{width:1120px;margin:0 auto;padding-bottom:74px}.container_library{padding-top:150px;display:flex;justify-content:space-between}.categories__list{width:125px}.categories__item{font-weight:500;font-size:12px;color:#5c6a79;cursor:pointer;transition:all .3s ease;display:flex;align-items:center;position:relative}.categories__item:hover{color:#1c2a39;font-weight:700;font-size:16px}.categories__item:hover::before{content:"";display:block;width:6px;height:6px;border-radius:50%;margin-right:14px;background:#756ad3;left:-14px;position:absolute}.categories__item:nth-child(even){margin-top:23px;margin-bottom:23px}.categories__item_active{color:#1c2a39;font-weight:700;font-size:16px}.categories__item_active::before{content:"";display:block;width:6px;height:6px;border-radius:50%;left:-14px;background:#756ad3;position:absolute}#books{display:flex;flex-wrap:wrap;justify-content:space-between;margin-left:72px}#books li{text-decoration:none;width:424px;height:300px;display:flex;justify-content:space-between;align-items:center}#books li:nth-child(n+3){margin-top:96px}.books__img{width:212px;height:300px}.books__info{max-width:176px;height:230px}.books__autor{font-weight:400;color:#5c6a79;margin-bottom:4px}.books__title{font-weight:700;font-size:16px;color:#1c2a39;width:176px}.books__text{font-weight:400;margin-top:16px;margin-bottom:16px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical}.books__btn{display:block;width:176px;height:45px;border:1px solid #4c3db2;cursor:pointer;text-transform:uppercase;text-decoration:none;font-size:8px;color:#4c3db2;padding:17px 60px;background:none}.books__btn_2{display:block;width:176px;height:45px;padding:15px 61px;border:none;cursor:pointer;text-transform:uppercase;text-decoration:none;font-size:8px;color:#1c2a39}.more{margin:96px 362px 0 581px;padding:5px}',""]);const c=i},561:(e,t,n)=>{n.d(t,{Z:()=>c});var o=n(81),a=n.n(o),r=n(645),i=n.n(r)()(a());i.push([e.id,"/* Указываем box sizing */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Убираем внутренние отступы */\r\nul[class],\r\nol[class] {\r\n  padding: 0;\r\n}\r\n\r\n/* Убираем внешние отступы */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nul[class],\r\nol[class],\r\nli,\r\nfigure,\r\nfigcaption,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\n/* Выставляем основные настройки по-умолчанию для body */\r\nbody {\r\n  min-height: 100vh;\r\n  scroll-behavior: smooth;\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n}\r\n\r\n/* Удаляем стандартную стилизацию для всех ul и il, у которых есть атрибут class*/\r\nul[class],\r\nol[class] {\r\n  list-style: none;\r\n}\r\n\r\n/* Элементы a, у которых нет класса, сбрасываем до дефолтных стилей */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\n\r\n/* Упрощаем работу с изображениями */\r\nimg {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Указываем понятную периодичность в потоке данных у article*/\r\narticle > * + * {\r\n  margin-top: 1em;\r\n}\r\n\r\n/* Наследуем шрифты для инпутов и кнопок */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* Удаляем все анимации и переходы для людей, которые предпочитай их не использовать */\r\n@media (prefers-reduced-motion: reduce) {\r\n  * {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&i[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var m=n(p),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=a(u,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=n(r[i]);t[c].references--}for(var s=o(e,a),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=s}}},569:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,a&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),o=n(795),a=n.n(o),r=n(569),i=n.n(r),c=n(565),s=n.n(c),l=n(216),d=n.n(l),p=n(589),m=n.n(p),u=n(561),h={};h.styleTagTransform=m(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=d(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;var f=n(578),g={};g.styleTagTransform=m(),g.setAttributes=s(),g.insert=i().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=d(),t()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,n.p,n.p,n.p,n.p,n.p,n.p,n.p,n.p;const b=document.querySelector(".header"),x=document.querySelectorAll(".dot"),v=document.querySelectorAll(".slide"),_=document.getElementById("categories__list"),k=document.querySelectorAll(".categories__item"),C=document.querySelector(".more");let y,w=0;window.addEventListener("scroll",(function(){window.pageYOffset>0?b.classList.add("fixed"):b.classList.remove("fixed")}));const E=e=>{(e=>{for(let t=0;t<v.length;t++)t===e?v[t].classList.add("active"):v[t].classList.remove("active")})(e),(e=>{for(let t=0;t<x.length;t++)t===e?x[t].classList.add("dot_active"):x[t].classList.remove("dot_active")})(e)},N=()=>{w==v.length-1?(w=0,E(w)):(w++,E(w))};x.forEach(((e,t)=>{e.addEventListener("click",(()=>{w=t,E(w),clearInterval(y),y=setInterval(N,5e3)}))})),y=setInterval(N,5e3);const I=e=>{for(let e=0;e<_.children.length;e++)_.children[e].classList.remove("categories__item_active");e.classList.add("categories__item_active")};for(let e=0;e<k.length;e++)k[e].addEventListener("click",(e=>{I(e.target)}));let T=0;const L=()=>{const e=document.querySelector(".cart-badge");T>0?(e.classList.add("cart-badge_active"),e.textContent=T):e.classList.remove("cart-badge_active")},S=()=>{const e=event.target;"buy now"===e.textContent?(T++,L()):"in the card"===e.textContent&&(T--,L())};C.addEventListener("click",(()=>{const e=document.querySelectorAll("#books li").length;fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:Business&printType=books&startIndex=${e}&maxResults=6&langRestrict=en&key=AIzaSyADrMEBjurCdW1c5BLdoMLRxBI_yhWmLOw`).then((e=>e.json())).then((e=>{const t=e.items.map((e=>({title:e.volumeInfo.title,authors:e.volumeInfo.authors,thumbnail:e.volumeInfo.imageLinks.thumbnail,previewLink:e.volumeInfo.previewLink,averageRating:e.volumeInfo.averageRating,ratingsCount:e.volumeInfo.ratingsCount,description:e.volumeInfo.description,price:e.saleInfo&&e.saleInfo.retailPrice}))),n=document.querySelector("#books");t.forEach((e=>{const t=document.createElement("li"),o=document.createElement("img"),a=document.createElement("a"),r=document.createElement("div"),i=document.createElement("p"),c=document.createElement("p"),s=document.createElement("p"),l=document.createElement("span"),d=document.createElement("span"),p=document.createElement("button"),m=document.createTextNode(e.authors),u=document.createTextNode(e.title),h=e.averageRating?document.createTextNode(e.averageRating):document.createTextNode(""),f=e.ratingsCount?document.createTextNode(e.ratingsCount):document.createTextNode(""),g=e.description?document.createTextNode(e.description):document.createTextNode(""),b=e.saleInfo&&e.saleInfo.retailPrice?document.createTextNode(e.price&&`${e.price.amount} ${e.price.currencyCode}`):document.createTextNode(""),x=document.createElement("span"),v=document.createTextNode("buy now");o.src=e.thumbnail,o.className="books__img",r.className="books__info",i.className="books__autor",c.className="books__title",s.className="books__text",l.className="books__rating",d.className="books__views",x.className="books__price",x.appendChild(b),p.className="books__btn",p.onclick=S,p.addEventListener("click",(()=>{"buy now"===p.textContent?p.textContent="in the card":p.textContent="buy now",p.classList.toggle("books__btn_2")})),a.href=e.previewLink,a.target="_blank",a.appendChild(o),i.appendChild(m),c.appendChild(u),l.appendChild(h),d.appendChild(f),s.appendChild(g),p.appendChild(v),r.appendChild(i),r.appendChild(c),r.appendChild(l),r.appendChild(d),r.appendChild(s),r.appendChild(x),r.appendChild(p),t.appendChild(a),t.appendChild(r),t.appendChild(document.createElement("br")),n.appendChild(t)}))})).catch((e=>console.error(e)))})),fetch("https://www.googleapis.com/books/v1/volumes?q=subject:Business&printType=books&startIndex=0&maxResults=6&langRestrict=en&key=AIzaSyADrMEBjurCdW1c5BLdoMLRxBI_yhWmLOw").then((e=>e.json())).then((e=>{const t=e.items.map((e=>({title:e.volumeInfo.title,authors:e.volumeInfo.authors,thumbnail:e.volumeInfo.imageLinks.thumbnail,previewLink:e.volumeInfo.previewLink,averageRating:e.volumeInfo.averageRating,ratingsCount:e.volumeInfo.ratingsCount,description:e.volumeInfo.description,price:e.saleInfo&&e.saleInfo.retailPrice}))),n=document.querySelector("#books");t.forEach((e=>{const t=document.createElement("li"),o=document.createElement("img"),a=document.createElement("a"),r=document.createElement("div"),i=document.createElement("p"),c=document.createElement("p"),s=document.createElement("p"),l=document.createElement("span"),d=document.createElement("span"),p=document.createElement("button"),m=document.createTextNode(e.authors),u=document.createTextNode(e.title),h=e.averageRating?document.createTextNode(e.averageRating):document.createTextNode(""),f=e.ratingsCount?document.createTextNode(e.ratingsCount):document.createTextNode(""),g=e.description?document.createTextNode(e.description):document.createTextNode(""),b=e.saleInfo&&e.saleInfo.retailPrice?document.createTextNode(e.price&&`${e.price.amount} ${e.price.currencyCode}`):document.createTextNode(""),x=document.createElement("span"),v=document.createTextNode("buy now");o.src=e.thumbnail,o.className="books__img",r.className="books__info",i.className="books__autor",c.className="books__title",s.className="books__text",l.className="books__rating",d.className="books__views",x.className="books__price",x.appendChild(b),p.className="books__btn",p.onclick=S,p.addEventListener("click",(()=>{"buy now"===p.textContent?p.textContent="in the card":p.textContent="buy now",p.classList.toggle("books__btn_2")})),a.href=e.previewLink,a.target="_blank",a.appendChild(o),i.appendChild(m),c.appendChild(u),l.appendChild(h),d.appendChild(f),s.appendChild(g),p.appendChild(v),r.appendChild(i),r.appendChild(c),r.appendChild(l),r.appendChild(d),r.appendChild(s),r.appendChild(x),r.appendChild(p),t.appendChild(a),t.appendChild(r),t.appendChild(document.createElement("br")),n.appendChild(t)}))})).catch((e=>console.error(e))),_.querySelectorAll(".categories__item").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.currentTarget.textContent.trim();fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${t}&printType=books&startIndex=0&maxResults=6&langRestrict=en&key=AIzaSyADrMEBjurCdW1c5BLdoMLRxBI_yhWmLOw`).then((e=>e.json())).then((e=>{const t=document.querySelector("#books");t.innerHTML="";const n=e.items.map((e=>({title:e.volumeInfo.title,authors:e.volumeInfo.authors,thumbnail:e.volumeInfo.imageLinks.thumbnail,previewLink:e.volumeInfo.previewLink,averageRating:e.volumeInfo.averageRating,ratingsCount:e.volumeInfo.ratingsCount,description:e.volumeInfo.description,price:e.saleInfo&&e.saleInfo.retailPrice})));n.forEach((e=>{const n=document.createElement("li"),o=document.createElement("img"),a=document.createElement("a"),r=document.createElement("div"),i=document.createElement("p"),c=document.createElement("p"),s=document.createElement("p"),l=document.createElement("span"),d=document.createElement("span"),p=document.createElement("a"),m=document.createTextNode(e.authors),u=document.createTextNode(e.title),h=document.createTextNode(e.averageRating),f=document.createTextNode(e.ratingsCount),g=document.createTextNode(e.description),b=document.createTextNode("buy now");if(e.price){const t=document.createElement("span");t.className="books__price",e.saleInfo&&e.saleInfo.retailPrice?document.createTextNode(e.price&&`${e.price.amount} ${e.price.currencyCode}`):document.createTextNode(""),document.createElement("span"),r.appendChild(t)}o.src=e.thumbnail,o.className="books__img",r.className="books__info",i.className="books__autor",c.className="books__title",s.className="books__text",l.className="books__rating",d.className="books__views",p.className="books__btn",p.onclick=S,p.addEventListener("click",(()=>{"buy now"===p.textContent?p.textContent="in the card":p.textContent="buy now",p.classList.toggle("books__btn_2")})),a.href=e.previewLink,a.target="_blank",a.appendChild(o),i.appendChild(m),c.appendChild(u),l.appendChild(h),d.appendChild(f),s.appendChild(g),p.appendChild(b),r.appendChild(i),r.appendChild(c),r.appendChild(l),r.appendChild(d),r.appendChild(s),r.appendChild(p),n.appendChild(a),n.appendChild(r),n.appendChild(document.createElement("br")),t.appendChild(n)}))}))}))})).catch((e=>console.error(e))),_.querySelectorAll(".categories__item").forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault();const t=e.currentTarget.textContent.trim();fetch(`https://www.googleapis.com/books/v1/volumes?q=subject:${t}&printType=books&startIndex=0&maxResults=6&langRestrict=en&key=AIzaSyADrMEBjurCdW1c5BLdoMLRxBI_yhWmLOw`).then((e=>e.json())).then((e=>{const t=document.querySelector("#books");t.innerHTML="";const n=e.items.map((e=>({title:e.volumeInfo.title,authors:e.volumeInfo.authors,thumbnail:e.volumeInfo.imageLinks.thumbnail,previewLink:e.volumeInfo.previewLink,averageRating:e.volumeInfo.averageRating,ratingsCount:e.volumeInfo.ratingsCount,description:e.volumeInfo.description,price:e.saleInfo&&e.saleInfo.retailPrice})));n.forEach((e=>{const n=document.createElement("li"),o=document.createElement("img"),a=document.createElement("a"),r=document.createElement("div"),i=document.createElement("p"),c=document.createElement("p"),s=document.createElement("p"),l=document.createElement("span"),d=document.createElement("span"),p=document.createElement("a"),m=document.createTextNode(e.authors),u=document.createTextNode(e.title),h=document.createTextNode(e.averageRating),f=document.createTextNode(e.ratingsCount),g=document.createTextNode(e.description),b=document.createTextNode("buy now");if(e.price){const t=document.createElement("span");t.className="books__price",e.saleInfo&&e.saleInfo.retailPrice?document.createTextNode(e.price&&`${e.price.amount} ${e.price.currencyCode}`):document.createTextNode(""),document.createElement("span"),r.appendChild(t)}o.src=e.thumbnail,o.className="books__img",r.className="books__info",i.className="books__autor",c.className="books__title",s.className="books__text",l.className="books__rating",d.className="books__views",p.className="books__btn",p.onclick=S,p.addEventListener("click",(()=>{"buy now"===p.textContent?p.textContent="in the card":p.textContent="buy now",p.classList.toggle("books__btn_2")})),a.href=e.previewLink,a.target="_blank",a.appendChild(o),i.appendChild(m),c.appendChild(u),l.appendChild(h),d.appendChild(f),s.appendChild(g),p.appendChild(b),r.appendChild(i),r.appendChild(c),r.appendChild(l),r.appendChild(d),r.appendChild(s),r.appendChild(p),n.appendChild(a),n.appendChild(r),n.appendChild(document.createElement("br")),t.appendChild(n)}))}))}))})).catch((e=>console.error(e)))})()})();