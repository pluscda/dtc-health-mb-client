(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-506264df"],{"0746":function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"zh-tw":{"title":"名醫會館"},"zh-cn":{"title":"名医会馆"}}'),delete e.options._Ctor}},"0ccb":function(e,t,r){var n=r("50c4"),a=r("1148"),o=r("1d80"),s=Math.ceil,i=function(e){return function(t,r,i){var c,u,d=String(o(t)),l=d.length,p=void 0===i?" ":String(i),h=n(r);return h<=l||""==p?d:(c=h-l,u=a.call(p,s(c/p.length)),u.length>c&&(u=u.slice(0,c)),e?d+u:u+d)}};e.exports={start:i(!1),end:i(!0)}},"5af8":function(e,t,r){"use strict";var n=r("0746"),a=r.n(n);t["default"]=a.a},"64e5":function(e,t,r){"use strict";var n=r("d039"),a=r("0ccb").start,o=Math.abs,s=Date.prototype,i=s.getTime,c=s.toISOString;e.exports=n((function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-50000000000001))}))||!n((function(){c.call(new Date(NaN))}))?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),r=e.getUTCMilliseconds(),n=t<0?"-":t>9999?"+":"";return n+a(o(t),n?6:4,0)+"-"+a(e.getUTCMonth()+1,2,0)+"-"+a(e.getUTCDate(),2,0)+"T"+a(e.getUTCHours(),2,0)+":"+a(e.getUTCMinutes(),2,0)+":"+a(e.getUTCSeconds(),2,0)+"."+a(r,3,0)+"Z"}:c},a4d8:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"doc-list pt-2"},[r("van-overlay",{staticStyle:{"z-index":"9999","text-align":"center"},attrs:{show:e.loadingApi}},[r("van-loading",{attrs:{type:"spinner"}})],1),r("header",[e._v("快速找名醫")]),r("van-search",{staticClass:"mx-4 mt-2",attrs:{background:"white",shape:"round",placeholder:"醫院 | 醫生名 | 病名"},model:{value:e.searchBy,callback:function(t){e.searchBy=t},expression:"searchBy"}}),e._l(e.docs,(function(t,n){return r("main",{key:n,staticClass:"doc-item mt-1"},[r("van-card",{attrs:{price:t.price,currency:"NT",desc:e.getDesc(t),title:e.getTitle(t),thumb:e.getImgPath(t,n)},on:{click:function(r){return e.viewDetail(t)}},scopedSlots:e._u([{key:"tags",fn:function(){return[r("van-tag",{attrs:{plain:"",type:"danger"}},[e._v("可預約數量剩餘("+e._s(e.getBooksNum())+")")])]},proxy:!0},{key:"footer",fn:function(){return[r("van-button",{staticClass:"mr-2",attrs:{size:"small"}},[e._v("收藏")]),e.isOrderAble(t)?r("van-button",{staticClass:"mr-2",attrs:{size:"small",type:"info"},on:{click:function(r){return r.stopPropagation(),e.book(t)}}},[e._v("預約")]):r("van-tag",{staticClass:"mr-2",staticStyle:{transform:"translate3d(4px,5px,0)"},attrs:{plain:"",type:"primary"}},[e._v("您已預約: "+e._s(e.getWaitStatus(t)))])]},proxy:!0}],null,!0)})],1)}))],2)},a=[],o=(r("a4d3"),r("e01a"),r("4de4"),r("7db0"),r("caad"),r("accc"),r("0d03"),r("b0c0"),r("2532"),r("2909")),s=(r("96cf"),r("1da1")),i=r("2b0e"),c=r("3aec"),u={name:"docList",data:function(){return{id:"",name:"",docs:[],cates:[],skip:0,cat:"",searchBy:"",myPreviousOrders:[],loadingApi:!1}},computed:{unFinishOrders:function(){return this.myPreviousOrders.filter((function(e){return"finish"!=e.status}))}},methods:{isOrderAble:function(e){return!this.unFinishOrders.find((function(t){return t.orderPhoneNum==sessionStorage.phone&&t.doctorPhone==e.phone}))},getWaitStatus:function(e){var t=this.unFinishOrders.find((function(t){return t.orderPhoneNum==sessionStorage.phone&&t.doctorPhone==e.phone})).status;return"process"==t?"醫師處理中":"等待醫師回覆中"},book:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var n,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(sessionStorage.orderedDocPhone=e.phone,sessionStorage.token){r.next=4;break}return t.$router.push("/login?callback=doclist"),r.abrupt("return");case 4:return{orderPhoneNum:sessionStorage.phone,paidAmount:e.price,orderStatus:"waiting",orderDate:(new Date).toISOString(),doctorPhone:e.phone,inqueryCate:"熱門醫生"!=t.searchBy?t.cates.find((function(e){return e.name.includes(t.searchBy)})).cid:e.cid,cusUnreadMsg:1,totalMsg:1,message:e.cid<c["c"].MIN_NON_CANCER_NUM?[{docComment:"需要您的報告,請您用郵件寄出",commentAt:(new Date).toISOString()}]:[]},r.prev=5,t.loadingApi=!0,r.next=9,c["a"].addOrder(a);case 9:return n=r.sent,i["a"].$toast.success("您已預約成功"),r.next=13,t.getOrderHistory();case 13:t.docs=Object(o["a"])(t.docs),a={senderPhone:sessionStorage.phone,receivePhone:e.phone,orderId:n.id,type:"newOrder"},c["a"].sendPushMsg(a),r.next=21;break;case 18:r.prev=18,r.t0=r["catch"](5),i["a"].$toast.error("order fail");case 21:return r.prev=21,sessionStorage.orderedDocPhone="",t.loadingApi=!1,r.finish(21);case 25:case"end":return r.stop()}}),r,null,[[5,18,21,25]])})))()},getBooksNum:function(){return 3},viewDetail:function(e){window.scrollTo({top:0,behavior:"smooth"});var t=this.isOrderAble(e);e.status=t?"waiting":"finish",c["c"].selectedDoctor=e,this.$router.push("doctordetails")},getDesc:function(e){return"擅長: "+e.description},getTitle:function(e){return e.name+" | "+e.hospital+" | "+e.title},getImgPath:function(e,t){return c["c"].imgPrefix+e.cover.url},getDocList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=e.id?"doctors?cid_eq="+e.id:"doctors?_limit=30&_start=".concat(e.skip),t.next=4,axios.get(r);case 4:e.docs=t.sent,t.next=9;break;case 7:t.prev=7,t.t0=t["catch"](0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})))()},getOrderHistory:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(sessionStorage.phone){t.next=3;break}return e.myPreviousOrders=[],t.abrupt("return");case 3:return r="orderPhoneNum_eq="+sessionStorage.phone,t.next=6,c["a"].getOrders(r);case 6:n=t.sent,n.count,a=n.items,e.myPreviousOrders=a;case 10:case"end":return t.stop()}}),t)})))()}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$route.query,n=r.id,a=r.searchBy,e.id=+n,e.name=a,e.searchBy=a||"熱門醫生",t.prev=4,e.loadingApi=!0,t.next=8,e.getOrderHistory();case 8:return t.next=10,e.getDocList();case 10:return t.next=12,c["a"].getCancerTypes();case 12:e.cates=t.sent,t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](4),alert("error "+t.t0);case 18:return t.prev=18,e.loadingApi=!1,t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[4,15,18,21]])})))()},watch:{}},d=u,l=(r("dd90"),r("2877")),p=r("5af8"),h=Object(l["a"])(d,n,a,!1,null,"40e86803",null);"function"===typeof p["default"]&&Object(p["default"])(h);t["default"]=h.exports},accc:function(e,t,r){var n=r("23e7"),a=r("64e5");n({target:"Date",proto:!0,forced:Date.prototype.toISOString!==a},{toISOString:a})},b6e3:function(e,t,r){},dd90:function(e,t,r){"use strict";r("b6e3")}}]);
//# sourceMappingURL=chunk-506264df.e34cd2b7.js.map