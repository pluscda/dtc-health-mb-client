(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b88ea70"],{"152c":function(t,e,n){},"9b24":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-tw":{"title":"名醫會館"},"zh-cn":{"title":"名医会馆"}}'),delete t.options._Ctor}},a15b:function(t,e,n){"use strict";var r=n("23e7"),o=n("44ad"),i=n("fc6a"),a=n("a640"),c=[].join,s=o!=Object,u=a("join",",");r({target:"Array",proto:!0,forced:s||!u},{join:function(t){return c.call(i(this),void 0===t?",":t)}})},a55b:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"dtc-login"},[n("img",{staticClass:"dtc-avator",attrs:{src:t.avatorImg}}),n("h4",[t._v(t._s(t.userName))]),n("section",{staticClass:"dtc-report"},[n("h5",[t._v("預約紀錄")]),n("h6",[t._v(t._s(t.orderCount))])]),t._m(0)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"dtc-report"},[n("h5",[t._v("我的收藏")]),n("h6",[t._v("0")])])}],i=(n("7db0"),n("4160"),n("a15b"),n("d81d"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("2909")),a=(n("96cf"),n("1da1")),c=n("3aec"),s={name:"loginHome",data:function(){return{orderCount:0}},computed:{avatorImg:function(){var t,e=null===(t=c["c"].lineProfile)||void 0===t?void 0:t.pictureUrl;return e||"http://unsplash.it/126/126"},userName:function(){var t,e=null===(t=c["c"].lineProfile)||void 0===t?void 0:t.displayName;return e||"DTC Testing User"}},components:{},methods:{getOrderHistoryList:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,r,o,a,s,u,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.orders=[],n="orderPhoneNum_eq="+window.lineId,n+="&_sort=orderDate:desc",e.prev=3,t.loadingApi=!0,e.next=7,c["a"].getOrders(n);case 7:if(r=e.sent,o=r.count,a=r.items,t.orderCount=o,o){e.next=13;break}return e.abrupt("return");case 13:return s=new Set(a.map((function(t){return"phone_in="+t.doctorPhone}))),n=Object(i["a"])(s).join("&"),e.next=17,c["a"].getDoctors(n);case 17:u=e.sent,d=u.items,d.forEach((function(t){return a.find((function(e){return e.doctorPhone==t.phone})).details=t})),t.orders=a,e.next=26;break;case 23:e.prev=23,e.t0=e["catch"](3),alert("error getOrderHistoryList: "+e.t0);case 26:return e.prev=26,t.loadingApi=!1,e.finish(26);case 29:case"end":return e.stop()}}),e,null,[[3,23,26,29]])})))()}},mounted:function(){this.getOrderHistoryList()},watch:{}},u=s,d=(n("f753"),n("2877")),l=n("edc3"),f=Object(d["a"])(u,r,o,!1,null,"225aa60e",null);"function"===typeof l["default"]&&Object(l["default"])(f);e["default"]=f.exports},edc3:function(t,e,n){"use strict";var r=n("9b24"),o=n.n(r);e["default"]=o.a},f753:function(t,e,n){"use strict";n("152c")}}]);
//# sourceMappingURL=chunk-6b88ea70.a3c0d8ac.js.map