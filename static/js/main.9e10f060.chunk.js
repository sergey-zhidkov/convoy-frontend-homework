(this["webpackJsonpconvoy-frontend-homework"]=this["webpackJsonpconvoy-frontend-homework"]||[]).push([[0],{110:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(0),i=r.n(a),o=r(20),c=r.n(o),s=(r(58),r(59),r(26)),l=r(18),f=r(13),u=r(45),d=r(12),h=r(22),v=r(28),O=r.n(v),j=r(46),p=r(47),m=r(48),g=r(29),_=r.n(g);function b(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(t||[]).filter((function(e){return!!e})).join(" ")}function y(e){e||(e=0);var t=e-Math.trunc(e)!==0;return e.toLocaleString("us-US",{style:"currency",currency:"USD",minimumFractionDigits:t?2:0,maximumFractionDigits:t?2:0})}function L(e){if(!e)return"";var t=e.start,r=e.end,n=t.getDate(),a=t.getMonth(),i=t.getFullYear(),o=r.getDate(),c=r.getMonth(),s=r.getFullYear();return n!==o||a!==c||i!==s?"".concat(t.toLocaleString([],{weekday:"short",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})," - ").concat(r.toLocaleString([],{weekday:"short",month:"numeric",day:"numeric",hour:"2-digit",minute:"2-digit"})):"".concat(t.toLocaleDateString([],{weekday:"short",month:"numeric",day:"numeric"})," ").concat(t.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})," - ").concat(r.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}))}var S,x,N,C=function(){function e(t){Object(p.a)(this,e),this.offerListApiUrl=void 0,this.searchState=void 0,this.cancelToken=void 0,this.offerListApiUrl="".concat("https://convoy-mock-api.herokuapp.com","/offers"),this.searchState=t,this.cancelToken=_.a.CancelToken.source()}return Object(m.a)(e,[{key:"fetchOfferList",value:function(){var e={params:Object(d.a)({},this.searchState)};return _.a.get(this.offerListApiUrl,e).then((function(e){return(null===(t=e.data)||void 0===t?void 0:t.length)?t.map((function(e){return{miles:e.miles,offer:e.offer,origin:{city:e.origin.city,state:e.origin.state,pickup:{start:new Date(e.origin.pickup.start),end:new Date(e.origin.pickup.end)}},destination:{city:e.destination.city,state:e.destination.state,dropoff:{start:new Date(e.destination.dropoff.start),end:new Date(e.destination.dropoff.end)}},isRequested:Math.random()<.3}})):[];var t}))}},{key:"token",get:function(){return this.cancelToken}}]),e}(),k="convoy_addOfferList",E="convoy_setOfferList",w="convoy_setFetchStateSuccess",F="convoy_setFetchStateLoading",M="convoy_setFetchStateError",D="convoy_setSearchState",B="convoy_setError",T={getNextOfferList:function(){var e=this;return function(){var t=Object(j.a)(O.a.mark((function t(r,n){var a,i,o;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r(e.updateSetFetchState(F)),a=n().offerReducers.searchState,i=new C(a),t.next=6,i.fetchOfferList();case 6:o=t.sent,console.log(o),r(e.updateSetFetchState(w)),r(e.failureGetOffertListFetchState("")),r(e.updateSearchState(a,o)),r(e.addOfferList(o)),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(0),r(e.failureGetOffertListFetchState(t.t0.toString()));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})));return function(e,r){return t.apply(this,arguments)}}()},addOfferList:function(e){return function(t){t({type:k,payload:e})}},setOfferList:function(e){return function(t){t({type:E,payload:e})}},updateSearchState:function(e,t){var r=this;return function(n){var a=Object(d.a)({},e);a.offset+=t.length,n(r.setSearchState(a))}},setSearchState:function(e){return function(t){t({type:D,payload:e})}},updateSetFetchState:function(e){return function(t){t({type:e,payload:void 0})}},failureGetOffertListFetchState:function(e){var t=this;return function(r){r(t.updateSetFetchState(M)),r({type:B,payload:e})}}};!function(e){e.pickupDate="pickupDate",e.dropoffDate="dropoffDate",e.price="price",e.origin="origin",e.destination="destination",e.miles="miles"}(S||(S={})),function(e){e.desc="desc",e.asc="asc"}(x||(x={})),function(e){e[e.Loading=0]="Loading",e[e.Success=1]="Success",e[e.Error=2]="Error"}(N||(N={}));var P={offset:0,limit:3,sort:S.pickupDate,order:x.desc};var R=Object(f.c)({offerList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return t.type===k?[].concat(Object(h.a)(e),Object(h.a)(t.payload)):t.type===E?Object(h.a)(t.payload):e},fetchState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N.Success,t=arguments.length>1?arguments[1]:void 0;return t.type===F?N.Loading:t.type===w?N.Success:t.type===M?N.Error:e},searchState:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(d.a)({},P),t=arguments.length>1?arguments[1]:void 0;return t.type===D?Object.assign({},e,t.payload):e},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return t.type===B?t.payload:e}}),q=r(49),U=Object(f.c)({offerReducers:R}),Z=Object(q.createLogger)({}),H=Object(f.d)(U,Object(f.a)(u.a,Z)),I=r(50),J=r.n(I),V=r(5),G=r(30),A=r.n(G);function W(e){var t=e.className;return Object(n.jsx)("div",{className:b("NoMatch",A.a.NoMatch,t),children:Object(n.jsx)("div",{className:A.a.error,children:"Page not found"})})}var z=r(51),X=r.n(z),Y=function(e){var t=e.className;return Object(n.jsx)("footer",{className:b("Footer",X.a.Footer,t),children:"Sergey's Homework"})},K=r(31),Q=r.n(K),$=r(16),ee=r.n($),te=function(e){var t=e.className;return Object(n.jsx)("nav",{className:b("NavBar",ee.a.NavBar,t),role:"navigator",children:Object(n.jsxs)("ul",{className:ee.a.navigationContainer,"aria-label":"Main website navigation",children:[Object(n.jsx)("li",{className:b(ee.a.active,ee.a.link),children:"Offers"}),Object(n.jsx)("li",{className:ee.a.link,children:"My Jobs"})]})})};function re(){return(re=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function ne(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var ae=a.createElement("desc",null,"Created with Sketch."),ie=a.createElement("defs",null),oe=a.createElement("g",{id:"Mobile->-Desktop",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},a.createElement("g",{id:"03b-ShipWithUs-Desktop",transform:"translate(-905.000000, -134.000000)",fill:"#000000"},a.createElement("g",{id:"marquee-and-headline",transform:"translate(0.000000, -40.000000)"},a.createElement("g",{id:"Convoy_logo",transform:"translate(905.000000, 174.000000)"},a.createElement("path",{d:"M27.2471263,8.64530714 L13.11349,8.64530714 C10.9766583,8.64530714 10.1505512,9.71396316 10.1505512,11.3652168 L10.1505512,23.0704824 C10.1505512,24.721736 10.9766583,25.9359214 13.11349,25.9359214 L27.2471263,25.9359214 L27.3441459,33.8041115 C27.3441459,33.8041115 17.9217217,34.5812285 10.1025217,34.5812285 C3.3510171,34.5812285 0,30.1615554 0,25.2558239 L0,9.17987529 C0,4.27414379 3.3510171,0 10.1025217,0 C18.1652312,0 27.3441459,0.583077937 27.3441459,0.583077937 L27.2471263,8.64530714",id:"Fill-1"}),a.createElement("path",{d:"M47.3076009,11.0251681 L47.3076009,23.4105311 C47.3076009,25.0617848 48.0357279,26.1789506 50.1735203,26.1789506 L55.9043983,26.1789506 C57.9927203,26.1789506 58.7698373,25.0617848 58.7698373,23.4105311 L58.7698373,11.0251681 C58.7698373,9.37391441 57.9927203,8.35424846 55.9043983,8.35424846 L50.1735203,8.35424846 C48.0357279,8.35424846 47.3076009,9.37391441 47.3076009,11.0251681 Z M37.2055596,25.2073141 L37.2055596,9.37391441 C37.2055596,4.4686632 40.6055667,0.243029189 47.3561107,0.243029189 L58.6728178,0.243029189 C65.423842,0.243029189 68.872359,4.4686632 68.872359,9.37391441 L68.872359,25.2073141 C68.872359,30.0645359 65.423842,34.3386796 58.6728178,34.3386796 L47.3561107,34.3386796 C40.6055667,34.3386796 37.2055596,30.0645359 37.2055596,25.2073141 L37.2055596,25.2073141 Z",id:"Fill-4"}),a.createElement("path",{d:"M112.683414,34.2896896 L104.620704,34.2896896 C102.920941,34.2896896 102.434882,34.0471407 101.512236,32.6869457 L90.9246163,17.2906143 L90.5840873,17.2906143 L90.5840873,34.2896896 L80.4815656,34.2896896 L80.4815656,0.291538968 L88.5923046,0.291538968 C90.7300969,0.291538968 90.6811068,0.485578084 91.2646651,1.31168521 C91.6527433,1.89428285 100.540599,14.3766655 102.386853,17.3396043 L102.629402,17.3396043 L102.629402,0.291538968 L112.683414,0.291538968 L112.683414,34.2896896",id:"Fill-5"}),a.createElement("path",{d:"M145.857378,0.291538968 L157.223075,0.291538968 C157.223075,0.291538968 149.305415,29.5784775 148.432239,32.8329553 C148.0432,34.2411798 147.508632,34.4356992 146.731515,34.4356992 L132.549369,34.4356992 C131.772252,34.4356992 131.286674,34.2411798 130.898595,32.8329553 C129.974988,29.5784775 122.058769,0.291538968 122.058769,0.291538968 L133.423505,0.291538968 L139.349383,24.4301971 L139.931981,24.4301971 L145.857378,0.291538968",id:"Fill-6"}),a.createElement("path",{d:"M175.534316,11.0251681 L175.534316,23.4105311 C175.534316,25.0617848 176.262443,26.1789506 178.400235,26.1789506 L184.130633,26.1789506 C186.219435,26.1789506 186.996552,25.0617848 186.996552,23.4105311 L186.996552,11.0251681 C186.996552,9.37391441 186.219435,8.35424846 184.130633,8.35424846 L178.400235,8.35424846 C176.262443,8.35424846 175.534316,9.37391441 175.534316,11.0251681 Z M165.431794,25.2073141 L165.431794,9.37391441 C165.431794,4.4686632 168.832282,0.243029189 175.582346,0.243029189 L186.899053,0.243029189 C193.650557,0.243029189 197.098594,4.4686632 197.098594,9.37391441 L197.098594,25.2073141 C197.098594,30.0645359 193.650557,34.3386796 186.899053,34.3386796 L175.582346,34.3386796 C168.832282,34.3386796 165.431794,30.0645359 165.431794,25.2073141 L165.431794,25.2073141 Z",id:"Fill-7"}),a.createElement("polyline",{id:"Fill-8",points:"221.287683 12.7734413 228.136207 0.291538968 239.646953 0.291538968 226.387934 24.3816873 226.387934 34.2896896 216.285412 34.2896896 216.285412 24.5272166 202.928893 0.291538968 214.439639 0.291538968 221.287683 12.7734413"})))));function ce(e,t){var r=e.title,n=e.titleId,i=ne(e,["title","titleId"]);return a.createElement("svg",re({width:"140px",height:"35px",viewBox:"0 0 240 35",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":n},i),void 0===r?a.createElement("title",{id:n},"Convoy_logo"):r?a.createElement("title",{id:n},r):null,ae,ie,oe)}var se=a.forwardRef(ce),le=(r.p,function(e){var t=e.className;return Object(n.jsxs)("header",{className:b("Header",Q.a.Header,t),children:[Object(n.jsx)("div",{className:Q.a.logo,children:Object(n.jsx)(se,{})}),Object(n.jsx)(te,{})]})}),fe=r(14),ue=r.n(fe),de=r(32),he=r.n(de),ve=r(6),Oe=r.n(ve),je=function(e){var t=e.className,r=e.offer,a=function(e,t,r,a){return Object(n.jsxs)("div",{className:b(a,Oe.a.locationContainer),children:[Object(n.jsxs)("span",{className:Oe.a.location,children:[e,", ",t]}),Object(n.jsx)("span",{className:Oe.a.timeInterval,children:L(r)})]})};return Object(n.jsxs)("div",{className:b("OfferEntry",Oe.a.OfferEntry,t),children:[r.isRequested?Object(n.jsx)("div",{className:Oe.a.requestStatus,children:"Requested"}):null,Object(n.jsxs)("div",{className:Oe.a.contentContainer,children:[Object(n.jsxs)("div",{className:Oe.a.route,children:[Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:b(Oe.a.circle,Oe.a.first)}),a(r.origin.city,r.origin.state,r.origin.pickup,Oe.a.origin)]}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:b(Oe.a.circle,Oe.a.last)}),a(r.destination.city,r.destination.state,r.destination.dropoff,Oe.a.destination)]})]}),Object(n.jsx)("div",{className:Oe.a.trailerType,children:"53' Reefer"}),function(){return Object(n.jsx)("div",{className:Oe.a.mileage,children:(e=r.miles,e||(e=0),1===e?"".concat(e," mile"):"".concat(e.toLocaleString()," miles"))});var e}(),Object(n.jsx)("div",{className:Oe.a.payment,children:y(r.offer)})]})]})},pe=function(e){var t=e.className,r=e.offerList;return Object(n.jsx)("div",{className:b("OfferList",he.a.OfferList,t),children:(r||[]).map((function(e,t){return Object(n.jsx)(je,{offer:e,className:he.a.offerEntry},t)}))})},me=r(52),ge=r(19),_e=r.n(ge),be=[{value:S.pickupDate,label:"Pickup date"},{value:S.dropoffDate,label:"Dropoff date"},{value:S.price,label:"Price"},{value:S.origin,label:"Origin"},{value:S.destination,label:"Destination"},{value:S.miles,label:"Miles"}],ye=function(e){var t=e.className,r=e.selectedValue,a=e.onChange;return Object(n.jsxs)("div",{className:b("SortSelector",_e.a.SortSelector,t),children:[Object(n.jsx)("label",{className:_e.a.label,children:"Sort by:"}),Object(n.jsx)("select",{className:_e.a.select,onChange:function(e){return a(e.target.value)},children:be.map((function(e){return Object(n.jsx)("option",{className:_e.a.option,value:e.value,selected:r===e.value,children:e.label})}))})]})};function Le(e){var t=e.className,r=Object(l.c)((function(e){return e.offerReducers})),i=r.offerList,o=r.fetchState,c=r.error,s=r.searchState,f=o===N.Loading,u=Object(l.b)();Object(a.useEffect)((function(){(null===i||void 0===i?void 0:i.length)||u(T.getNextOfferList())}),[]);var h=function(){u(T.getNextOfferList())};return Object(n.jsxs)("div",{className:b("Offers",ue.a.Offers,t),children:[Object(n.jsx)(ye,{className:ue.a.sortSelector,selectedValue:s.sort,onChange:function(e){if(e!==s.sort){var t=Object(d.a)({},s);t.sort=e,u(T.setSearchState(t)),u(T.setOfferList([])),u(T.getNextOfferList())}}}),Object(n.jsx)(pe,{className:ue.a.offerList,offerList:i}),Object(n.jsxs)("div",{className:ue.a.showMoreContainer,children:[Object(n.jsxs)("button",{className:ue.a.showMore,disabled:f,onClick:h,children:[!f&&Object(n.jsx)("span",{children:"Show more"}),f&&Object(n.jsx)(me.BeatLoader,{size:36,margin:2,loading:!0,color:"#ffffff"})]}),c&&Object(n.jsx)("div",{className:ue.a.errorContainer,children:c})]})]})}function Se(e){var t=e.className;return Object(n.jsxs)("div",{className:b("Shell",J.a.Shell,t),children:[Object(n.jsx)(le,{}),Object(n.jsxs)(V.c,{children:[Object(n.jsx)(V.a,{exact:!0,path:"/",render:function(e){return Object(n.jsx)(Le,Object(d.a)({},e))}}),Object(n.jsx)(V.a,{component:W})]}),Object(n.jsx)(Y,{})]})}var xe=function(){return Object(n.jsx)(s.a,{children:Object(n.jsx)(l.a,{store:H,children:Object(n.jsx)(Se,{})})})},Ne=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,111)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;r(e),n(e),a(e),i(e),o(e)}))};c.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(xe,{})}),document.getElementById("root")),Ne()},14:function(e,t,r){e.exports={Offers:"Offers_Offers__9scJ_",offerList:"Offers_offerList__1q2Nx",showMoreContainer:"Offers_showMoreContainer__2O8eO",showMore:"Offers_showMore__655zJ",errorContainer:"Offers_errorContainer__TSW9S"}},16:function(e,t,r){e.exports={NavBar:"NavBar_NavBar__3_tip",navigationContainer:"NavBar_navigationContainer__2-JSs",link:"NavBar_link__N33_V",active:"NavBar_active__1gmdx"}},19:function(e,t,r){e.exports={SortSelector:"SortSelector_SortSelector__Va5fa",select:"SortSelector_select__2XZhZ",option:"SortSelector_option__1sjN8"}},30:function(e,t,r){e.exports={NoMatch:"NoMatch_NoMatch__33LMG",error:"NoMatch_error__HgFBg"}},31:function(e,t,r){e.exports={Header:"Header_Header__1TgD-",logo:"Header_logo__3P0Qt"}},32:function(e,t,r){e.exports={OfferList:"OfferList_OfferList__NUEt-",offerEntry:"OfferList_offerEntry__38JZS"}},50:function(e,t,r){e.exports={Shell:"Shell_Shell__kUiGR"}},51:function(e,t,r){e.exports={Footer:"Footer_Footer__3hfhM"}},58:function(e,t,r){},59:function(e,t,r){},6:function(e,t,r){e.exports={OfferEntry:"OfferEntry_OfferEntry__3VZdm",requestStatus:"OfferEntry_requestStatus__2AlKT",contentContainer:"OfferEntry_contentContainer__3woco",route:"OfferEntry_route__1tZW7",circle:"OfferEntry_circle__3Vp_q",first:"OfferEntry_first__2kgC1",last:"OfferEntry_last__12PD-",locationContainer:"OfferEntry_locationContainer__C7fdU",location:"OfferEntry_location__30gGc",timeInterval:"OfferEntry_timeInterval__2nJsy",payment:"OfferEntry_payment__2x39V"}}},[[110,1,2]]]);
//# sourceMappingURL=main.9e10f060.chunk.js.map