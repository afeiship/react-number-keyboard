!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("classnames"),require("noop"),require("prop-types"),require("react")):"function"==typeof define&&define.amd?define(["classnames","noop","prop-types","react"],t):"object"==typeof exports?exports.ReactNumberKeyboard=t(require("classnames"),require("noop"),require("prop-types"),require("react")):e.ReactNumberKeyboard=t(e.classnames,e.noop,e["prop-types"],e.react)}(this,function(e,t,n,r){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.generator=void 0;var o=n(3),a=r(o),i=n(1);t.default=a.default,t.generator=i.generator},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.generator=void 0;var o=n(2);r(o),t.generator=function(e,t){return[{content:"1",action:"value",ignore:!1},{content:"2",action:"value",ignore:!1},{content:"3",action:"value",ignore:!1},{content:"4",action:"value",ignore:!1},{content:"5",action:"value",ignore:!1},{content:"6",action:"value",ignore:!1},{content:"7",action:"value",ignore:!1},{content:"8",action:"value",ignore:!1},{content:"9",action:"value",ignore:!1},{content:e,action:"value",theme:"gray",ignore:t},{content:"0",action:"value",ignore:!1},{content:"",action:"delete",ignore:!1}]}},function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAnCAMAAACoquHzAAAAWlBMVEUAAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAT55vGAAAAAHXRSTlMA/vsB+f338wPv68ex0b+5IkThqV44FyxzSwiKjE89DEoAAAKYSURBVDjLrVXblpswDLRkS+aWhNy3u9X//2ZnIAGye/LQ0wqTYDMaaSQD6WE5/X/L71nzv1K/W28uh1OVkKfp9OO1v+TU/GQZTzWiaCxmxJsWkdOvJn/3OLY2wz2EhwQjTdddtJfv/L+64D0NczBraAmGArsFVrrPrYycRy/iUYPDjeQ6pyY84fvxAr8CLtEymdZlQoDeeQjcMNtv8VcL1cLleSAMf9VB4ViAstOmvKMTVKVAQHXgjFq1SmBAEOP5RqoXZeJewn0YhwgSQmc93PdeSACGhf3YsRQVg5E/chpazOlyQKbR4ZLKl7pXTArLwlRlj74wgnicc/rsp3UKevDfS8hkE8Qs9jnlMyUPOTf9rD4W/rENf+Lnivi+yelQyznlW2/IcIu/V2Q9Y+feKM4d9srQp9TsNV74c9NB54LXYoxg0WeAAed2wrHiv9jSdskmJgec+0/c7aGTQ9Z8ztxLsuLpwECQiio5Jq7bfG4tAzzxzL0IIAPaAg1TlWzNh+XhRBaHaciQkfsOdGdThaANPh9btvWxA0iOumMZucMhHSRMlKtSMGXQsUQHB3ZYyF5neBfRpyYPIa0wqtjztYKOGWUW4lu2tzlQqMcUoaiYIsqjvw03kIKOOtSku6Z8YGLsDBwurRQrTOABz02+KhxA2VapZffRU34VKSV2lx2vVCB787zcorCYvFGcQCTNgUuuwUC4fXxv7hDg4JlxxlHcGaWSXiFma/cWCRvSMRctxnNmxyX+XKN/wedjjcrA1PzdnPq/XuBNunmYFqXHBmo0BjihLgBuRXeQbDhVjAfAEct79wiV6dXhuqPosmEPmJhC97jC1z7wfe6xmiqF19r/fvNZeP9xIHt+c+PnWsMM8l99kcjzB0o4Pl2clkU5AAAAAElFTkSuQmCC"},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(7);var c=n(11),l=r(c),s=n(10),f=r(s),p=n(8),d=r(p),h=n(1),v=n(9),b=r(v),m="",g="delete",A=function(e){function t(e){o(this,t);var n=a(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.initialState(n.props),n}return i(t,e),u(t,[{key:"initialState",value:function(e){var t=e.value;Array.isArray(t)||(t=t.split(m).map(function(e){return{content:e,action:"value",ignore:!1}})),this.state={value:this.getSlicedValue(t)}}},{key:"componentWillReceiveProps",value:function(e,t){var n=this;e.value!==this.state.value&&(this.initialState(e),this.setState(this.state,function(){n.props.onChange({target:{value:e.value}})}))}},{key:"isOverflow",value:function(e){var t=this.props.maxLength,n=e.length;return n>=t}},{key:"getSlicedValue",value:function(e){var t=this.props.maxLength;return this.isOverflow(e)?e.slice(0,t):e}},{key:"_onItemClick",value:function(e){var t=this.props,n=t.onItemClick,r=t.onChange,o=this.state.value;e.ignore||(e.action===g?o.pop():this.isOverflow(o)||o.push(e)),n({item:e,value:o}),r({target:{value:o}})}},{key:"render",value:function(){var e=this;return l.default.createElement("div",{className:(0,d.default)("react-number-keyboard",this.props.className)},l.default.createElement("div",{className:"bd"},l.default.createElement("div",{className:"wrapper"},this.props.items.map(function(t,n){return l.default.createElement("button",{"data-action":t.action,"data-ignore":t.ignore,onTouchStart:e._onItemClick.bind(e,t),"data-theme":t.theme?t.theme:null,className:"cell",key:n,dangerouslySetInnerHTML:{__html:t.content}})}))))}}]),t}(c.PureComponent);A.propTypes={className:f.default.string,maxLength:f.default.number,items:f.default.array,value:f.default.oneOfType([f.default.array,f.default.string]),onItemClick:f.default.func,onChange:f.default.func},A.defaultProps={onItemClick:b.default,onChange:b.default,value:[],maxLength:Number.MAX_VALUE,items:(0,h.generator)("00")},t.default=A},function(e,t,n){t=e.exports=n(5)(),t.push([e.id,".react-number-keyboard{color:#000;font-size:10px}.react-number-keyboard>.bd{height:20em;width:100%;overflow:hidden}.react-number-keyboard>.bd>.wrapper{margin-right:-1px;margin-top:-1px;height:calc(100% - 1px);overflow:hidden}.react-number-keyboard>.bd>.wrapper>.cell{position:relative;box-sizing:border-box;font:2.5em/1.2 Helvetica neue,Verdana,Geneva,sans-serif;height:2em;text-align:center;background:#fff;color:#000;float:left;width:33.33%;border:1px solid #b3b3b3;border-width:0 1px 1px 0;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none}.react-number-keyboard>.bd>.wrapper>.cell:active{background:#edeff1}.react-number-keyboard>.bd>.wrapper>.cell:focus{outline:none}.react-number-keyboard>.bd>.wrapper>.cell[data-theme=gray]{background:#d1d5da}.react-number-keyboard>.bd>.wrapper>.cell[data-theme=gray]:active{background:#b5bbc3}.react-number-keyboard>.bd>.wrapper>.cell[data-action=delete]{background:#fff url("+n(2)+") no-repeat 50%;background-size:1em}.react-number-keyboard>.bd>.wrapper>.cell[data-action=delete]:active{background-color:#b5bbc3}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var a=this[o][0];"number"==typeof a&&(r[a]=!0)}for(o=0;o<t.length;o++){var i=t[o];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(e,t,n){function r(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=d[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(l(r.parts[a],t))}else{for(var i=[],a=0;a<r.parts.length;a++)i.push(l(r.parts[a],t));d[r.id]={id:r.id,refs:1,parts:i}}}}function o(e){for(var t=[],n={},r=0;r<e.length;r++){var o=e[r],a=o[0],i=o[1],u=o[2],c=o[3],l={css:i,media:u,sourceMap:c};n[a]?n[a].parts.push(l):t.push(n[a]={id:a,parts:[l]})}return t}function a(e,t){var n=b(),r=A[A.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),A.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function i(e){e.parentNode.removeChild(e);var t=A.indexOf(e);t>=0&&A.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",a(e,t),t}function c(e){var t=document.createElement("link");return t.rel="stylesheet",a(e,t),t}function l(e,t){var n,r,o;if(t.singleton){var a=g++;n=m||(m=u(t)),r=s.bind(null,n,a,!1),o=s.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=c(t),r=p.bind(null,n),o=function(){i(n),n.href&&URL.revokeObjectURL(n.href)}):(n=u(t),r=f.bind(null,n),o=function(){i(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=y(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function f(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,r=t.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var o=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(o),a&&URL.revokeObjectURL(a)}var d={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},v=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,g=0,A=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=v()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=o(e);return r(n,t),function(e){for(var a=[],i=0;i<n.length;i++){var u=n[i],c=d[u.id];c.refs--,a.push(c)}if(e){var l=o(e);r(l,t)}for(var i=0;i<a.length;i++){var c=a[i];if(0===c.refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete d[c.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.id,r,""]]);n(6)(r,{});r.locals&&(e.exports=r.locals)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t){e.exports=r}])});
//# sourceMappingURL=react-number-keyboard.js.map