(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-185ce104"],{"0ccb":function(t,e,n){var r=n("50c4"),i=n("1148"),a=n("1d80"),o=Math.ceil,s=function(t){return function(e,n,s){var c,u,d=String(a(e)),l=d.length,g=void 0===s?" ":String(s),m=r(n);return m<=l||""==g?d:(c=m-l,u=i.call(g,o(c/g.length)),u.length>c&&(u=u.slice(0,c)),t?d+u:u+d)}};t.exports={start:s(!1),end:s(!0)}},1184:function(t,e,n){},4795:function(t,e,n){var r=n("23e7"),i=n("da84"),a=n("342f"),o=[].slice,s=/MSIE .\./.test(a),c=function(t){return function(e,n){var r=arguments.length>2,i=r?o.call(arguments,2):void 0;return t(r?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,n)}};r({global:!0,bind:!0,forced:s},{setTimeout:c(i.setTimeout),setInterval:c(i.setInterval)})},"64e5":function(t,e,n){"use strict";var r=n("d039"),i=n("0ccb").start,a=Math.abs,o=Date.prototype,s=o.getTime,c=o.toISOString;t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-50000000000001))}))||!r((function(){c.call(new Date(NaN))}))?function(){if(!isFinite(s.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),r=e<0?"-":e>9999?"+":"";return r+i(a(e),r?6:4,0)+"-"+i(t.getUTCMonth()+1,2,0)+"-"+i(t.getUTCDate(),2,0)+"T"+i(t.getUTCHours(),2,0)+":"+i(t.getUTCMinutes(),2,0)+":"+i(t.getUTCSeconds(),2,0)+"."+i(n,3,0)+"Z"}:c},6852:function(t,e,n){"use strict";var r=n("7287"),i=n.n(r);e["default"]=i.a},7287:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-tw":{"title":"名醫會館"},"zh-cn":{"title":"名医会馆"}}'),delete t.options._Ctor}},"7f83":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"doc-list"},[n("van-nav-bar",{attrs:{title:"我的預約紀錄"}}),n("van-overlay",{staticStyle:{"text-align":"center"},attrs:{show:t.loadingApi}},[n("van-loading",{attrs:{type:"spinner"}})],1),t._l(t.orders,(function(e,r){return n("main",{key:r,staticClass:"doc-item mt-1",on:{click:function(n){return t.viewComment(e)}}},[e.details?n("van-card",{attrs:{price:e.details.price,currency:"NT",desc:t.getDesc(e),title:t.getTitle(e),thumb:t.getImgPath(e,r)},scopedSlots:t._u([{key:"tags",fn:function(){return[n("div",{staticClass:"my-tags-grid"},[n("div",{staticStyle:{color:"var(--bs-blue)"}},[t._v(t._s(t.$formatStatus(e.orderStatus)))]),!e.judge||t.commentFilter||t.judgeFilter?t._e():n("div",{staticClass:"click-4-more",on:{click:function(n){return n.stopPropagation(),t.showJudge(e)}}},[t._v("按我看診斷紀錄")]),n("nav",{staticClass:"clip-judge",class:t.judgeFilter?"show-detail-judge":""},[n("div",{staticClass:"judge-content px-2"},[e.report?n("van-cell-group",{staticClass:"mb-2"},[n("van-field",{attrs:{label:"病患姓名",readonly:"",value:e.report.name}}),n("van-field",{attrs:{label:"身份證號",readonly:"",value:e.report.personId}})],1):t._e(),t._v(" "+t._s(e.judge)+" ")],1)])])]},proxy:!0},{key:"footer",fn:function(){return[n("div",{staticClass:"my-tags-grid3"},[n("div"),n("van-badge",{attrs:{content:t.getMyCount(e.message),color:"rgb(25, 137, 250)"}},[n("div",{staticClass:"my-msg"},[t._v("我的留言")])]),n("van-badge",{attrs:{content:t.getDoctCount(e.message),color:"rgb(25, 137, 250)"}},[n("div",{staticClass:"my-doc-msg"},[t._v("醫生留言")])])],1)]},proxy:!0}],null,!0)}):t._e()],1)}))],2)},i=[],a=(n("a4d3"),n("e01a"),n("99af"),n("4de4"),n("7db0"),n("4160"),n("a15b"),n("d81d"),n("accc"),n("0d03"),n("b0c0"),n("d3b7"),n("6062"),n("3ca3"),n("159b"),n("ddb0"),n("4795"),n("2909")),o=n("5530"),s=(n("96cf"),n("1da1")),c=n("2b0e"),u=n("3aec"),d={name:"myorderlist",data:function(){return{judgeFilter:"",showClipPath:!1,docs:[],skip:0,orders:[],commentFilter:"",showLeavelMsg:!1,myMsg:"",price:"",loadingApi:!1}},computed:{},methods:{showJudge:function(t){this.$router.push("/myfinaljudge?id="+t.id)},getMyCount:function(t){return t.filter((function(t){return t.userComment})).length},getDoctCount:function(t){return t.filter((function(t){return t.docComment})).length},updateReadStatus:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.loadingApi=!0,t.read=!0,n.next=4,u["a"].updateOrder(e.myOrders[0]);case 4:return n.next=6,e.getOrderHistoryList();case 6:e.myMsg="",e.loadingApi=!1;case 8:case"end":return n.stop()}}),n)})))()},getMsgStatus:function(t){var e=t.userComment&&t.read?"醫生已讀取":"";return e||(e=t.userComment&&!t.read?"醫生未讀取":""),e||(e=t.docComment&&!t.read?"您未讀取":""),e||(e=t.docComment&&t.read?"您已讀取":""),e},addComment:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.loadingApi=!0,r={docComment:"",commentAt:(new Date).toISOString(),rating:0,userComment:t,read:!1},e.myOrders[0].message||(e.myOrders[0].message=[]),e.myOrders[0].message.unshift(r),n.next=6,u["a"].updateOrder(e.myOrders[0]);case 6:i=Object(o["a"])({},e.myOrders[0]),c["a"].$toast.success("新增留言成功"),setTimeout((function(){return e.getData()}),100),e.orders=Object(a["a"])(e.orders),e.loadingApi=!1,"您的線上客戶: ".concat(u["c"].lineProfile.displayName,"新增留言:").concat(t),u["a"].lineMsg({id:i.doctorPhone,msg:t});case 13:case"end":return n.stop()}}),n)})))()},viewComment:function(t){this.$router.push("/mymsgboard?id="+t.id)},viewDetail:function(t){this.$router.push("/myfinaljudge?id="+t.id)},getDesc:function(t){return"專長: "+t.details.description},getTitle:function(t){return t.details.name+" | "+t.details.hospital+" | "+t.details.title+" @ "+this.$twDate(t.orderDate)+" 預約成功"},getImgPath:function(t,e){return u["c"].imgPrefix+t.details.cover.url},getOrderHistoryList:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var n,r,i,o,s,c,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.orders=[],n="orderPhoneNum_eq="+window.lineId,n+="&_sort=orderDate:desc",e.prev=3,t.loadingApi=!0,e.next=7,u["a"].getOrders(n);case 7:if(r=e.sent,i=r.count,o=r.items,i){e.next=12;break}return e.abrupt("return");case 12:return s=new Set(o.map((function(t){return"phone_in="+t.doctorPhone}))),n=Object(a["a"])(s).join("&"),e.next=16,u["a"].getDoctors(n);case 16:c=e.sent,d=c.items,d.forEach((function(t){return o.find((function(e){return e.doctorPhone==t.phone})).details=t})),t.orders=o,e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](3),alert("error getOrderHistoryList: "+e.t0);case 25:return e.prev=25,t.loadingApi=!1,e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[3,22,25,28]])})))()}},mounted:function(){this.getOrderHistoryList()},watch:{}},l=d,g=(n("95cb"),n("2877")),m=n("6852"),f=Object(g["a"])(l,r,i,!1,null,"0344dc6a",null);"function"===typeof m["default"]&&Object(m["default"])(f);e["default"]=f.exports},"95cb":function(t,e,n){"use strict";n("1184")},a15b:function(t,e,n){"use strict";var r=n("23e7"),i=n("44ad"),a=n("fc6a"),o=n("a640"),s=[].join,c=i!=Object,u=o("join",",");r({target:"Array",proto:!0,forced:c||!u},{join:function(t){return s.call(a(this),void 0===t?",":t)}})},accc:function(t,e,n){var r=n("23e7"),i=n("64e5");r({target:"Date",proto:!0,forced:Date.prototype.toISOString!==i},{toISOString:i})}}]);
//# sourceMappingURL=chunk-185ce104.208549f5.js.map