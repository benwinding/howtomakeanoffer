(function(e){function t(t){for(var o,s,i=t[0],c=t[1],u=t[2],f=0,d=[];f<i.length;f++)s=i[f],r[s]&&d.push(r[s][0]),r[s]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={app:0},a=[];function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/howtomakeanoffer/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e._m(0),n("div",{staticClass:"content"},[n("div",{staticClass:"amount"},[n("label",{attrs:{for:"amount_input"}},[e._v("Enter here the amount of the ad:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],attrs:{type:"number",placeholder:"Amount"},domProps:{value:e.amount},on:{input:function(t){t.target.composing||(e.amount=t.target.value)}}}),n("input",{attrs:{type:"submit",value:"Help me!"},on:{click:e.process}})]),e.offer&&!e.loading?n("div",{staticClass:"result"},[n("p",[e._v("Based on our recommendations and our secret algorithm, we advice you to send this message:")]),n("p",{staticClass:"message",domProps:{innerHTML:e._s(e.message)}}),n("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.message,expression:"message"}],staticClass:"button"},[e._v("Copy")])]):e._e()]),n("transition",{attrs:{name:"fade"}},[e.loading?n("div",{staticClass:"overlay"},[n("div",{staticClass:"content"},[n("p",[e._v("We are currently processing your datas, please wait...")])])]):e._e()])],1)},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",[o("div",{staticClass:"left"},[o("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),o("h1",[e._v("howtomakeanoffer"),o("span",[e._v(".com.au")])])]),o("div",{staticClass:"right"},[o("h2",[e._v("Get what you want, "),o("span",[e._v("cash")]),e._v(", "),o("span",[e._v("now")])])])])}],s=n("5118"),i={name:"app",data:function(){return{amount:void 0,loading:!1,offer:void 0,message:""}},methods:{process:function(){var e=this;this.loading=!0,void 0===this.amount?console.log("Please enter an amount"):(this.offer=this.amount/2+.09*this.amount,this.message="Hi there! I'd like to offer "+this.offer+"$, cash, NOW!!!"),Object(s["setTimeout"])(function(){e.loading=!1},2e3)}}},c=i,u=(n("5c0b"),n("2877")),l=Object(u["a"])(c,r,a,!1,null,null,null),f=l.exports,d=n("9483");Object(d["a"])("".concat("/howtomakeanoffer/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var p=n("af88");o["a"].config.productionTip=!1,o["a"].use(p["a"]),new o["a"]({render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),r=n.n(o);r.a},"5e27":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.bf14eacc.js.map