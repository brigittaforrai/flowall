(function(t){function e(e){for(var a,i,r=e[0],c=e[1],l=e[2],m=0,d=[];m<r.length;m++)i=r[m],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},s=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/designhet2019/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"01db":function(t,e,n){"use strict";var a=n("535f"),o=n.n(a);o.a},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"0fad":function(t,e){t.exports="data:image/png;base64,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"},1:function(t,e){},"1d08":function(t,e,n){"use strict";var a=n("fc65"),o=n.n(a);o.a},2513:function(t,e,n){"use strict";var a=n("83c2"),o=n.n(a);o.a},"3f08":function(t,e,n){"use strict";var a=n("9d67"),o=n.n(a);o.a},"535f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},s=[],i={name:"App",mounted:function(){this.$store.dispatch("ask_connectionInfo"),this.$store.dispatch("listen_connectionInfo"),this.$store.commit("setUserId"),this.$store.commit("setUserName")}},r=i,c=(n("034f"),n("2877")),l=Object(c["a"])(r,o,s,!1,null,null,null),u=l.exports,m=n("8c4f"),d=n("5f35"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("flowHeader"),n("div",{staticStyle:{height:"100%"}},[this.connected?n("Remote"):t._e(),this.connected?t._e():n("Connect"),this.showInfo?n("Info"):t._e()],1)],1)},g=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"remote"},[n("div",{staticClass:"controls"},[n("div",{staticClass:"container"},t._l(t.inputs,(function(e){return n("div",{key:e.name,class:"big"===e.type?"big config-item":"config-item"},[n("label",{attrs:{for:e.name}},[t._v(t._s(t.isHun?e._name:e.eng))]),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.savedVals[e.name],expression:"savedVals[s.name]",modifiers:{number:!0}}],attrs:{step:e.step,min:e.min,max:e.max,type:"range",name:e.name},domProps:{value:t.savedVals[e.name]},on:{__r:function(n){t.$set(t.savedVals,e.name,t._n(n.target.value))},blur:function(e){return t.$forceUpdate()}}})])})),0),n("div",{staticClass:"btn-cont"},[n("button",{staticClass:"circle random-circle",on:{click:t.randomSvg}}),n("button",{staticClass:"circle random",on:{click:t.random}})])]),n("button",{staticClass:"big disconnect",on:{click:t.disconnect}},[t._v(t._s(t.isHun?"Kilépés":"Disconnnect"))])])},h=[],v=(n("6b54"),n("28a5"),n("7f7f"),n("ac6a"),n("8055")),A=n.n(v),C="brigittaforrai.com",I=!0,y=I?"https://designhet2019.herokuapp.com/":"http://192.168.253.250:3001",_=[{name:"tempo",_name:"tempó",default:0,min:0,max:.8,step:5e-4,randomMin:.001,randomMax:.2,type:"big",eng:"tempo"},{name:"rotatex",_name:"x forgatás",min:-90,max:90,step:1,randomMin:-60,randomMax:60,type:"big",eng:"rotation X"},{name:"rotatey",_name:"y forgatás",default:0,min:-90,max:90,step:1,randomMin:-60,randomMax:60,type:"big",eng:"rotation Y"},{name:"rotatez",_name:"z forgatás",default:0,min:-90,max:90,step:1,randomMin:-60,randomMax:60,type:"big",eng:"rotation Z"},{name:"xgap",_name:"ponttávolság-x",min:50,max:500,step:1,randomMin:50,randomMax:100,eng:"x gap"},{name:"zgap",_name:"ponttávolság-y",min:50,max:500,step:1,randomMin:50,randomMax:100,eng:"y gap"},{name:"nodesize",_name:"méret",min:2,max:100,step:1,randomMin:5,randomMax:30,eng:"node size"},{name:"ampl",_name:"amplitúdó",min:0,max:200,step:1,randomMin:1,randomMax:200,eng:"amplitude"},{name:"spacing",_name:"hullámhossz",min:0,max:100,step:.1,randomMin:1,randomMax:100,eng:"spacing"},{name:"period",_name:"periódus",min:1,max:5e3,step:1,randomMin:1,randomMax:5e3,eng:"period"}],E={name:"Remote",data:function(){return{socket:A()(y),inputs:_,savedVals:{},widget:null}},computed:{isHun:function(){return"HUN"===this.$store.state.language}},watch:{savedVals:{deep:!0,handler:function(t){this.socket.emit("SEND",{values:t})}}},mounted:function(){var t=this;this.socket.emit("GET_VALUES"),this.socket.on("INIT_VALUES",(function(e){t.socket.off("INIT_VALUES"),t.savedVals=e.values}));var e=document.querySelector("button.random"),n=document.querySelector("button.random-circle");e.addEventListener("touchstart",(function(){e.classList.add("active")})),e.addEventListener("touchend",(function(){e.classList.remove("active")})),n.addEventListener("touchstart",(function(){n.classList.add("active")})),n.addEventListener("touchend",(function(){n.classList.remove("active")}))},methods:{disconnect:function(){this.$store.dispatch("ask_toDisconnect")},randomSvg:function(){this.$store.dispatch("ask_randomCircles")},random:function(){var t=this,e={};this.inputs.forEach((function(n){e[n.name]=t.getRandom(n.randomMin,n.randomMax,n.step)})),this.savedVals=e,this.randomSvg()},getRandom:function(t,e,n){var a=Math.random()*(e-t)+t;if(1===n||void 0===n)return Math.round(a);var o=n.toString().split(".")[1].length;return parseFloat(a.toFixed(o))}}},b=E,w=(n("e910"),Object(c["a"])(b,p,h,!1,null,"49384a84",null)),k=w.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"connect"},[n("section",["HUN"===t.lang?n("div",[n("h3",[t._v("Próbáld ki te is a flow élményt!")]),n("p",[t._v("\n        Hogyan? A piros gombra nyomva egy percig irányíthatod mobilodról az installációt.\n      ")]),n("p",[t._v("\n        Változtasd kedvedre a paramétereket és a Design Hét arculatát.\n      ")])]):t._e(),"ENG"===t.lang?n("div",[n("h3",[t._v("Experience the flow state!")]),n("p",[t._v("\n        Tap on the red button and control the installation with your phone.\n      ")]),n("p",{staticStyle:{"margin-top":"8px"}},[t._v("\n        Use the sliders to change the view, along with the visual identity of Design Week Budapest.\n      ")])]):t._e(),n("p",{staticClass:"link",on:{click:t.showInfo}},[t._v(t._s("HUN"===t.lang?"Projektről bővebben >":"About the project >"))])]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{name:"name",type:"text",placeholder:"HUN"===t.lang?"Add meg a beceneved":"Your nickname"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t.connectBtnText?n("button",{staticClass:"big",attrs:{disabled:!this.open},on:{click:t.connect}},[t._v(t._s(t.connectBtnText))]):t._e()])},M=[],L={name:"Connect",data:function(){return{name:this.$store.state.name}},computed:{open:function(){return this.$store.state.open},connectBtnText:function(){return"HUN"===this.lang?this.open?"Játszani akarok!":"Valaki éppen játszik":this.open?"Let's play!":"Someone is playing"},lang:function(){return this.$store.state.language}},methods:{connect:function(){this.$store.commit("setUserName",this.name),this.$store.dispatch("ask_toConnect")},showInfo:function(){this.$store.commit("toggleInfo")}}},Q=L,x=(n("2513"),Object(c["a"])(Q,B,M,!1,null,"a918f56e",null)),W=x.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"bold"},[a("img",{staticClass:"logo",attrs:{src:n("9cd4"),alt:"logo"},on:{click:t.toggleInfo}}),a("div",{staticClass:"language-selector"},[a("div",{class:"HUN"===t.language?"selected lang button circle":"lang button circle",on:{click:function(e){return t.select("HUN")}}},[t._v("HUN")]),a("div",{class:"ENG"===t.language?"selected lang button circle":"lang button circle",on:{click:function(e){return t.select("ENG")}}},[t._v("ENG")])])])},j=[],N={name:"FlowHeader",computed:{language:function(){return this.$store.state.language}},methods:{select:function(t){this.$store.commit("setLanguage",t)},toggleInfo:function(){this.$store.commit("toggleInfo")}}},F=N,Z=(n("3f08"),Object(c["a"])(F,z,j,!1,null,"2d6c919f",null)),O=Z.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("h1",[n("span",[t._v("Deisgner")]),t._v("\n    "+t._s("HUN"===t.lang?"Balogh Balázs":"Balázs Balogh")+"\n    "),n("br"),n("a",{staticClass:"link black",attrs:{href:"http://studio.thatsit.hu/",target:"about_blank"}},[t._v("studio.thasit.hu")])]),n("h1",[n("span",[t._v("creative coder")]),t._v("\n    "+t._s("HUN"===t.lang?"Forrai Brigitta":"Brigitta Forrai")+"\n    "),n("br"),n("a",{staticClass:"link black",attrs:{href:"https://brigittaforrai.com",target:"about_blank"}},[t._v("brigittaforrai.com")])]),"HUN"===t.lang?n("section",[t._v("\n    A Design Hét Budapest flow témájához illően olyan generatív arculati struktúra született,\n    mely alapvetően a mozgásra épül és tetszőlegesen változtatható az összes paramétere.\n    Ez a játékosság, illetve a lassan és folyamatosan változó áramlás a flow élmény megtapasztalását kínálja a nézőnek.\n  ")]):t._e(),"ENG"===t.lang?n("section",[t._v("\n    Experience flow through Design Week's generative identity.\n  ")]):t._e(),"HUN"===t.lang?n("div",[t._m(0),t._m(1)]):t._e(),"ENG"===t.lang?n("div",[t._m(2),t._m(3)]):t._e(),n("p",{staticClass:"link",on:{click:t.closeInfo}},[t._v(t._s("HUN"===t.lang?"< Vissza":"< Back"))])])},S=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticStyle:{color:"black"}},[t._v("Megtekinthető:")]),t._v(" 2019. 10. 4-13.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticStyle:{color:"black"}},[t._v("Helyszín:")]),t._v(" Lumen Café")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticStyle:{color:"black"}},[t._v("Exibition dates:")]),t._v(" 2019. 10. 4-13.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[n("span",{staticStyle:{color:"black"}},[t._v("Location:")]),t._v(" Lumen Café")])}],V={name:"Info",mounted:function(){var t=document.querySelector("button.circle");t.addEventListener("touchstart",(function(){t.style.backgroundColor="white",t.style.color="#f9423a"})),t.addEventListener("touchend",(function(){t.style.backgroundColor="#f9423a",t.style.color="white"}))},methods:{closeInfo:function(){this.$store.commit("closeInfo")}},computed:{lang:function(){return this.$store.state.language}}},U=V,Y=(n("c021"),Object(c["a"])(U,D,S,!1,null,"5d54100c",null)),P=Y.exports,G={name:"Home",components:{Remote:k,Connect:W,FlowHeader:O,Info:P},computed:{connected:function(){return this.$store.state.connected},playerName:function(){return this.$store.state.player},showInfo:function(){return this.$store.state.showInfo}}},$=G,T=(n("01db"),Object(c["a"])($,f,g,!1,null,"94b8f77c",null)),H=T.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("design-het",{staticClass:"widget",attrs:{installation:"true",circles:"3"}}),n("img",{staticClass:"qr",attrs:{src:t.qrCode,alt:"qr code"}}),t.connectedPlayer?n("p",{staticClass:"player"},[n("span",[t._v(t._s(t.player))]),t._v(" is playing.")]):t._e()],1)},X=[],q=(n("456d"),n("cea4"),n("0fad")),K=n.n(q),J=n("fef5"),tt=n.n(J),et={data:function(){return{socket:A()(y),widget:null,domain:C}},mounted:function(){var t=this;this.widget=document.querySelector(".widget"),this.socket.emit("GET_VALUES"),this.socket.on("INIT_VALUES",(function(e){t.update(e.values),t.socket.off("INIT_VALUES")})),this.socket.on("VALUES",(function(e){t.update(e.values)})),this.socket.on("SET_RANDOM_CIRCLES",(function(){t.widget.updateSvg()}))},computed:{connectedPlayer:function(){return this.$store.state.hasPlayer},qrCode:function(){return"brigittaforrai.com"===this.domain?tt.a:K.a},player:function(){return this.$store.state.player||"someone"}},methods:{update:function(t){var e=this;Object.keys(t).forEach((function(n){e.widget.setAttribute(n,t[n])}))}}},nt=et,at=(n("1d08"),Object(c["a"])(nt,R,X,!1,null,"2865b170",null)),ot=at.exports;a["a"].use(m["a"]);var st=new m["a"]({base:d["publicPath"],routes:[{path:"/",name:"home",component:H},{path:"/projection",name:"projection",component:ot}]}),it=n("2f62"),rt=n("11c1"),ct=n.n(rt);a["a"].use(it["a"]);var lt=A()(y),ut=new it["a"].Store({state:{language:"HUN",connected:!1,open:!0,name:null,id:null,player:null,hasPlayer:!1,randomCircles:!1,showInfo:!1},mutations:{toggleInfo:function(t){t.showInfo=!t.showInfo},closeInfo:function(t){t.showInfo=!1},setLanguage:function(t,e){t.language=e},setUserId:function(t){var e=localStorage.getItem("flow2019_id");e?t.id=e:(t.id=ct()(),localStorage.setItem("flow2019_id",t.id))},setUserName:function(t,e){if(e)t.name=e,localStorage.setItem("flow2019_name",t.name);else{var n=localStorage.getItem("flow2019_name");t.name=n||null}},setConnect:function(t,e){t.connected=e}},actions:{ask_randomCircles:function(){lt.emit("ASK_RANDOM_CIRCLES")},ask_connectionInfo:function(){lt.emit("ASK_CONNECTION_INFO")},listen_connectionInfo:function(t){var e=this,n=t.state,a=t.commit;lt.on("CONNECTION_INFO",(function(t){console.log(t,"connection info"),n.player=t.name;var o=t.id;n.hasPlayer=o,o?o&&o!==n.id?(a("setConnect",!1),e.state.open=!1):o&&o===n.id&&(a("setConnect",!0),e.state.open=!0):(a("setConnect",!1),e.state.open=!0)}))},ask_toConnect:function(t){var e=t.state;!e.connected&&e.open&&lt.emit("ASK_CONNECT",{name:e.name,id:e.id})},ask_toDisconnect:function(){lt.emit("DISCONNECT")}}});a["a"].config.productionTip=!1,new a["a"]({router:st,store:ut,render:function(t){return t(u)}}).$mount("#app")},"5f35":function(t,e,n){(function(e){var a,o=n("df7c"),s="brigittaforrai.com",i=!0;a=i&&"brigittaforrai.com"===s?"designhet2019":"/",t.exports={publicPath:a,outputDir:"docs",chainWebpack:function(t){t.module.rule("eslint").use("eslint-loader").tap((function(t){return t.configFile=o.resolve(e,".eslintrc.js"),t}))}}}).call(this,"/")},"83c2":function(t,e,n){},"85ec":function(t,e,n){},"9cd4":function(t,e,n){t.exports=n.p+"img/flowall-logo.1880821b.png"},"9d67":function(t,e,n){},a51a:function(t,e,n){},c021:function(t,e,n){"use strict";var a=n("a51a"),o=n.n(a);o.a},e910:function(t,e,n){"use strict";var a=n("e980"),o=n.n(a);o.a},e980:function(t,e,n){},fc65:function(t,e,n){},fef5:function(t,e,n){t.exports=n.p+"img/design-het-qr.f83253f2.svg"}});
//# sourceMappingURL=app.51536bb3.js.map