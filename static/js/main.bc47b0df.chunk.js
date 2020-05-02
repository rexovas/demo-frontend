(this["webpackJsonpdemo-frontend"]=this["webpackJsonpdemo-frontend"]||[]).push([[0],{106:function(e,t,a){e.exports=a.p+"static/media/logo-white.a0e5d9e9.svg"},108:function(e){e.exports=JSON.parse('{"localhost":"http://localhost:5000","development":"http://10.0.0.56:5000","production":"https://demo.api.rex.vision"}')},123:function(e,t,a){e.exports=a(274)},128:function(e,t,a){},129:function(e,t,a){},130:function(e,t,a){},131:function(e,t,a){},133:function(e,t,a){},139:function(e,t,a){},274:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),s=a.n(c),i=(a(128),a(105)),o=a.n(i),l=a(17),u=a(118),d=(a(129),a(106)),f=a.n(d),h=function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"shell"},r.a.createElement("div",{className:"header__inner"},r.a.createElement("img",{src:f.a,className:"logo",alt:"Rexovas"}))))},p=(a(130),function(){return r.a.createElement("section",{className:"section-slider","data-aos":"fade-right"},r.a.createElement("div",{className:"slider-image"},r.a.createElement("div",{className:"shell"},r.a.createElement("h1",{className:"image-header"},"Demo Application"),r.a.createElement("p",{className:"image-text"},"This dataset presents the age-adjusted death rates for the 10 leading causes of death in the United States beginning in 1999. Data are based on information from all resident death certificates filed in the 50 states and the District of Columbia using demographic and medical characteristics"),r.a.createElement("a",{className:"btn btn--red",href:"https://catalog.data.gov/dataset/age-adjusted-death-rates-for-the-top-10-leading-causes-of-death-united-states-2013"},"Learn More"))))}),m=(a(131),a(119)),v=a(8),g=a.n(v),b=a(15),w=a(23),E=(a(133),a(134),a(20)),O=a(107),j=a(46),S=a(48),k=a(28),x=a(47),N=a(120),y=function(e){function t(e,a,n){var r;return Object(E.a)(this,t),(r=Object(S.a)(this,Object(k.a)(t).call(this,a))).type="FailureByDesign",r.code=e,r.message=a,r.status=n,r}return Object(x.a)(t,e),t}(Object(N.a)(Error)),C=a(108),A=function(e){if(!e.ok){var t=e.response,a={};if(t){try{t=JSON.parse(t)}catch(n){}a=t.error}if([403,404,500].includes(e.status))throw new y(a.type,a.details,e.status);throw new y("BAD_RESPONSE","Bad response from Data API. Status code: ".concat(e.status," Response: ").concat(JSON.stringify(e.response)))}},D=C.production,R=function(){function e(){Object(E.a)(this,e),this.baseUrl=D,this.defaultOptions={method:"GET",headers:{"Content-Type":"application/json"}}}return Object(j.a)(e,[{key:"get",value:function(){var e=Object(b.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.makeRequest(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"makeRequest",value:function(){var e=Object(b.a)(g.a.mark((function e(t,a){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(O.a)({},this.defaultOptions,{},a),e.next=3,fetch("".concat(this.baseUrl).concat(t),n);case 3:return r=e.sent,A(r),e.abrupt("return",r.json());case 6:case"end":return e.stop()}}),e,this)})));return function(t,a){return e.apply(this,arguments)}}()}]),e}();var T=new function e(){var t=this;Object(E.a)(this,e),this.setChangeAppState=function(e){t.changeAppState=e},this.getTableData=function(){var e=Object(b.a)(g.a.mark((function e(a){var n,r;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a&&0!==a.length?"?filter=".concat(a):"",e.next=3,t.requestService.get("/table-data".concat(n));case 3:return r=e.sent,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getFilterList=function(){var e=Object(b.a)(g.a.mark((function e(a,n){var r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a?"?field=".concat(n,"&search=").concat(a):"?field=".concat(n),e.next=3,t.requestService.get("/filter-list".concat(r));case 3:return c=e.sent,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),this.requestService=new R,this.changeAppState=function(){},this.search=null},L=a(4),P=a(109),U=a.n(P),W=(a(139),function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(S.a)(this,Object(k.a)(t).call(this,e))).updateStateItem=function(e,t){a.setState(Object(L.a)({},e,t))},a.componentDidMount=Object(b.a)(g.a.mark((function e(){var t;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T.getTableData();case 2:t=e.sent,a.setState({data:t,loading:!1});case 4:case"end":return e.stop()}}),e)}))),a.componentDidUpdate=function(){var e=Object(b.a)(g.a.mark((function e(t){var n,r,c;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.filterParams,(r=a.props.filterParams)===n){e.next=9;break}return a.updateStateItem("loading",!0),e.next=6,T.getTableData(r);case 6:c=e.sent,a.updateStateItem("data",c),a.updateStateItem("loading",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a.state={loading:!0,data:null},a}return Object(x.a)(t,e),Object(j.a)(t,[{key:"render",value:function(){var e=this.state,t=(e.loading,e.data),a=function(e){if(!e)return[];var t=e.data,a=e.columns,n=[],r={};return t.map((function(e){e.map((function(e,t){var n=a[t].toLowerCase();r[n]=e})),n.push(r),r={}})),n}(t),n=function(e){return e?e.map((function(e){var t=e.toLowerCase(),a="deaths"===t||"age-adjusted death rate"===t;return{name:e,selector:e.toLowerCase(),sortable:!0,wrap:!0,right:a,grow:function(){return"113 cause name"===t?3:1},format:function(e){return"deaths"===t?e[t].toString().replace(/\B(?=(\d{3})+(?!\d))/g,","):e[t]}}})):[]}(t?t.columns:null);return r.a.createElement(U.a,{className:"table",highlightOnHover:!0,noHeader:!0,paginationPerPage:15,pagination:!0,columns:n,data:a,sortable:!0})}}]),t}(n.Component)),B=function(e){var t=e.selected,a=e.callback,c=Object(n.useCallback)((function(e){return a(e)}),[a]);return r.a.createElement(l.c,{label:"Filter by",labelInline:!0,options:[{label:"State",value:"state"},{label:"Cause Name",value:"causeName"}],onChange:c,value:t})},I=function(){var e=Object(n.useState)("state"),t=Object(w.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),i=Object(w.a)(s,2),o=i[0],u=i[1],d=Object(n.useState)(""),f=Object(w.a)(d,2),h=f[0],p=f[1],v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=Object(n.useState)([]),r=Object(w.a)(a,2),c=r[0],s=r[1],i=Object(n.useState)(""),o=Object(w.a)(i,2),l=o[0],u=o[1];return Object(n.useEffect)((function(){function a(){return(a=Object(b.a)(g.a.mark((function a(){var n;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,T.getFilterList(e,t);case 2:n=a.sent,s(n.result),n.result&&n.result.length>2?u(n.result[2].label):n.result&&1===n.result.length?u(n.result[0].label):u("New York");case 5:case"end":return a.stop()}}),a)})))).apply(this,arguments)}!function(){a.apply(this,arguments)}()}),[e,t]),[c,l]}(h,a),E=Object(w.a)(v,2),O=E[0],j=E[1],S=Object(n.useCallback)((function(e){p(e)}),[]),k=Object(n.useCallback)((function(e){return function(){var t=Object(m.a)(o);t.splice(t.indexOf(e),1),u(t)}}),[o]),x=o.map((function(e){return r.a.createElement(l.e,{key:e,onRemove:k(e)},e)})),N=r.a.createElement(l.b.TextField,{onChange:S,value:h,placeholder:"e.g. ".concat(j)}),y=0===x.length?"search-box":"search-box-tags";return r.a.createElement("div",{className:"search-table-wrapper shadow"},0!==x.length&&r.a.createElement("div",{className:"tags"},r.a.createElement(l.f,null,r.a.createElement(l.d,null,x))),r.a.createElement("div",{className:y},r.a.createElement("div",{style:{paddingRight:"2px"}},r.a.createElement(B,{selected:a,callback:c})),r.a.createElement("div",{style:{flexBasis:"50vh"}},r.a.createElement(l.b,{allowMultiple:!0,options:O,selected:o,textField:N,onSelect:u,listTitle:"Search Suggestions"}))),r.a.createElement("div",{className:"table-wrapper"},r.a.createElement(W,{filterParams:o})))},_=function(){return r.a.createElement("div",null,r.a.createElement("section",{className:"section-title",id:"section-1","data-aos":"fade-left"},r.a.createElement("div",{className:"shell"},r.a.createElement("div",{className:"section__head"},r.a.createElement("h3",null,"Age-Adjusted Death Rates for the Top 10 Leading Causes of Death in the US")),r.a.createElement(I,null))))};var F=function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("div",{className:"wrapper__inner"},r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement(p,null),r.a.createElement(_,null))))},q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function J(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(273);o.a.init(),s.a.render(r.a.createElement((function(){return r.a.createElement(l.a,{i18n:u},r.a.createElement(F,null))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("https://rexovas.github.io/demo-frontend",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("https://rexovas.github.io/demo-frontend","/service-worker.js");q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):J(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):J(t,e)}))}}()}},[[123,1,2]]]);
//# sourceMappingURL=main.bc47b0df.chunk.js.map