(function(e){function t(t){for(var r,l,c=t[0],u=t[1],i=t[2],p=0,d=[];p<c.length;p++)l=c[p],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&d.push(o[l][0]),o[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var u=n[c];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var i=0;i<c.length;i++)t(c[i]);var f=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-cascader-panel",{attrs:{props:e.props}})},c=[],u=(n("99af"),n("d81d"),n("b0c0"),{name:"HelloWorld",methods:{getLevel:function(e){return"province"==e?2:"city"==e?3:"district"==e?4:void 0},getData:function(e,t){return window.axios.get("http://localhost:9600/v1/api/xzhf?fid=".concat(e,"&level=").concat(t))}},data:function(){return{props:{lazy:!0,lazyLoad:function(e,t){if(4!=e.level){var n="";n=0==e.level?1e5:e.value,window.axios.get("https://xx996.cn/v1/api/xzhf?fid=".concat(n,"&level=").concat(e.level+1)).then((function(n){if(n.data.result)t([{name:"数据补充中",adcode:"2",leaf:!0}]);else{var r=n.data.map((function(t){return{adcode:t.adcode,name:t.name,leaf:e.level>=3}}));t(r)}}))}else t([])},leaf:"parent",label:"name",value:"adcode"},options:[]}},mounted:function(){document.title="城市级联"}}),i=u,f=(n("93c7"),n("2877")),p=Object(f["a"])(i,l,c,!1,null,"2cfc4d3e",null),d=p.exports,s={name:"App",components:{HelloWorld:d}},v=s,h=(n("034f"),Object(f["a"])(v,o,a,!1,null,null,null)),b=h.exports,m=n("5c96"),y=n.n(m),g=(n("0fae"),n("bc3a")),w=n.n(g);r["default"].config.productionTip=!1,r["default"].use(y.a),window.axios=w.a,new r["default"]({render:function(e){return e(b)}}).$mount("#app")},"85ec":function(e,t,n){},"93c7":function(e,t,n){"use strict";n("d49d")},d49d:function(e,t,n){}});
//# sourceMappingURL=app.cda8a731.js.map