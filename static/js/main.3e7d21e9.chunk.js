(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,n,t){"use strict";t.d(n,"c",function(){return r}),t.d(n,"b",function(){return a}),t.d(n,"a",function(){return o});var r=4,a=400,o=[{name:"EUR",description:"Euro"},{name:"JPY",description:"Japanese yen"},{name:"BGN",description:"Bulgarian lev"},{name:"CZK",description:"Czech koruna"},{name:"DKK",description:"Danish krone"},{name:"GBP",description:"Pound sterling"},{name:"HUF",description:"Hungarian forint"},{name:"PLN",description:"Polish zloty"},{name:"RON",description:"Romanian leu"},{name:"SEK",description:"Swedish krona"},{name:"CHF",description:"Swiss franc"},{name:"ISK",description:"Icelandic krona"},{name:"NOK",description:"Norwegian krone"},{name:"USD",description:"US dollar"},{name:"HOK",description:"Croatian kuna"},{name:"RUB",description:"Russian rouble"},{name:"TRY",description:"Turkish lira"},{name:"AUD",description:"Australian dollar"},{name:"BRL",description:"Brazilian real"},{name:"CAD",description:"Canadian dollar"},{name:"CNY",description:"Chinese yuan renminbi"},{name:"HKD",description:"Hong Kong dollar"},{name:"IDR",description:"Indonesian rupiah"},{name:"ILS",description:"Israeli shekel"},{name:"INR",description:"Indian rupee"},{name:"KRW",description:"South Korean won"},{name:"MXN",description:"Mexican peso"},{name:"MYR",description:"Malaysian ringgit"},{name:"NZD",description:"New Zealand dollar"},{name:"PHP",description:"Philippine peso"},{name:"SGD",description:"Singapore dollar"},{name:"THB",description:"Thai baht"},{name:"ZAR",description:"South African rand"}]},13:function(e,n,t){"use strict";var r=t(0),a=t.n(r);t(40);n.a=function(e){var n=e.error,t=void 0===n?"":n;return a.a.createElement("div",{"aria-label":"error message",className:"error-message"}," ",t," ")}},34:function(e,n,t){e.exports=t(55)},39:function(e,n,t){},40:function(e,n,t){},46:function(e,n,t){},47:function(e,n,t){},48:function(e,n,t){},49:function(e,n,t){},51:function(e,n,t){},52:function(e,n,t){},55:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(22),c=t.n(o),i=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=t(15),l=t(7),d=(t(39),function(){console.log("render footer..");return a.a.createElement("footer",{className:"footer-container"},a.a.createElement("img",{alt:"Anatta logo",className:"footerLogo",src:"/images/icon-72x72.png"}),a.a.createElement("label",null,"\xa9 2019 Anatta Inc. All rights reserved."))}),m=t(9),f=t(6),p=t(26),h=t(27),v=(t(46),function(){var e=a.a.createElement(p.a,{icon:h.a,size:"6x",spin:!0});return console.log("render spinner..."),a.a.createElement(f.a,null,a.a.createElement("div",{className:"spiner-container"},a.a.createElement("div",{"area-label":"loading data",className:"spinner"}," ",e," ")))}),b=t(8),g=t(11),E=(t(47),function(e){console.log("render header...");var n=Object(r.useRef)(),t=0;return a.a.createElement(f.a,null,a.a.createElement("header",null,a.a.createElement("div",null," ",b.a.baseCurrencyDescription," "),a.a.createElement("div",{className:"header-title"},a.a.createElement("div",{className:"currency-title"},b.a.baseCurrency),a.a.createElement("input",{onChange:function(){return clearTimeout(t),void(t=setTimeout(function(){return e.updateConversionAmount(n.current.value)},g.b))},ref:n,"aria-label":"Enter currency number",placeholder:"Enter amount..",type:"number",className:"currency-amount"}))))}),y=t(13),w=(t(48),t(49),a.a.forwardRef(function(e,n){var t=a.a.createElement("button",{className:"action-btn addmore-btn",onClick:function(){return e.setIsAddMore(!1)}},"(+) Add More Currencies"),r=a.a.createElement(a.a.Fragment,null,a.a.createElement("select",{className:"currency-input","aria-label":"select currency code",ref:n},e.pendingCurrencies.map(function(e){return a.a.createElement("option",{key:e,value:e},e)})),a.a.createElement("button",{className:"action-btn submit-btn",onClick:e.addCurrencyCode},"Submit"));return console.log("render AddMore ...."),a.a.createElement("div",{className:"addMoreContainer"}," ",e.isAddMore?t:r," ")})),C=t(31),O=t(17),j=t.n(O),A=t(28),S={exchangerate:"/latest"},k=function(e){return function(e){return R.apply(this,arguments)}(e,{method:"GET"})};function R(){return(R=Object(A.a)(j.a.mark(function e(n){var t,r,a,o,c=arguments;return j.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:{},r=b.a.apiServer+n,e.prev=2,e.next=5,fetch(r,t);case 5:return a=e.sent,e.next=8,a.json();case 8:return o=e.sent,console.log("Request succeeded: ",n),e.abrupt("return",Promise.resolve(o));case 13:return e.prev=13,e.t0=e.catch(2),console.log("Request failed",e.t0),e.abrupt("return",Promise.reject(e.t0));case 17:case"end":return e.stop()}},e,null,[[2,13]])}))).apply(this,arguments)}var N={ADD:"ADD",REMOVE:"REMOVE"};var D=function(e){var n=e.rates,t={},r=1/n[b.a.baseCurrency];for(var a in t={EUR:r.toFixed(g.c+1)},n)t[a]=(n[a]*r).toFixed(g.c+1);return g.a.map(function(e){return Object.assign({},e,{unit:t[e.name]})})};function M(e,n){switch(n.type){case N.ADD:return{selectedCurrencyList:[].concat(Object(C.a)(e.selectedCurrencyList),[n.payload])};case N.REMOVE:return{selectedCurrencyList:n.payload};default:return e}}t(51);var L=function(e){var n=a.a.lazy(function(){return t.e(3).then(t.bind(null,57))}),o=Object(r.useRef)(),c=Object(r.useState)(!1),i=Object(m.a)(c,2),s=i[0],u=i[1],l=Object(r.useState)(""),d=Object(m.a)(l,2),p=d[0],h=d[1],b=Object(r.useReducer)(M,{selectedCurrencyList:[]}),g=Object(m.a)(b,2),C=g[0],O=g[1],j=Object(r.useState)(10),A=Object(m.a)(j,2),R=A[0],L=A[1],P=Object(r.useState)([]),x=Object(m.a)(P,2),U=x[0],I=x[1],K=Object(r.useState)(!0),T=Object(m.a)(K,2),B=T[0],H=T[1];Object(r.useEffect)(function(){u(!0),k(S.exchangerate).then(function(e){var n=D(e);return Promise.resolve(n)}).catch(function(e){return Promise.reject(e)}).then(function(e){I(e),u(!1)}).catch(function(e){h("Server is down. Try after some time.."),u(!1)})},[]),Object(r.useEffect)(function(){p.length>0&&setTimeout(function(){h("")},3e3)},[p]);var W=function(e){e>0?L(e):h("Enter correct conversion amount")},F=function(){var e=o.current.value.trim().toUpperCase();if(e.length>2){var n=U.find(function(n){return n.name===e});H(!0),O({type:N.ADD,payload:n})}},z=function(e){var n=C.selectedCurrencyList.filter(function(n){return n.name!==e});O({type:N.REMOVE,payload:n})},G=U.reduce(function(e,n){return!C.selectedCurrencyList.find(function(e){return e.name===n.name})&&e.push(n.name),e},[]),J=C.selectedCurrencyList?C.selectedCurrencyList.map(function(e){return a.a.createElement(n,{key:e.name,conversionAmount:R,currency:e,removeCurrency:z})}):null;return a.a.createElement(f.a,null,Object(r.useMemo)(function(){return a.a.createElement(E,{conversionAmount:R,updateConversionAmount:W})},[R]),a.a.createElement("main",null,s?a.a.createElement(v,null):null,p.length>0?a.a.createElement(y.a,{error:p}):null,a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement("div",{"aria-label":"currency container",className:"scrollableSection"},J,Object(r.useMemo)(function(){return a.a.createElement(w,{ref:o,pendingCurrencies:G,isAddMore:B,setIsAddMore:H,addCurrencyCode:F})},[B])))))},P=(t(52),function(){return a.a.createElement(f.a,null,a.a.createElement(u.a,null,a.a.createElement(l.d,null,a.a.createElement(l.b,{path:"/",component:L}),a.a.createElement(l.a,{to:"/"})),Object(r.useMemo)(function(){return a.a.createElement(d,null)},[])))});c.a.render(a.a.createElement(P,null),document.getElementById("app")),function(e){if("serviceWorker"in navigator){if(new URL("/Anatta",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/Anatta","/service-worker.js");i?(function(e,n){fetch(e).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):s(n,e)})}}()},6:function(e,n,t){"use strict";var r=t(23),a=t(24),o=t(32),c=t(25),i=t(33),s=t(0),u=t.n(s),l=t(13),d=function(e){function n(){var e,t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=Object(o.a)(this,(e=Object(c.a)(n)).call.apply(e,[this].concat(i)))).state={hasError:!1,error:""},t}return Object(i.a)(n,e),Object(a.a)(n,[{key:"componentDidCatch",value:function(e,n){console.log("logging error:",e),this.setState({hasError:!0,error:e})}},{key:"render",value:function(){return this.state.hasError?u.a.createElement(u.a.Fragment,null,u.a.createElement(l.a,{error:"Something went wrong..."})):this.props.children}}]),n}(u.a.Component);n.a=d},8:function(e,n,t){"use strict";n.a={apiServer:"https://api.exchangeratesapi.io",baseCurrency:"USD",baseCurrencyDescription:"United States Dollors"}}},[[34,1,2]]]);
//# sourceMappingURL=main.3e7d21e9.chunk.js.map