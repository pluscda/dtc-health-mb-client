(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d015ce5"],{"0746":function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-tw":{"title":"名醫會館"},"zh-cn":{"title":"名医会馆"}}'),delete t.options._Ctor}},5882:function(t,e,n){},"5af8":function(t,e,n){"use strict";var r=n("0746"),i=n.n(r);e["default"]=i.a},a4d8:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"doc-list pt-2"},[n("van-overlay",{staticStyle:{"z-index":"9999","text-align":"center"},attrs:{show:t.loadingApi}},[n("van-loading",{attrs:{type:"spinner"}})],1),n("header",[t._v(t._s(t.searchBy.includes("熱門")?"熱門":t.searchBy)+"名醫 "+t._s(t.countDocs))]),t._l(t.docs,(function(e,r){return n("main",{key:r,staticClass:"doc-item mt-1"},[n("van-card",{attrs:{price:e.price,currency:"NT",desc:t.getDesc(e),title:t.getTitle(e),thumb:t.getImgPath(e,r)},on:{click:function(n){return t.viewDetail(e)}},scopedSlots:t._u([{key:"tags",fn:function(){return[n("van-tag",{attrs:{plain:"",type:"danger"}},[t._v("可預約數量剩餘("+t._s(t.getBooksNum())+")")])]},proxy:!0},{key:"footer",fn:function(){return[n("van-button",{staticClass:"mr-2",attrs:{size:"small"},on:{click:function(n){return n.stopPropagation(),t.addCollection(e)}}},[t._v("收藏")]),t.isOrderAble(e)?n("van-button",{staticClass:"mr-2",attrs:{size:"small",type:"info"},on:{click:function(n){return n.stopPropagation(),t.book(e)}}},[t._v("預約")]):n("van-tag",{staticClass:"mr-2",staticStyle:{transform:"translate3d(4px,5px,0)"},attrs:{plain:"",type:"primary"}},[t._v("您已預約: "+t._s(t.getWaitStatus(e)))])]},proxy:!0}],null,!0)})],1)}))],2)},i=[],o=(n("a4d3"),n("e01a"),n("4de4"),n("7db0"),n("caad"),n("fb6a"),n("b0c0"),n("2532"),n("4795"),n("96cf"),n("1da1")),a=n("2b0e"),s=n("3aec"),c={name:"docList",data:function(){return{id:"",name:"",docs:[],cates:[],skip:0,cat:"",searchBy:"",myPreviousOrders:[],loadingApi:!1,jsonOutput:"",favList:[],count:0}},computed:{unFinishOrders:function(){return this.myPreviousOrders.filter((function(t){return"finish"!=t.status}))},countDocs:function(){var t=this.count?"(共".concat(this.count,"位)"):"";return t}},methods:{getMyFav:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n="userId="+window.lineId,e.next=3,s["a"].getMyFav(n);case 3:r=e.sent,i=r.items,t.favList=i;case 6:case"end":return e.stop()}}),e)})))()},isOrderAble:function(t){return!this.unFinishOrders.find((function(e){return e.orderPhoneNum==window.lineId&&e.doctorPhone==t.phone}))},getWaitStatus:function(t){var e=this.unFinishOrders.find((function(e){return e.orderPhoneNum==window.lineId&&e.doctorPhone==t.phone})).status;return"process"==e?"醫師處理中":"等待醫師回覆中"},addCollection:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r,i,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(i={userId:window.lineId,doctorPhone:t.phone},o=null===(r=e.favList)||void 0===r?void 0:r.find((function(e){return e.doctorPhone==t.phone})),!o){n.next=5;break}return a["a"].$toast.success("您已收藏成功"),n.abrupt("return");case 5:return n.prev=5,n.next=8,s["a"].addMyFav(i);case 8:a["a"].$toast.success("您已收藏成功"),n.next=14;break;case 11:n.prev=11,n.t0=n["catch"](5),a["a"].$toast.error("收藏 Fail");case 14:case"end":return n.stop()}}),n,null,[[5,11]])})))()},book:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:s["c"].bookItem=t,e.$router.push("/payment");case 2:case"end":return n.stop()}}),n)})))()},getBooksNum:function(){return 3},viewDetail:function(t){window.scrollTo({top:0,behavior:"smooth"});var e=this.isOrderAble(t);t.status=e?"waiting":"finish",s["c"].selectedDoctor=t,this.$router.push("doctordetails")},getDesc:function(t){return"擅長: "+t.description},getTitle:function(t){return t.name+" | "+t.hospital+" | "+t.title},getImgPath:function(t,e){return s["c"].imgPrefix+t.cover.url},getDocList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,n=t.id?"doctors?cid_eq="+t.id:"doctors?_limit=111130&_start=".concat(t.skip),e.next=4,axios.get(n);case 4:t.docs=e.sent,t.count=t.docs.length,e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getOrderHistory:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(window.lineId){e.next=3;break}return t.myPreviousOrders=[],e.abrupt("return");case 3:return n="orderPhoneNum_eq="+window.lineId,e.next=6,s["a"].getOrders(n);case 6:r=e.sent,r.count,i=r.items,t.myPreviousOrders=i;case 10:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return setTimeout((function(){return window.scrollTo({top:10,behavior:"smooth"})}),window.scrollTo({top:0,behavior:"smooth"}),300),n=t.$route.query.searchBy,t.name=n,t.searchBy=n||"熱門醫生",e.prev=4,t.loadingApi=!0,e.next=8,t.getOrderHistory();case 8:return e.next=10,s["a"].getCancerTypes();case 10:return t.cates=e.sent,t.id=n?t.cates.find((function(t){return t.name.includes(n.slice(0,2))})).cid:"",e.next=14,t.getDocList();case 14:e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](4),alert("error "+e.t0);case 19:return e.prev=19,t.loadingApi=!1,e.finish(19);case 22:t.getMyFav();case 23:case"end":return e.stop()}}),e,null,[[4,16,19,22]])})))()},watch:{}},u=c,d=(n("feae"),n("2877")),l=n("5af8"),p=Object(d["a"])(u,r,i,!1,null,"06d5e8ca",null);"function"===typeof l["default"]&&Object(l["default"])(p);e["default"]=p.exports},feae:function(t,e,n){"use strict";n("5882")}}]);
//# sourceMappingURL=chunk-5d015ce5.dbebe71d.js.map