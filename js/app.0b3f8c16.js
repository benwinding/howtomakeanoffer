(function(e){function t(t){for(var n,s,i=t[0],u=t[1],c=t[2],f=0,p=[];f<i.length;f++)s=i[f],r[s]&&p.push(r[s][0]),r[s]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),o()}function o(){for(var e,t=0;t<a.length;t++){for(var o=a[t],n=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=o[0]))}return e}var n={},r={app:0},a=[];function s(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.m=e,s.c=n,s.d=function(e,t,o){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(o,n,function(t){return e[t]}.bind(null,n));return o},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/howtomakeanoffer/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var l=u;a.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"56d7":function(e,t,o){"use strict";o.r(t);o("cadf"),o("551c"),o("f751"),o("097d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"content"},[o("div",{staticClass:"amount"},[o("label",{attrs:{for:"amount_input"}},[e._v("Enter the amount of the ad:")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.amount,expression:"amount"}],attrs:{type:"number",placeholder:"Amount"},domProps:{value:e.amount},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.process(t)},input:function(t){t.target.composing||(e.amount=t.target.value)}}}),o("input",{attrs:{type:"submit",value:"Calculate"},on:{click:e.process}})]),e.offer&&!e.loading?o("div",{staticClass:"result"},[o("p",[e._v("Based on our recommendations and our secret algorithm, we advice you to send this message:")]),o("blockquote",{domProps:{innerHTML:e._s(e.message)}}),o("button",{staticClass:"button",on:{click:e.toggleCopy}},[e._v(e._s(e.copyButtonText))])]):e._e()]),o("Footer"),e.loading?o("Loader",{attrs:{message:"We are currently processing your data, please wait..."}}):e._e()],1)},a=[],s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"left"},[n("img",{attrs:{alt:"Vue logo",src:o("9b19")}}),n("h1",[e._v("howtomakeanoffer"),n("span",[e._v(".com.au")])])]),n("div",{staticClass:"right"},[n("h2",[e._v("Get what you want, "),n("span",[e._v("cash")]),e._v(", "),n("span",[e._v("now")])])])])}],u={name:"Header"},c=u,l=o("2877"),f=Object(l["a"])(c,s,i,!1,null,null,null),p=f.exports,d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},h=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer"},[o("p",[e._v("You want to buy something on Gumtree, but you don't know how much to offer? Too low? Too high? We have the solution for your problem!")]),o("p",[e._v("Our engineers team built for you an powerfull algorithm to get the perfect "),o("b",[e._v("Gumtree Style")]),e._v(" offer.")]),o("p",[e._v("Just enter the amount of the ad and start saving money.")])])}],m={name:"Header"},v=m,g=Object(l["a"])(v,d,h,!1,null,null,null),b=g.exports,y=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("transition",{attrs:{name:"fade",appear:""}},[o("div",{staticClass:"overlay"},[o("div",{staticClass:"content"},[o("p",[e._v(e._s(e.message))])])])])},_=[],w={name:"Loader",props:{message:String}},k=w,C=(o("e5de"),Object(l["a"])(k,y,_,!1,null,"1237e082",null)),x=C.exports,O={get:function(e){var t="$",o=0;return e>=20?o=10*Math.round((e/2+.09*e)/10):e<=1?(o=10*Math.round(100*(e/2+.09*e)/10),t=" cents"):o=Math.round(e/2+.09*e),o+t}},j={name:"app",components:{Header:p,Footer:b,Loader:x},data:function(){return{amount:void 0,loading:!1,offer:void 0,message:"",disableCopy:!1,copyButtonText:"Copy"}},watch:{amount:function(e,t){e!=t&&(this.offer=void 0,this.message="",this.copyButtonText="Copy",this.disableCopy=!1)}},methods:{process:function(){var e=this;this.loading=!0,void 0===this.amount?console.log("Please enter an amount"):(this.offer=O.get(this.amount),this.message="Hi there! I'd like to offer "+this.offer+", cash, NOW!!!"),setTimeout(function(){e.loading=!1},2e3)},toggleCopy:function(){this.$copyText(this.message),this.disableCopy=!0,this.copyButtonText="Copied"}}},T=j,E=(o("5c0b"),Object(l["a"])(T,r,a,!1,null,null,null)),P=E.exports,$=o("9483");Object($["a"])("".concat("/howtomakeanoffer/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var M=o("4eb5"),S=o.n(M);n["a"].config.productionTip=!1,n["a"].use(S.a),new n["a"]({render:function(e){return e(P)}}).$mount("#app")},"5c0b":function(e,t,o){"use strict";var n=o("5e27"),r=o.n(n);r.a},"5e27":function(e,t,o){},"9b19":function(e,t,o){e.exports=o.p+"img/logo.be28b467.svg"},e207:function(e,t,o){},e5de:function(e,t,o){"use strict";var n=o("e207"),r=o.n(n);r.a}});
//# sourceMappingURL=app.0b3f8c16.js.map