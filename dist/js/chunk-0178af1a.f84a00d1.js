(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0178af1a"],{"7f84":function(e,t,r){"use strict";r("82a5")},"82a5":function(e,t,r){},"9b24":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-tw":{"title":"名醫會館"},"zh-cn":{"title":"名医会馆"}}'),delete e.options._Ctor}},a15b:function(e,t,r){"use strict";var n=r("23e7"),i=r("44ad"),o=r("fc6a"),a=r("a640"),s=[].join,c=i!=Object,u=a("join",",");n({target:"Array",proto:!0,forced:c||!u},{join:function(e){return s.call(o(this),void 0===e?",":e)}})},a55b:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"dtc-login"},[r("img",{staticClass:"dtc-avator",attrs:{src:e.avatorImg}}),r("h4",[e._v(e._s(e.userName))]),r("h4",{attrs:{hidden:""}},[e._v(e._s(e.userId))]),r("section",{staticClass:"dtc-report",on:{click:e.viewOrderHistory}},[r("h5",[e._v("預約紀錄")]),r("h6",[e._v(e._s(e.orderCount))])]),r("section",{staticClass:"dtc-report",on:{click:e.viewMyCollection}},[r("h5",[e._v("我的收藏")]),r("h6",[e._v(e._s(e.favList.length))])])])},i=[],o=(r("7db0"),r("4160"),r("a15b"),r("d81d"),r("d3b7"),r("6062"),r("3ca3"),r("159b"),r("ddb0"),r("2909")),a=(r("96cf"),r("1da1")),s=r("3aec"),c={name:"loginHome",data:function(){return{orderCount:0,collectionCount:0,favList:[],loadingApi:!1,userId:s["c"].lineProfile.userId}},computed:{avatorImg:function(){var e,t=null===(e=s["c"].lineProfile)||void 0===e?void 0:e.pictureUrl;return t||"http://unsplash.it/126/126"},userName:function(){var e,t=null===(e=s["c"].lineProfile)||void 0===e?void 0:e.displayName;return t||"DTC Testing User"}},components:{},methods:{getMyFav:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r="userId="+window.lineId,t.next=3,s["a"].getMyFav(r);case 3:n=t.sent,i=n.items,e.favList=i,s["c"].favList=i;case 7:case"end":return t.stop()}}),t)})))()},viewOrderHistory:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.orderCount){t.next=2;break}return t.abrupt("return");case 2:e.$router.push("myorderlist");case 3:case"end":return t.stop()}}),t)})))()},viewMyCollection:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.favList.length){t.next=2;break}return t.abrupt("return");case 2:e.$router.push("mycollectionlist");case 3:case"end":return t.stop()}}),t)})))()},getOrderHistoryList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,i,a,c,u,d;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.orders=[],r="orderPhoneNum_eq="+window.lineId,r+="&_sort=orderDate:desc",t.prev=3,e.loadingApi=!0,t.next=7,s["a"].getOrders(r);case 7:if(n=t.sent,i=n.count,a=n.items,e.orderCount=i,i){t.next=13;break}return t.abrupt("return");case 13:return c=new Set(a.map((function(e){return"phone_in="+e.doctorPhone}))),r=Object(o["a"])(c).join("&"),t.next=17,s["a"].getDoctors(r);case 17:u=t.sent,d=u.items,d.forEach((function(e){return a.find((function(t){return t.doctorPhone==e.phone})).details=e})),e.orders=a,t.next=26;break;case 23:t.prev=23,t.t0=t["catch"](3),alert("error getOrderHistoryList: "+t.t0);case 26:return t.prev=26,e.loadingApi=!1,t.finish(26);case 29:case"end":return t.stop()}}),t,null,[[3,23,26,29]])})))()}},mounted:function(){this.getOrderHistoryList(),this.getMyFav();var e={id:"U2a9bc2736efe3c6a0d361fef34efdb83"};s["a"].lineMsg(e)},watch:{}},u=c,d=(r("7f84"),r("2877")),l=r("edc3"),f=Object(d["a"])(u,n,i,!1,null,"a3788066",null);"function"===typeof l["default"]&&Object(l["default"])(f);t["default"]=f.exports},edc3:function(e,t,r){"use strict";var n=r("9b24"),i=r.n(n);t["default"]=i.a}}]);
//# sourceMappingURL=chunk-0178af1a.f84a00d1.js.map