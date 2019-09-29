(function(t){function e(e){for(var a,s,c=e[0],r=e[1],u=e[2],m=0,d=[];m<c.length;m++)s=c[m],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},o={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/designhet2019/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=r;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),o=n.n(a);o.a},"0c32":function(t,e,n){},1:function(t,e){},1342:function(t,e,n){"use strict";var a=n("e7e4"),o=n.n(a);o.a},"1c39":function(t,e,n){"use strict";var a=n("a456"),o=n.n(a);o.a},5638:function(t,e,n){"use strict";var a=n("baa5"),o=n.n(a);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("flowHeader"),n("router-view")],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"bold"},[n("h1",[t._v("flow")]),n("div",{staticClass:"language-selector"},[n("div",{class:"HUN"===t.language?"selected lang button circle":"lang button circle",on:{click:function(e){return t.select("HUN")}}},[t._v("HUN")]),n("div",{class:"ENG"===t.language?"selected lang button circle":"lang button circle",on:{click:function(e){return t.select("ENG")}}},[t._v("ENG")])])])},c=[],r={name:"FlowHeader",computed:{language:function(){return this.$store.state.language}},methods:{select:function(t){this.$store.commit("setLanguage",t)}}},u=r,l=(n("5638"),n("2877")),m=Object(l["a"])(u,s,c,!1,null,"58859132",null),d=m.exports,f={name:"App",components:{FlowHeader:d},mounted:function(){this.$store.dispatch("ask_connectionInfo"),this.$store.dispatch("listen_connectionInfo"),this.$store.commit("setUserId"),this.$store.commit("setUserName")}},p=f,g=(n("034f"),Object(l["a"])(p,o,i,!1,null,null,null)),h=g.exports,v=(n("cea4"),n("8c4f")),_=n("5f35"),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[this.connected?n("Remote"):t._e(),this.connected?t._e():n("Connect")],1)},x=[],y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"remote"},[n("div",{staticClass:"container"},t._l(t.inputs,(function(e){return n("div",{key:e.name,class:"big"===e.type?"big config-item":"config-item"},[n("label",{attrs:{for:e.name}},[t._v(t._s(t.isHun?e._name:e.eng))]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.savedVals[e.name],expression:"savedVals[s.name]",modifiers:{number:!0}}],attrs:{step:e.step,min:e.min,max:e.max,type:"range",name:e.name},domProps:{value:t.savedVals[e.name]},on:{__r:function(n){t.$set(t.savedVals,e.name,t._n(n.target.value))},blur:function(e){return t.$forceUpdate()}}})])})),0),n("div",{staticClass:"btn-cont"},[n("button",{staticClass:"circle empty",on:{click:t.randomSvg}},[t._v("svg")]),n("button",{staticClass:"circle empty",on:{click:t.random}},[t._v("R")]),n("button",{staticClass:"circle empty",on:{click:t.getOrientation}}),n("button",{staticClass:"circle",on:{click:t.setRed}})]),n("button",{staticClass:"big disconnect",on:{click:t.disconnect}},[t._v(t._s(t.isHun?"Kilépés":"Disconnnect"))])])},C=[],k=(n("6b54"),n("28a5"),n("7f7f"),n("ac6a"),n("8055")),N=n.n(k),S=!0,w=S?"https://designhet2019.herokuapp.com/":"http://192.168.1.12:3001",M=[{name:"tempo",_name:"tempó",default:0,min:0,max:.8,step:5e-4,randomMin:.001,randomMax:.2,type:"big",eng:"tempo"},{name:"rotatex",_name:"x forgatás",min:-90,max:90,step:1,randomMin:-60,randomMax:60,type:"big",eng:"rotation X"},{name:"rotatey",_name:"y forgatás",default:0,min:-90,max:90,step:1,randomMin:-60,randomMax:60,type:"big",eng:"rotation Y"},{name:"rotatez",_name:"z forgatás",default:0,min:-90,max:90,step:1,randomMin:-60,randomMax:60,type:"big",eng:"rotation Z"},{name:"xgap",_name:"pontsűrűség-x",min:50,max:500,step:1,randomMin:50,randomMax:100,eng:"x gap"},{name:"zgap",_name:"pontsűrűség-y",min:50,max:500,step:1,randomMin:50,randomMax:100,eng:"y gap"},{name:"nodesize",_name:"méret",min:2,max:100,step:1,randomMin:5,randomMax:30,eng:"node size"},{name:"ampl",_name:"amplitúdó",min:0,max:200,step:1,randomMin:1,randomMax:200,eng:"amplitude"},{name:"spacing",_name:"hullámhossz",min:0,max:100,step:.1,randomMin:1,randomMax:100,eng:"spacing"},{name:"period",_name:"periódus",min:1,max:5e3,step:1,randomMin:1,randomMax:5e3,eng:"period"}],O={name:"Remote",data:function(){return{socket:N()(w),inputs:M,savedVals:{},widget:null}},computed:{isHun:function(){return"HUN"===this.$store.state.language}},watch:{savedVals:{deep:!0,handler:function(t){this.socket.emit("SEND",{values:t})}}},mounted:function(){var t=this;this.socket.emit("GET_VALUES"),this.socket.on("INIT_VALUES",(function(e){t.socket.off("INIT_VALUES"),t.savedVals=e.values}))},methods:{disconnect:function(){this.$store.dispatch("ask_toDisconnect")},randomSvg:function(){this.$store.dispatch("ask_randomCircles")},random:function(){var t=this,e={};this.inputs.forEach((function(n){e[n.name]=t.getRandom(n.randomMin,n.randomMax,n.step)})),this.savedVals=e,this.randomSvg()},getOrientation:function(){console.log("get orientation todo")},setRed:function(){console.log("red todo")},getRandom:function(t,e,n){var a=Math.random()*(e-t)+t;if(1===n||void 0===n)return Math.round(a);var o=n.toString().split(".")[1].length;return parseFloat(a.toFixed(o))}}},E=O,I=(n("1c39"),Object(l["a"])(E,y,C,!1,null,"43605454",null)),$=I.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"connect"},[t._m(0),t.connectBtnText?n("button",{staticClass:"big",attrs:{disabled:!this.open},on:{click:t.connect}},[t._v(t._s(t.connectBtnText))]):t._e()])},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("h2",{},[t._v("save the date")]),n("h2",[t._v("10.04-13 ")]),n("h4",[t._v("Lumen café 10.11")]),n("p",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])])}],T={name:"Connect",computed:{open:function(){return this.$store.state.open},connectBtnText:function(){return"HUN"===this.lang?this.open?"Játszani akarok!":"Valaki éppen játszik":this.open?"Let's play a minute!":"Someone is playing"},lang:function(){return this.$store.state.language}},methods:{connect:function(){this.$store.dispatch("ask_toConnect")}}},V=T,A=(n("1342"),Object(l["a"])(V,j,U,!1,null,"9169eba2",null)),L=A.exports,H={name:"Home",components:{Remote:$,Connect:L},computed:{connected:function(){return this.$store.state.connected},playerName:function(){return this.$store.state.player}}},R=H,P=(n("ef00"),Object(l["a"])(R,b,x,!1,null,"4b483b74",null)),z=P.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("design-het",{staticClass:"widget",attrs:{installation:"true",circles:"3"}}),a("img",{staticClass:"qr",attrs:{src:n("fef5"),alt:"qr code"}})],1)},F=[],G=(n("456d"),{data:function(){return{socket:N()(w),widget:null}},mounted:function(){var t=this;this.widget=document.querySelector(".widget"),this.socket.emit("GET_VALUES"),this.socket.on("INIT_VALUES",(function(e){t.update(e.values),t.socket.off("INIT_VALUES")})),this.socket.on("VALUES",(function(e){t.update(e.values)})),this.socket.on("SET_RANDOM_CIRCLES",(function(){t.widget.updateSvg()}))},methods:{update:function(t){var e=this;Object.keys(t).forEach((function(n){e.widget.setAttribute(n,t[n])}))}}}),q=G,K=(n("61fa"),Object(l["a"])(q,D,F,!1,null,"1c9159fe",null)),B=K.exports;a["a"].use(v["a"]);var J=new v["a"]({base:_["publicPath"],routes:[{path:"/",name:"home",component:z},{path:"/projection",name:"projection",component:B}]}),W=n("2f62"),X=n("11c1"),Y=n.n(X);a["a"].use(W["a"]);var Z=N()(w),Q=new W["a"].Store({state:{language:"HUN",connected:!1,open:!0,name:null,id:null,player:null,randomCircles:!1},mutations:{setLanguage:function(t,e){t.language=e},setUserId:function(t){var e=localStorage.getItem("flow2019_id");e?t.id=e:(t.id=Y()(),localStorage.setItem("flow2019_id",t.id))},setUserName:function(t,e){if(e)t.name=e,localStorage.setItem("flow2019_name",t.name);else{var n=localStorage.getItem("flow2019_name");t.name=n||null}},setConnect:function(t,e){t.connected=e}},actions:{ask_randomCircles:function(){Z.emit("ASK_RANDOM_CIRCLES")},ask_connectionInfo:function(){Z.emit("ASK_CONNECTION_INFO")},listen_connectionInfo:function(t){var e=this,n=t.state,a=t.commit;Z.on("CONNECTION_INFO",(function(t){console.log(t,"connection info"),n.player=t.name?t.name:"";var o=t.id;o?o&&o!==n.id?(a("setConnect",!1),e.state.open=!1):o&&o===n.id&&(a("setConnect",!0),e.state.open=!0):(a("setConnect",!1),e.state.open=!0)}))},ask_toConnect:function(t){var e=t.state;!e.connected&&e.open&&Z.emit("ASK_CONNECT",{name:e.name,id:e.id})},ask_toDisconnect:function(){Z.emit("DISCONNECT")}}});a["a"].config.productionTip=!1,new a["a"]({router:J,store:Q,render:function(t){return t(h)}}).$mount("#app")},"5f35":function(t,e,n){(function(e){var a=!0,o=n("df7c");t.exports={publicPath:a?"/designhet2019":"/",outputDir:"docs",chainWebpack:function(t){t.module.rule("eslint").use("eslint-loader").tap((function(t){return t.configFile=o.resolve(e,".eslintrc.js"),t}))}}}).call(this,"/")},"61fa":function(t,e,n){"use strict";var a=n("0c32"),o=n.n(a);o.a},"64a9":function(t,e,n){},a456:function(t,e,n){},baa5:function(t,e,n){},c5b2:function(t,e,n){},e7e4:function(t,e,n){},ef00:function(t,e,n){"use strict";var a=n("c5b2"),o=n.n(a);o.a},fef5:function(t,e,n){t.exports=n.p+"img/design-het-qr.f83253f2.svg"}});
//# sourceMappingURL=app.3c086a4f.js.map