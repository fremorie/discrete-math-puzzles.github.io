!function(n){var t={};function e(i){if(t[i])return t[i].exports;var a=t[i]={i:i,l:!1,exports:{}};return n[i].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.m=n,e.c=t,e.d=function(n,t,i){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:i})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var i=Object.create(null);if(e.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var a in n)e.d(i,a,function(t){return n[t]}.bind(null,a));return i},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=2)}([function(n,t,e){"use strict";n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e=function(n,t){var e=n[1]||"",i=n[3];if(!i)return e;if(t&&"function"==typeof btoa){var a=(o=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),r=i.sources.map((function(n){return"/*# sourceURL=".concat(i.sourceRoot||"").concat(n," */")}));return[e].concat(r).concat([a]).join("\n")}var o,s,l;return[e].join("\n")}(t,n);return t[2]?"@media ".concat(t[2]," {").concat(e,"}"):e})).join("")},t.i=function(n,e,i){"string"==typeof n&&(n=[[null,n,""]]);var a={};if(i)for(var r=0;r<this.length;r++){var o=this[r][0];null!=o&&(a[o]=!0)}for(var s=0;s<n.length;s++){var l=[].concat(n[s]);i&&a[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),t.push(l))}},t}},function(n,t,e){"use strict";var i,a=function(){return void 0===i&&(i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var n={};return function(t){if(void 0===n[t]){var e=document.querySelector(t);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}n[t]=e}return n[t]}}(),o=[];function s(n){for(var t=-1,e=0;e<o.length;e++)if(o[e].identifier===n){t=e;break}return t}function l(n,t){for(var e={},i=[],a=0;a<n.length;a++){var r=n[a],l=t.base?r[0]+t.base:r[0],d=e[l]||0,p="".concat(l," ").concat(d);e[l]=d+1;var c=s(p),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==c?(o[c].references++,o[c].updater(u)):o.push({identifier:p,updater:b(u,t),references:1}),i.push(p)}return i}function d(n){var t=document.createElement("style"),i=n.attributes||{};if(void 0===i.nonce){var a=e.nc;a&&(i.nonce=a)}if(Object.keys(i).forEach((function(n){t.setAttribute(n,i[n])})),"function"==typeof n.insert)n.insert(t);else{var o=r(n.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var p,c=(p=[],function(n,t){return p[n]=t,p.filter(Boolean).join("\n")});function u(n,t,e,i){var a=e?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(n.styleSheet)n.styleSheet.cssText=c(t,a);else{var r=document.createTextNode(a),o=n.childNodes;o[t]&&n.removeChild(o[t]),o.length?n.insertBefore(r,o[t]):n.appendChild(r)}}function h(n,t,e){var i=e.css,a=e.media,r=e.sourceMap;if(a?n.setAttribute("media",a):n.removeAttribute("media"),r&&btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleSheet)n.styleSheet.cssText=i;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(i))}}var g=null,m=0;function b(n,t){var e,i,a;if(t.singleton){var r=m++;e=g||(g=d(t)),i=u.bind(null,e,r,!1),a=u.bind(null,e,r,!0)}else e=d(t),i=h.bind(null,e,t),a=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)};return i(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap)return;i(n=t)}else a()}}n.exports=function(n,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=a());var e=l(n=n||[],t);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var i=0;i<e.length;i++){var a=s(e[i]);o[a].references--}for(var r=l(n,t),d=0;d<e.length;d++){var p=s(e[d]);0===o[p].references&&(o[p].updater(),o.splice(p,1))}e=r}}}},function(n,t,e){e(3),e(5),e(7);$((function(){var n={A:{x:400,y:70},B:{x:250,y:160},C:{x:500,y:350},D:{x:200,y:400}},t={1:{bridges:{1:{data:["319","524","22","68","8"],translate:"translate(330.791354, 558.381080) rotate(26.000000) translate(-330.791354, -558.381080)",destinations:["C","D"]},2:{data:["61.5","158","22","55","8"],translate:"translate(72.500053, 185.376397) rotate(25.000000) translate(-72.500053, -185.376397)",destinations:["B","D"]},3:{data:["159","52","22","44","8"],translate:"translate(169.666982, 74.116028) rotate(59.000000) translate(-169.666982, -74.116028)",destinations:["A","B"]},4:{data:["242","171","22","44","8"],translate:"translate(253.259516, 193.362648) rotate(105.000000) translate(-253.259516, -193.362648)",destinations:["B","C"]},5:{data:["252","96","22","50","8"],translate:"translate(263.934043, 121.463836) rotate(170.000000) translate(-263.934043, -121.463836)",destinations:["A","C"]},6:{data:["10","140","22","54","8"],translate:"translate(21.500053, 167.376397) rotate(25.000000) translate(-21.500053, -167.376397)",destinations:["B","D"]},7:{data:["80","3","22","38","8"],translate:"translate(91.138656, 22.584937) rotate(25.000000) translate(-91.138656, -22.584937)",destinations:["A","B"]}},paths:{CD1:{to:[[500,350],[500,385],[480,385],[480,380],[455,380],[455,395],[437,395],[436,420],[473,570],[450,625],[380,572],[360,563],[200,560],[224,430],[200,400]]},BD2:{to:[[250,160],[232,180],[222,200],[195,253],[210,258],[175,400]]},BD6:{to:[[250,160],[233,180],[226,193],[173,175],[146,236],[195,253],[210,258],[175,400]]},AB3:{to:[[400,70],[410,90],[313,48],[296,80],[330,100],[286,130],[278,150],[250,160]]},AB7:{to:[[400,70],[410,90],[313,48],[300,74],[239,42],[195,133],[250,160]]},AC5:{to:[[400,70],[400,90],[383,125],[390,140],[400,140],[430,300],[442,322],[500,315],[500,350]]},CB4:{to:[[500,350],[500,315],[442,322],[430,300],[420,242],[360,223],[290,190],[250,160]]}}},2:{bridges:{1:{data:["319","524","22","68","8"],translate:"translate(330.791354, 558.381080) rotate(26.000000) translate(-330.791354, -558.381080)",destinations:["C","D"]},2:{data:["459","52","22","64","8"],translate:"translate(269.666982, 74.116028) rotate(90) translate(-169.666982, -74.116028)",destinations:["C","D"]},3:{data:["242","171","22","44","8"],translate:"translate(253.259516, 193.362648) rotate(105.000000) translate(-253.259516, -193.362648)",destinations:["B","C"]},4:{data:["252","96","22","50","8"],translate:"translate(263.934043, 121.463836) rotate(170.000000) translate(-263.934043, -121.463836)",destinations:["A","C"]},5:{data:["10","140","22","54","8"],translate:"translate(21.500053, 167.376397) rotate(25.000000) translate(-21.500053, -167.376397)",destinations:["B","D"]},6:{data:["80","3","22","38","8"],translate:"translate(91.138656, 22.584937) rotate(25.000000) translate(-91.138656, -22.584937)",destinations:["A","B"]}},paths:{CD1:{to:[[500,350],[500,385],[480,385],[480,380],[455,380],[455,395],[437,395],[436,420],[473,570],[450,625],[380,572],[360,563],[200,560],[224,430],[200,400]]},CD2:{to:[[500,350],[437,350],[433,415],[200,400]]},BD5:{to:[[250,160],[233,180],[226,193],[173,175],[146,236],[195,253],[210,258],[175,400]]},AB6:{to:[[400,70],[410,90],[313,48],[300,74],[239,42],[180,150],[250,160]]},AC4:{to:[[400,70],[400,90],[383,125],[390,140],[400,140],[430,300],[442,322],[500,315],[500,350]]},CB3:{to:[[500,350],[500,315],[442,322],[430,300],[420,242],[360,223],[290,190],[250,160]]}}}},e=function(n,t,e){this.snap=Snap(n).attr({viewBox:"0 0 544 646"}),this.snap.image("/images/bridge"+t+".svg",0,0,544,646),this._id=t,this._cb=e,this.flush()};e.prototype.init=function(){this.current,this.path=[],this.data=t[this._id]||{},this._g&&this._g.remove(),this._gp&&this._gp.remove(),this._gp={},this._g={},this._p={},this._currentDestination=void 0,this.destinations=void 0,this._destinationsGroup=void 0},e.prototype.draw=function(n){return this._addBridges(),this._addPaths(),this._addDestinations(),this},e.prototype._addDestinations=function(){return this.destinations={},this._destinationsGroup=this.snap.g().attr({id:"destinations"}),Object.keys(n).forEach(function(t){var e=n[t],i=this.snap.circle(e.x,e.y,30).attr({fill:"#fff",stroke:"#2771FF","stroke-width":2,destinationId:t}).mousedown(function(n){n.preventDefault();var t=n.target.getAttribute("destinationId");this._currentDestination||(this.destinations[t].attr({fill:"#2771FF"}),this._currentDestination=t)}.bind(this)),a=this.snap.text(e.x-11,e.y+12,t).attr({"font-size":35,fill:"#ccc"});this.destinations[t]=i,this._destinationsGroup.add(i,a)}.bind(this)),this},e.prototype._addBridges=function(){var n=this.data.bridges||{};this._b={},Object.keys(n).forEach(function(t){var e=n[t].data,i=n[t].translate;this._b[t]=this.snap.rect(e[0],e[1],e[2],e[3],e[4]).attr({transform:i,targetId:t}).mousedown(function(e){e.preventDefault();var i=e.target.getAttribute("targetId"),a=n[t].destinations;if(-1!==a.indexOf(this._currentDestination)&&this.path&&-1===this.path.indexOf(i)||!this.path){this.path.push(i);var r=this._currentDestination;this._currentDestination=a[0]!==this._currentDestination?a[0]:a[1],this.destinations[r].attr({fill:"#fff"}),this.destinations[this._currentDestination].attr({fill:"#2771FF"}),this._b[i].attr({fill:"#2771FF"}),this.triggerRenderPath([r,this._currentDestination,i].join("")),6===this.path.length&&21===this.path.reduce((function(n,t){return n+Number(t)}),0)&&2===this._id&&this._cb(this._id)}}.bind(this))}.bind(this)),this._g=this.snap.g().attr({transform:"translate(137, 39)",stroke:"#2771FF","stroke-width":"2",fill:"#40a738"}),Object.keys(this._b).forEach(function(n){this._g.add(this._b[n])}.bind(this))},e.prototype._addPaths=function(){var n=this.data.paths||{};this._p={},Object.keys(n).forEach(function(t){var e=n[t]||{};if(e&&e.to){this._p[t]=this.snap.path("M0,0").attr({targetPath:"M"+e.to.toString(),targetId:t});var i=t.concat().split("").splice(0,2).reverse().join("")+t[2];this._p[i]=this.snap.path("M0,0").attr({targetPath:"M"+e.to.concat().reverse().toString(),targetId:i})}}.bind(this)),this._gp=this.snap.g().attr({stroke:"#2771FF","stroke-width":"3",fill:"none"}),Object.keys(this._p).forEach(function(n){this._gp.add(this._p[n])}.bind(this))},e.prototype.triggerRenderPath=function(n){var t=this._p[n];t.attr("state")||Snap.animate(0,Snap.path.getTotalLength(t.attr("targetPath")),function(n){t.attr({path:Snap.path.getSubpath(t.attr("targetPath"),0,n)})}.bind(this),2e3,mina.easeInOut,(function(){t.attr({state:"finished"})}))},e.prototype.flush=function(){return this.init(),this.draw(),this};var i=[1,2],a=i.reduce((function(n,t){return n.push(new e("#bridge"+t,t,(function(){window.q.successCb(t,i)}))),n}),[]);$(".reset").on("click",(function(){var n=$(this).data("id")-1;a[n].flush()})),$("#congratulations_modal").on("show.bs.modal",(function(n){if(n.relatedTarget){var t=n.relatedTarget.getAttribute("data-id");1==t&&window.q.successCb(t,i)}}))}))},function(n,t,e){var i=e(1),a=e(4);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var r={insert:"head",singleton:!1};i(a,r);n.exports=a.locals||{}},function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i)()(!1);a.push([n.i,".magic-square-container {\n  width: 100%;\n  padding-top: 100%;\n  position: relative;\n}\n.magic-square-container input[type='text'] {\n  border: 0;\n  font-size: 50px;\n  line-height: 100px;\n  text-align: center;\n}\n.magic-square-text {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  bottom: -1px;\n  right: -1px;\n}\n.magic-square-text .field {\n  outline: none;\n  background: #f5f5dc;\n  border: 1px solid #000;\n  border-right-width: 0;\n}\n.magic-square-text .output-right {\n  border-left: 1px solid #000;\n}\n.magic-square-text input {\n  width: 100%;\n  height: 100%;\n  border: 0;\n  font-size: 50px;\n  line-height: 100px;\n  text-align: center;\n}\n.magic-square-text input:disabled {\n  background: #5bc0de;\n  color: #fff;\n}\n.magic-square-text input.output-left:disabled {\n  background: #fff;\n  color: #fff;\n}\n.magic-square-text .output-bottom-diagonal:disabled,\n.magic-square-text .output-bottom-diagonal-main:disabled {\n  background: #a4e441;\n  color: #fff;\n}\n.magic-square-content {\n  margin: auto;\n  max-width: 500px;\n}\n.td {\n  display: inline-block;\n  width: 20%;\n}\n.numbers-on-chessboard-container {\n  width: 100%;\n  padding-top: 100%;\n  position: relative;\n}\n.numbers-on-chessboard-container * {\n  margin: 0;\n}\n.numbers-on-chessboard-container input[type='text'] {\n  border: 0;\n  font-size: 32px;\n  line-height: 64px;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n}\n.numbers-on-chessboard-container input[type='text'].field.invalid {\n  color: #f00;\n}\n.numbers-on-chessboard-text {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: -1px;\n  right: -1px;\n}\n.numbers-on-chessboard-text .field {\n  outline: none;\n  background: #ffdab9;\n  color: #000;\n}\n.numbers-on-chessboard-text .field.invalid {\n  color: #f00;\n}\n.numbers-on-chessboard-td:nth-child(2n) .field {\n  background: #a0522d;\n  color: #fff;\n}\n.numbers-on-chessboard-td:nth-child(2n) .field.invalid {\n  color: #f00;\n}\n.numbers-on-chessboard-tr {\n  margin-bottom: -3px;\n}\n.numbers-on-chessboard-tr:nth-child(2n) .field {\n  background: #a0522d;\n  color: #fff;\n}\n.numbers-on-chessboard-tr:nth-child(2n) .field.invalid {\n  color: #f00;\n}\n.numbers-on-chessboard-tr:nth-child(2n) .numbers-on-chessboard-td:nth-child(2n) .field {\n  background: #ffdab9;\n  color: #000;\n}\n.numbers-on-chessboard-tr:nth-child(2n) .numbers-on-chessboard-td:nth-child(2n) .field.invalid {\n  color: #f00;\n}\n.numbers-on-chessboard-content {\n  margin: auto;\n  max-width: 500px;\n}\n.numbers-on-chessboard-td {\n  display: inline-block;\n  width: 12.5%;\n}\n.arturs-books__container,\n.arturs-books__container--no-border {\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 300px;\n  position: relative;\n}\n.arturs-books__container:before,\n.arturs-books__container--no-border:before {\n  content: '';\n  position: absolute;\n  top: 50%;\n  bottom: -3px;\n  left: -5px;\n  right: 0;\n  border: 3px solid #000;\n  border-top: none;\n  display: inline-block;\n}\n.arturs-books__container--no-border:before {\n  display: none;\n}\n.arturs-books__number-container {\n  width: 10%;\n  display: inline-block;\n  position: relative;\n}\n.arturs-books__book-container {\n  width: 10%;\n  display: inline-block;\n  position: relative;\n  padding-top: 40%;\n}\n.arturs-books__display,\n.arturs-books__steps,\n.arturs-books__rule {\n  font-size: 15px;\n  font-size: 4vmin;\n  padding-bottom: 1vmin;\n}\n.arturs-books__book {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin-right: 5px;\n  border: 3px solid #000;\n  height: 100%;\n  background: #ffe4c4;\n  transition: all 0.5s;\n}\n.arturs-books__book.active {\n  background: #008000;\n}\n.arturs-books__book:before {\n  content: '';\n  height: 5%;\n  display: block;\n  border: 2px solid #000;\n  border: 0.5vmin solid #000;\n  border-left: 0;\n  border-right: 0;\n  margin-top: 10px;\n}\n.arturs-books__slot-number {\n  position: relative;\n  font-size: 15px;\n  font-size: 5vmin;\n}\n.arturs-books__logo {\n  height: 60%;\n}\n.arturs-books__number {\n  font-size: 20px;\n  font-size: 5vmin;\n  color: #9f8200;\n}\n.arturs-books__number input[type='text'] {\n  text-align: center;\n  background: transparent;\n  margin: 5%;\n  border: 2px solid #000;\n  border: 0.5vmin solid #9f8200;\n  width: 90%;\n}\n.arturs-books__number input[type='text']:disabled {\n  border-color: transparent;\n}\n.arturs-books__score {\n  color: #aaa;\n}\n.oppositeColor {\n  display: block;\n  margin: 25px auto;\n}\n.padded {\n  padding: 20px;\n}\n.tab-pane {\n  user-select: none;\n}\n.tab-pane.padded {\n  margin: 50px;\n}\n.sign span {\n  position: absolute;\n  margin: 0 auto auto -10px;\n}\n.sign span:before {\n  content: '\\2212';\n  margin: -2px -7px -7px -7px;\n  position: absolute;\n  background: #eee;\n  border-radius: 60px;\n  text-align: center;\n  line-height: 13px;\n  padding: 5px;\n  cursor: pointer;\n  z-index: 9;\n  display: block;\n  width: 25px;\n  height: 25px;\n}\n.sign :checked + span:before {\n  content: '\\002b';\n}\n.btn {\n  margin: 10px;\n}\n#mySvg1,\nsvg.borderred {\n  border: solid #000 2px;\n  display: block;\n  margin: 25px auto;\n}\n.hotel {\n  display: block;\n  margin: 25px auto;\n}\n.hotel-item {\n  cursor: pointer;\n}\n.hotel-item.wrong span {\n  background: #d9534f;\n}\n.hotel-item.current span {\n  background: #337ab7;\n}\n.hotel-item span {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  background: #5bc0de;\n  margin: -30px;\n  border-radius: 60px;\n  width: 60px;\n  height: 60px;\n  padding: 16px 22px;\n  font-size: 25px;\n  line-height: 25px;\n  color: #fff;\n}\n@media only screen and (max-width: 800px) and (orientation: landscape) {\n  .hotel-item {\n    width: 33%;\n    display: inline-block;\n  }\n}\n.nav-tabs li.success a {\n  color: #5cb85c !important;\n}\nsvg.borderred,\nsvg.fixed {\n  max-width: 600px;\n  max-height: 600px;\n}\n#tower1,\n#tower2,\n#tower3 {\n  width: 100%;\n  max-width: 800px;\n  height: 240px;\n  display: flex;\n  padding: 0;\n  justify-content: center;\n  align-items: flex-end;\n  position: relative;\n  margin: 0 auto;\n}\n@media only screen and (max-width: 800px) and (orientation: portrait) {\n  #tower1,\n  #tower2,\n  #tower3 {\n    width: 100%;\n    max-width: 100%;\n    flex-direction: column;\n    height: 100%;\n    align-items: center;\n  }\n  #tower1 .tower,\n  #tower2 .tower,\n  #tower3 .tower {\n    margin: 70px 0 0 0;\n  }\n}\n.tower {\n  width: 100%;\n  height: 240px;\n  border-bottom: 16px solid #337ab7;\n  position: relative;\n  text-align: center;\n  padding: 0;\n  margin: 70px 50px 0 0;\n  display: flex;\n  flex-direction: column-reverse;\n  align-items: center;\n  cursor: pointer;\n}\n.tower:before {\n  width: 16px;\n  height: 100%;\n  content: '';\n  display: block;\n  background: #337ab7;\n  position: absolute;\n  bottom: -8px;\n  left: calc(50% - 8px);\n  z-index: 10;\n}\n.tower:last-child {\n  margin: 70px 0 0 0;\n}\n.disk {\n  list-style: none;\n  height: 30px;\n  display: block;\n  font-size: 0;\n  z-index: 20;\n}\n.disk.hold {\n  position: absolute;\n  top: -50px;\n  left: 50%;\n  transform: translateX(-50%);\n}\n.disk-1 {\n  width: 40px;\n  background-color: #5cb85c;\n}\n.disk-2 {\n  width: 90px;\n  background-color: #5bc0de;\n}\n.disk-3 {\n  width: 140px;\n  background-color: #f0ad4e;\n}\n.disk-4 {\n  width: 190px;\n  background-color: #d9534f;\n}\n.balls {\n  display: inline-block;\n}\n.balls .ball {\n  line-height: 45px;\n}\n.balls .ball:after {\n  content: ' + ';\n  padding: 0 10px;\n  display: inline-block;\n}\n.balls .ball:last-child:after {\n  content: ' = ';\n}\n.balls .ball .form-control {\n  display: inline-block;\n  max-width: 55px;\n}\n.balls .ball .form-control.error {\n  border-color: #a94442;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n}\n.result {\n  line-height: 45px;\n  min-width: 50px;\n  display: inline-block;\n  text-align: left;\n}\n.m50 {\n  margin: 50px 0;\n}\n.cells {\n  display: inline-block;\n}\n.cells .cell {\n  line-height: 45px;\n}\n.cells .cell:after {\n  padding: 0 10px;\n  display: inline-block;\n}\n.cells .cell .form-control {\n  display: inline-block;\n  max-width: 55px;\n}\n.cells .cell .form-control.error {\n  border-color: #a94442;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n}\n.circle {\n  fill: #5bc0de;\n}\n.circle.active {\n  fill: #5cb85c;\n}\n#counters text,\n#vertices-text text {\n  pointer-events: none;\n}\ninput.error {\n  border-color: #a94442;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);\n}\ninput.error:focus {\n  border-color: #a94442;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,0.075), 0 0 8px rgba(169,68,66,0.6);\n}\n#destinations text {\n  pointer-events: none;\n}\n.subtitle.level {\n  display: none;\n}\n.subtitle.level.active {\n  display: block;\n}\n#weights text {\n  pointer-events: none;\n}\n.numbers,\n.florins,\n.cut {\n  padding: 0;\n  margin: 0 auto 50px;\n  width: 100%;\n  max-width: 550px;\n  list-style-type: none;\n  font-size: 24px;\n  line-height: 55px;\n}\n.numbers__item,\n.florins__item,\n.cut__item {\n  width: 55px;\n  height: 55px;\n  display: inline-block;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.numbers__item:hover,\n.florins__item:hover,\n.cut__item:hover {\n  color: #0056ff;\n}\n.numbers__item.checked,\n.florins__item.checked,\n.cut__item.checked {\n  color: #0056ff;\n  background: #eee;\n  border-radius: 60px;\n}\n.numbers__item.faded,\n.florins__item.faded,\n.cut__item.faded {\n  color: #ddd;\n}\n.florins .florin__man-first img,\n.florins .florin__man-second img {\n  max-width: 100%;\n  margin: 15px 0;\n}\n.florins .florin__arrow {\n  display: none;\n  margin: 60px 0px;\n}\n.florins .florin__arrow img {\n  max-width: 100%;\n}\n@media (min-width: 992px) {\n  .florins .florin__arrow {\n    display: block;\n  }\n}\n.game15 .content table {\n  margin: 50px auto;\n  border: 1px solid #aaa;\n  padding: 10px;\n  display: inline-block;\n  background: #eee;\n}\n.game15 .content table td {\n  background: #5bc0de;\n  margin: 7px;\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  line-height: 60px;\n  color: #fff;\n  font-weight: bold;\n  font-size: 20px;\n  border-radius: 6px;\n  transition: 0.2s all ease;\n}\n.game15 .content table td.blank {\n  background: transparent;\n  border: 1px solid #5bc0de;\n}\n.game15 .content table td.clickable {\n  background: #5cb85c;\n  cursor: pointer;\n}\n.job-assignment table,\n.sums-table table {\n  margin: 0 auto;\n  width: 100%;\n  max-width: 550px;\n  table-layout: fixed;\n}\n.job-assignment table th,\n.sums-table table th,\n.job-assignment table td,\n.sums-table table td {\n  word-break: break-word;\n}\n.job-assignment table td,\n.sums-table table td {\n  height: 40px;\n}\n.job-assignment table td input,\n.sums-table table td input {\n  width: 100%;\n}\n#vertices path {\n  cursor: pointer;\n}\n.sums-table span.error {\n  color: #a94442;\n}\n.antimagic-square {\n  padding-right: 20%;\n  padding-bottom: 20%;\n  padding-left: 20%;\n}\n.antimagic-square__table {\n  font-size: 32px;\n  line-height: 32px;\n  display: table;\n  width: 100%;\n  max-width: 600px;\n  margin: 0 auto;\n  border-collapse: collapse;\n}\n@media only screen and (min-width: 480px) {\n  .antimagic-square__table {\n    font-size: 48px;\n    line-height: 48px;\n  }\n}\n@media only screen and (min-width: 640px) {\n  .antimagic-square__table {\n    font-size: 64px;\n    line-height: 64px;\n  }\n}\n.antimagic-square__row {\n  display: table-row;\n}\n.antimagic-square__cell {\n  display: table-cell;\n  text-align: center;\n  border: 2px solid #000;\n  cursor: pointer;\n}\n.antimagic-square__strut {\n  position: relative;\n  padding-bottom: 100%;\n  user-select: none;\n}\n.antimagic-square__text {\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 32px;\n  margin-top: -16px;\n  top: 50%;\n  left: 0;\n  pointer-events: none;\n}\n@media only screen and (min-width: 480px) {\n  .antimagic-square__text {\n    height: 48px;\n    margin-top: -24px;\n  }\n}\n@media only screen and (min-width: 640px) {\n  .antimagic-square__text {\n    height: 64px;\n    margin-top: -32px;\n  }\n}\n.antimagic-square__sum {\n  width: 100%;\n  height: 32px;\n  margin-top: -16px;\n  position: absolute;\n  left: 0;\n  top: 50%;\n  pointer-events: none;\n}\n.antimagic-square__sum_row {\n  left: 100%;\n}\n.antimagic-square__sum_col {\n  width: 100%;\n  top: 150%;\n}\n.antimagic-square__sum_dia0,\n.antimagic-square__sum_dia1 {\n  top: 150%;\n  left: 100%;\n}\n.antimagic-square__sum_dia1 {\n  right: 100%;\n  left: auto;\n}\n@media only screen and (min-width: 480px) {\n  .antimagic-square__sum {\n    height: 48px;\n    margin-top: -24px;\n  }\n}\n@media only screen and (min-width: 640px) {\n  .antimagic-square__sum {\n    height: 64px;\n    margin-top: -32px;\n  }\n}\n.antimagic-square_warn-row0 .antimagic-square__row:first-child .antimagic-square__sum_row {\n  color: #d9534f;\n}\n.antimagic-square_warn-row1 .antimagic-square__row:nth-child(2) .antimagic-square__sum_row {\n  color: #d9534f;\n}\n.antimagic-square_warn-row2 .antimagic-square__row:nth-child(3) .antimagic-square__sum_row {\n  color: #d9534f;\n}\n.antimagic-square_warn-col0 .antimagic-square__cell:first-child .antimagic-square__sum_col {\n  color: #d9534f;\n}\n.antimagic-square_warn-col1 .antimagic-square__cell:nth-child(2) .antimagic-square__sum_col {\n  color: #d9534f;\n}\n.antimagic-square_warn-col2 .antimagic-square__cell:nth-child(3) .antimagic-square__sum_col {\n  color: #d9534f;\n}\n.antimagic-square_warn-dia0 .antimagic-square__sum_dia0 {\n  color: #d9534f;\n}\n.antimagic-square_warn-dia1 .antimagic-square__sum_dia1 {\n  color: #d9534f;\n}\n.prime .text {\n  line-height: 34px;\n  display: inline-block;\n  margin: 0 10px;\n}\n.prime .form-control {\n  display: inline-block;\n  width: auto;\n}\n.summing-up-digits-nowrap {\n  display: inline-block;\n  white-space: nowrap;\n}\n.svg-side {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n.svg-side-container {\n  display: inline-block;\n  position: relative;\n  width: 50%;\n  padding-top: 50%;\n}\n.graph-cliques-edge.graph-cliques-active {\n  stroke: #000;\n}\n.graph-cliques-edge {\n  stroke: #eee;\n}\n.graph-cliques-error1,\n.graph-cliques-error2 {\n  display: none;\n}\n.balanced-graphs #vertices .vertex {\n  cursor: pointer;\n}\n.balanced-graphs .circle {\n  fill: #5bc0de;\n}\n.balanced-graphs .circle.error {\n  fill: #f00;\n}\n.make-a-tree__svg {\n  margin: 40px auto;\n}\n.make-a-tree__edge {\n  cursor: pointer;\n}\n.tossing-coins__desc {\n  margin-top: 24px;\n}\n.tossing-coins__button:focus {\n  outline: none;\n}\n.antivirus-system .circle {\n  cursor: pointer;\n}\n.antivirus-system #vertices path {\n  cursor: default;\n}\n.take-the-last-stone {\n  min-height: 250px;\n}\n.take-the-last-stone .history-item {\n  display: block;\n  line-height: 15px;\n  margin: 8px 0;\n}\n.take-the-last-stone .left-pile,\n.take-the-last-stone .right-pile {\n  text-align: center;\n}\n.take-the-last-stone .left-pile,\n.take-the-last-stone .right-pile,\n.take-the-last-stone .history {\n  margin-bottom: 40px;\n}\n.take-the-last-stone .rock {\n  width: 25px;\n  height: 25px;\n  background: #ffa500;\n  display: inline-block;\n  margin: 5px 4px 3px;\n  border-radius: 50%;\n}\n.take-the-last-rock {\n  margin-top: 40px;\n  min-height: 250px;\n}\n.take-the-last-rock .history-item {\n  display: block;\n  line-height: 15px;\n  margin: 8px 0;\n}\n.take-the-last-rock .pile {\n  text-align: center;\n}\n.take-the-last-rock .pile,\n.take-the-last-rock .history {\n  margin-bottom: 40px;\n}\n.take-the-last-rock .rock {\n  width: 25px;\n  height: 25px;\n  background: #ffa500;\n  display: inline-block;\n  margin: 5px 4px 3px;\n  border-radius: 50%;\n}\n@media (max-width: 768px) {\n  .take-the-last-rock {\n    margin-top: 25px;\n    min-height: 100px;\n  }\n  .take-the-last-rock .rock {\n    width: 25px;\n    height: 25px;\n    margin: 2px 4px;\n  }\n}\n.primitive-calculator .calculator-wrapper {\n  background: #f4f4f4;\n  border: 1px solid #ccc;\n  border-radius: 20px;\n  width: 300px;\n  margin: 30px auto;\n  padding: 30px;\n}\n.primitive-calculator .calculator-wrapper .field {\n  background: #fff;\n  border: 1px solid #ccc;\n  margin: 10px auto 30px;\n  width: 240px;\n  text-align: right;\n  padding: 0 15px;\n}\n.primitive-calculator .calculator-wrapper .field,\n.primitive-calculator .calculator-wrapper .first,\n.primitive-calculator .calculator-wrapper .second,\n.primitive-calculator .calculator-wrapper .third {\n  font-size: 22px;\n  line-height: 33px;\n}\n.clock-game .history {\n  margin-bottom: 40px;\n}\n.clock-game .history .gray {\n  color: #808080;\n}\n.clock-game .history > .content {\n  margin-top: auto;\n}\n.clock-game .history > .counter {\n  margin-bottom: 10px;\n}\n.clock-game .content {\n  margin-top: 40px;\n  min-height: 250px;\n}\n.list .nav-pills {\n  margin: 0 10px 20px 0;\n}\n.list .nav-pills .clear-filter.disabled {\n  display: none;\n}\n.list .quizzes-list {\n  list-style-type: circle;\n}\n.list .quizzes-list .title {\n  margin: 0 5px 5px 0;\n  display: inline-block;\n}\n.list .quizzes-list .label {\n  margin: 0 3px;\n}\n.list .quizzes-list.tags li {\n  margin-bottom: 15px;\n  list-style-type: none;\n}\n.list .quizzes-list.tags .title {\n  display: block;\n  margin: 5px auto 5px 30px;\n}\n.arrange-apples .targets {\n  display: inline-block;\n}\n.arrange-apples .targets .row:nth-child(2n+1) .target {\n  background: #fafafa;\n}\n.arrange-apples .targets .target {\n  width: 25px;\n  height: 25px;\n  border: 1px solid #ffa500;\n  border-radius: 50%;\n  margin: 5px 4px 3px;\n  display: inline-block;\n}\n.arrange-apples .targets .target.correct {\n  background: #ffa500 !important;\n}\n.arrange-apples .apples {\n  display: inline-block;\n  vertical-align: top;\n  padding: 10px 30px;\n}\n.arrange-apples .apples .apple {\n  width: 25px;\n  height: 25px;\n  background: #ffa500;\n  display: inline-block;\n  margin: 5px 4px 3px;\n  border-radius: 50%;\n}\n.arrange-apples .apples .apple.ui-draggable-disabled,\n.arrange-apples .apples .apple.empty {\n  border: 1px solid #ffa500;\n  background: #fff;\n}\n@media (min-width: 768px) {\n  .arrange-apples .targets .target {\n    width: 50px;\n    height: 50px;\n    margin: 2px 4px;\n  }\n  .arrange-apples .apples .apple {\n    width: 50px;\n    height: 50px;\n    margin: 2px 4px;\n  }\n}\n@media (min-width: 992px) {\n  .arrange-apples .apples {\n    padding: 0 30px;\n  }\n}\n.touch-all-segments .wrapper {\n  border: 1px solid #5cb85c;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 300px;\n  height: 350px;\n  max-height: 350px;\n  position: relative;\n  margin: 30px auto;\n}\n.touch-all-segments .wrapper .lines,\n.touch-all-segments .wrapper .dividers {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.touch-all-segments .wrapper .line-wrap {\n  display: block;\n  height: 26.923076923076923px;\n  width: 100%;\n  position: relative;\n  text-align: initial;\n}\n.touch-all-segments .wrapper .line-wrap.active .line {\n  background: #00f;\n}\n.touch-all-segments .wrapper .line-wrap .line {\n  display: inline-block;\n  height: 3px;\n  background: #000;\n  margin-top: 11.961538461538462px;\n  transition: background 0.2s ease;\n}\n.touch-all-segments .wrapper .divider {\n  display: inline-block;\n  width: 3.846153846153846%;\n  height: 100%;\n  cursor: pointer;\n}\n.touch-all-segments .wrapper .divider.active .inner {\n  border-right: 1px dashed #00f;\n}\n.touch-all-segments .wrapper .divider:first-child {\n  margin-left: 1.923076923076923%;\n}\n.touch-all-segments .wrapper .divider .inner {\n  display: inline-block;\n  height: 100%;\n  width: 0;\n  border-right: 1px dashed #ccc;\n  margin-left: -50%;\n  transition: border 0.2s ease;\n}\n.activity-selection .wrapper {\n  border: 1px solid #5cb85c;\n  max-width: 900px;\n  margin-left: auto;\n  margin-right: auto;\n  min-width: 300px;\n  height: 350px;\n  max-height: 350px;\n  position: relative;\n  margin: 30px auto;\n}\n.activity-selection .wrapper .lines,\n.activity-selection .wrapper .dividers {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n}\n.activity-selection .wrapper .line-wrap {\n  display: block;\n  height: 26.923076923076923px;\n  width: 100%;\n  position: relative;\n  text-align: initial;\n}\n.activity-selection .wrapper .line-wrap.active .line {\n  background: #00f;\n}\n.activity-selection .wrapper .line-wrap.disable .line-i {\n  cursor: auto;\n}\n.activity-selection .wrapper .line-wrap.disable .line {\n  background: #ccc;\n}\n.activity-selection .wrapper .line-wrap .line-i {\n  padding: 5px 0;\n  cursor: pointer;\n}\n.activity-selection .wrapper .line-wrap .line {\n  display: inline-block;\n  height: 3px;\n  background: #000;\n  margin-top: 11.961538461538462px;\n  width: 100%;\n  transition: background 0.2s ease;\n}\n.activity-selection .wrapper .divider {\n  display: inline-block;\n  width: 3.846153846153846%;\n  height: 100%;\n}\n.activity-selection .wrapper .divider.active .inner {\n  border-right: 1px dashed #00f;\n}\n.activity-selection .wrapper .divider:first-child {\n  margin-left: 1.923076923076923%;\n}\n.activity-selection .wrapper .divider .inner {\n  display: inline-block;\n  height: 100%;\n  width: 0;\n  border-right: 1px dashed #ccc;\n  margin-left: -50%;\n  transition: border 0.2s ease;\n}\n.largest-number .content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.largest-number .content .sortable-item {\n  margin: 2px;\n  background: #5cb85c;\n  font-weight: bold;\n  color: #fff;\n  font-size: 24px;\n  border-radius: 2px;\n  width: 90px;\n  height: 90px;\n  line-height: 90px;\n}\n.localMaximum {\n  display: block;\n  margin: 25px auto;\n}\n.maximum-advertisement-revenue .legend {\n  margin-top: 20px;\n}\n.maximum-advertisement-revenue .result {\n  margin-top: 20px;\n  line-height: 1;\n}\n.maximum-advertisement-revenue .advertisers {\n  display: inline-block;\n}\n.maximum-advertisement-revenue .advertisers .advertise {\n  width: 70px;\n  height: 70px;\n  background: #ffa500;\n  display: inline-block;\n  padding: 14px;\n  margin: -1px;\n  transition: background 0.3s ease;\n}\n.maximum-advertisement-revenue .advertisers .advertise.ui-draggable-disabled {\n  background: #fbe9c9;\n}\n.maximum-advertisement-revenue .advertisers .advertise.correct {\n  background: #ffa500 !important;\n}\n.maximum-advertisement-revenue .advertisers .slot {\n  display: inline-block;\n  width: 70px;\n  height: 70px;\n  border: 1px dashed #ffa500;\n  margin: 5px 4px 3px;\n}\n.maximum-advertisement-revenue .advertisers .slot.ui-draggable-disabled,\n.maximum-advertisement-revenue .advertisers .slot.empty {\n  border: 1px solid #ffa500;\n}\n.maximum-advertisement-revenue .slots {\n  display: inline-block;\n  vertical-align: top;\n}\n.maximum-advertisement-revenue .slots .wrap-slot {\n  width: 70px;\n  height: 70px;\n  display: inline-block;\n  margin: 5px 4px 3px;\n}\n.maximum-advertisement-revenue .slots .wrap-slot div {\n  margin-top: 5px;\n}\n.maximum-advertisement-revenue .slots .slot {\n  width: 70px;\n  height: 70px;\n  border: 1px dashed #ffa500;\n}\n.maximum-advertisement-revenue .slots .slot.ui-draggable-disabled,\n.maximum-advertisement-revenue .slots .slot.empty {\n  border: 1px solid #ffa500;\n}\n@media (min-width: 768px) {\n  .maximum-advertisement-revenue .advertisers .slot {\n    margin: 2px 4px;\n  }\n  .maximum-advertisement-revenue .slots .wrap-slot {\n    margin: 2px 4px;\n  }\n}\n@media (min-width: 992px) {\n  .maximum-advertisement-revenue .advertisers {\n    padding: 0 30px;\n  }\n}\n.padded {\n  position: relative;\n  margin: 30px 0;\n}\n.petrolstation {\n  display: flex;\n  justify-content: space-between;\n  padding: 13px 0 0;\n  margin-bottom: -2px;\n}\n.road {\n  border-top: 5px solid;\n  display: flex;\n  justify-content: space-between;\n  padding: 13px 0;\n}\n.delimeter,\n.station,\n.station img {\n  width: 32px;\n}\n.station img {\n  cursor: pointer;\n}\n.station.active:before {\n  z-index: -1;\n  content: '';\n  width: 10px;\n  height: 10px;\n  border-radius: 10px;\n  background: #0095ff;\n  position: absolute;\n  margin: -15px 9px;\n}\n.car {\n  position: absolute;\n  top: 0;\n  width: 92px;\n  left: 0;\n  transition: left 0.2s linear;\n}\n.tank {\n  width: 30px;\n  height: 90px;\n  border-radius: 3px;\n  border: 1px solid;\n  margin: 0 auto;\n  position: relative;\n}\n.tank:after {\n  content: 'Tank';\n  bottom: -25px;\n  position: absolute;\n  left: 0;\n}\n.tank .inner {\n  width: 100%;\n  height: 100%;\n  background: #0095ff;\n  bottom: 0;\n  position: absolute;\n  transition: height 0.2s ease;\n}\n.hidden {\n  display: none;\n}\n.footer {\n  margin: 30px 0 0;\n  border-top: 1px solid #ccc;\n}\n.footer > div {\n  margin: 20px auto;\n  font-size: 13px;\n}\n",""]),t.default=a},function(n,t,e){var i=e(1),a=e(6);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[n.i,a,""]]);var r={insert:"head",singleton:!1};i(a,r);n.exports=a.locals||{}},function(n,t,e){"use strict";e.r(t);var i=e(0),a=e.n(i)()(!1);a.push([n.i,"#destinations text {\n  pointer-events: none;\n}\n.subtitle.level {\n  display: none;\n}\n.subtitle.level.active {\n  display: block;\n}\n",""]),t.default=a},function(n,t){$((function(){$(".nav a").click((function(){var n=$(this).data("target").replace("#",".");$(".container .subtitle").removeClass("active"),$(n).addClass("active")}));var n={};window.q={getCookie:function(n){var t=document.cookie.match(new RegExp("(?:^|; )"+n.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):void 0},setCookie:function(n,t,e){var i=(e=e||{}).expires;if("number"==typeof i&&i){var a=new Date;a.setTime(a.getTime()+1e3*i),i=e.expires=a}i&&i.toUTCString&&(e.expires=i.toUTCString());var r=n+"="+(t=encodeURIComponent(t));for(var o in e){r+="; "+o;var s=e[o];!0!==s&&(r+="="+s)}document.cookie=r},successCb:function(t,e){n[t]=!0,e=e||[],$(".nav-tabs .active").addClass("success"),"undefined"===window.q.getCookie("cId")?$("#congratulations_modal").modal("show"):$.ajax({type:"POST",url:document.location.href,data:JSON.stringify({_csrf:window.q.getCookie("csrf"),connectionId:window.q.getCookie("cId"),score:Object.keys(n).length,total:e.length}),contentType:"application/json; charset=utf-8",success:function(n){window.q.getCookie("cId")&&$(n.error?"#error_modal":"#congratulations_modal").modal("show")},error:function(n){window.q.getCookie("cId")&&$("#error_modal").modal("show")}})}}}))}]);