(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d5aaf2e4"],{"0ccb":function(t,e,r){var n=r("50c4"),i=r("1148"),a=r("1d80"),o=Math.ceil,s=function(t){return function(e,r,s){var c,u,d=String(a(e)),l=d.length,m=void 0===s?" ":String(s),g=n(r);return g<=l||""==m?d:(c=g-l,u=i.call(m,o(c/m.length)),u.length>c&&(u=u.slice(0,c)),t?d+u:u+d)}};t.exports={start:s(!1),end:s(!0)}},"24ef":function(t,e,r){"use strict";r("ae32")},"26e9":function(t,e,r){"use strict";var n=r("23e7"),i=r("e8b5"),a=[].reverse,o=[1,2];n({target:"Array",proto:!0,forced:String(o)===String(o.reverse())},{reverse:function(){return i(this)&&(this.length=this.length),a.call(this)}})},4795:function(t,e,r){var n=r("23e7"),i=r("da84"),a=r("342f"),o=[].slice,s=/MSIE .\./.test(a),c=function(t){return function(e,r){var n=arguments.length>2,i=n?o.call(arguments,2):void 0;return t(n?function(){("function"==typeof e?e:Function(e)).apply(this,i)}:e,r)}};n({global:!0,bind:!0,forced:s},{setTimeout:c(i.setTimeout),setInterval:c(i.setInterval)})},"64e5":function(t,e,r){"use strict";var n=r("d039"),i=r("0ccb").start,a=Math.abs,o=Date.prototype,s=o.getTime,c=o.toISOString;t.exports=n((function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-50000000000001))}))||!n((function(){c.call(new Date(NaN))}))?function(){if(!isFinite(s.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),r=t.getUTCMilliseconds(),n=e<0?"-":e>9999?"+":"";return n+i(a(e),n?6:4,0)+"-"+i(t.getUTCMonth()+1,2,0)+"-"+i(t.getUTCDate(),2,0)+"T"+i(t.getUTCHours(),2,0)+":"+i(t.getUTCMinutes(),2,0)+":"+i(t.getUTCSeconds(),2,0)+"."+i(r,3,0)+"Z"}:c},6852:function(t,e,r){"use strict";var n=r("7287"),i=r.n(n);e["default"]=i.a},7287:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-tw":{"title":"名醫會館"},"zh-cn":{"title":"名医会馆"}}'),delete t.options._Ctor}},"7f83":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"doc-list"},[t.commentFilter||t.judgeFilter?t._e():r("van-nav-bar",{attrs:{title:"我的預約紀錄"}}),t.commentFilter?r("van-nav-bar",{attrs:{title:"留言紀錄","left-text":"返回","left-arrow":""},on:{"click-left":function(e){t.commentFilter=!1}}}):t._e(),t.judgeFilter?r("van-nav-bar",{attrs:{title:"診斷紀錄","left-text":"返回","left-arrow":""},on:{"click-left":function(e){t.judgeFilter=!1}}}):t._e(),r("van-overlay",{staticStyle:{"text-align":"center"},attrs:{show:t.loadingApi}},[r("van-loading",{attrs:{type:"spinner"}})],1),t._l(t.myOrders,(function(e,n){return r("main",{directives:[{name:"show",rawName:"v-show",value:e.details,expression:"item.details"}],key:n,staticClass:"doc-item mt-1",on:{click:function(r){return t.viewDetail(e)}}},[e.details?r("van-card",{attrs:{price:e.details.price,currency:"NT",desc:t.getDesc(e),title:t.getTitle(e),thumb:t.getImgPath(e,n)},scopedSlots:t._u([{key:"tags",fn:function(){return[r("div",{staticClass:"my-tags-grid"},[r("div",{staticStyle:{color:"var(--bs-blue)"}},[t._v(t._s(t.$formatStatus(e.orderStatus)))]),!e.judge||t.commentFilter||t.judgeFilter?t._e():r("div",{staticClass:"click-4-more",on:{click:function(r){return r.stopPropagation(),t.showJudge(e)}}},[t._v("按我看診斷紀錄")]),r("nav",{staticClass:"clip-judge",class:t.judgeFilter?"show-detail-judge":""},[r("div",{staticClass:"judge-content px-2"},[e.report?r("van-cell-group",{staticClass:"mb-2"},[r("van-field",{attrs:{label:"病患姓名",readonly:"",value:e.report.name}}),r("van-field",{attrs:{label:"身份證號",readonly:"",value:e.report.personId}})],1):t._e(),t._v(" "+t._s(e.judge)+" ")],1)])])]},proxy:!0},{key:"footer",fn:function(){return[r("div",{staticClass:"my-tags-grid3"},[r("div"),r("van-badge",{attrs:{content:t.getMyCount(e.message),color:"rgb(25, 137, 250)"}},[r("div",{staticClass:"my-msg"},[t._v("我的留言")])]),r("van-badge",{attrs:{content:t.getDoctCount(e.message),color:"rgb(25, 137, 250)"}},[r("div",{staticClass:"my-doc-msg"},[t._v("醫生留言")])])],1)]},proxy:!0}],null,!0)}):t._e()],1)})),t.commentFilter?r("nav",{staticClass:"mt-1",staticStyle:{color:"white","font-size":"14px"}},t._l(t.orderMsgs,(function(e,n){return r("div",{key:n,staticClass:"comment-dtc px-2 py-2",style:e.docComment?"background:#1f7cd3;":"background:#f3d6d2;color:black;"},[r("div",{staticClass:"mb-1 msg-line-grid"},[t.getMsgStatus(e).includes("未讀取")?r("van-icon",{attrs:{name:"pending-payment",size:"20px"}}):t._e(),t.getMsgStatus(e).includes("已讀取")?r("van-icon",{attrs:{name:"certificate",color:"black",size:"20px"}}):t._e(),r("span",[t._v(t._s(t.getMsgStatus(e)))]),r("span",[t._v(t._s(t.$twDate(e.commentAt,"@")))]),!e.read&&e.docComment?r("span",{staticClass:"mark-as-read",on:{click:function(r){return r.stopPropagation(),t.updateReadStatus(e)}}},[t._v("註記已讀")]):t._e()],1),r("div",[t._v(t._s(e.docComment?"醫生說":"我留言")+": "+t._s(e.docComment||e.userComment))])])})),0):t._e(),t.commentFilter?r("footer",[r("van-field",{attrs:{autofocus:"true",rows:"2",type:"textarea",placeholder:"請輸入留言..."},model:{value:t.myMsg,callback:function(e){t.myMsg=e},expression:"myMsg"}}),r("div",{staticClass:"my-tags-grid"},[r("van-button",{staticClass:"ml-2",attrs:{type:"primary",size:"small",disabled:t.loadingApi||!t.myMsg},on:{click:function(e){e.stopPropagation(),t.loadingApi=!0,t.addComment(t.myMsg)}}},[t._v("新增留言")])],1)],1):t._e()],2)},i=[],a=(r("a4d3"),r("e01a"),r("4de4"),r("7db0"),r("4160"),r("a15b"),r("d81d"),r("26e9"),r("accc"),r("0d03"),r("b0c0"),r("d3b7"),r("6062"),r("3ca3"),r("159b"),r("ddb0"),r("4795"),r("5530")),o=(r("96cf"),r("1da1")),s=r("2909"),c=r("2b0e"),u=r("3aec"),d={name:"login",data:function(){return{judgeFilter:"",showClipPath:!1,docs:[],skip:0,orders:[],commentFilter:"",showLeavelMsg:!1,myMsg:"",price:"",loadingApi:!1}},computed:{myOrders:function(){var t=this;return this.commentFilter||this.judgeFilter?this.commentFilter?this.orders.filter((function(e){return e.doctorPhone==t.commentFilter})):this.judgeFilter?this.orders.filter((function(e){return e.doctorPhone==t.judgeFilter})):void 0:Object(s["a"])(this.orders)},orderMsgs:function(){return Object(s["a"])(this.myOrders[0].message).reverse()}},methods:{showJudge:function(t){t.judge&&(this.showClipPath=!0,this.judgeFilter=t.doctorPhone)},getMyCount:function(t){return t.filter((function(t){return t.userComment})).length},getDoctCount:function(t){return t.filter((function(t){return t.docComment})).length},updateReadStatus:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.loadingApi=!0,t.read=!0,r.next=4,u["a"].updateOrder(e.myOrders[0]);case 4:return r.next=6,e.getOrderHistoryList();case 6:e.myMsg="",e.loadingApi=!1;case 8:case"end":return r.stop()}}),r)})))()},getMsgStatus:function(t){var e=t.userComment&&t.read?"醫生已讀取":"";return e||(e=t.userComment&&!t.read?"醫生未讀取":""),e||(e=t.docComment&&!t.read?"您未讀取":""),e||(e=t.docComment&&t.read?"您已讀取":""),e},addComment:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function r(){var n,i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.loadingApi=!0,n={docComment:"",commentAt:(new Date).toISOString(),rating:0,userComment:t,read:!1},e.myOrders[0].message||(e.myOrders[0].message=[]),e.myOrders[0].message.unshift(n),r.next=6,u["a"].updateOrder(e.myOrders[0]);case 6:i=Object(a["a"])({},e.myOrders[0]),c["a"].$toast.success("新增留言成功"),setTimeout((function(){return e.getData()}),100),e.orders=Object(s["a"])(e.orders),e.loadingApi=!1,o={senderPhone:window.lineId,receivePhone:i.doctorPhone,orderId:i.id,type:"msgAdd"},u["a"].sendPushMsg(o);case 13:case"end":return r.stop()}}),r)})))()},viewComment:function(t){this.judgeFilter=!1,this.commentFilter=t.doctorPhone},viewDetail:function(t){this.judgeFilter=!1,this.commentFilter=t.doctorPhone},getDesc:function(t){return"專長: "+t.details.description},getTitle:function(t){return t.details.name+" | "+t.details.hospital+" | "+t.details.title+" @ "+this.$twDate(t.orderDate)+" 預約成功"},getImgPath:function(t,e){return u["c"].imgPrefix+t.details.cover.url},getOrderHistoryList:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r,n,i,a,o,c,d;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.orders=[],r="orderPhoneNum_eq="+window.lineId,r+="&_sort=orderDate:desc",e.prev=3,t.loadingApi=!0,e.next=7,u["a"].getOrders(r);case 7:if(n=e.sent,i=n.count,a=n.items,i){e.next=12;break}return e.abrupt("return");case 12:return o=new Set(a.map((function(t){return"phone_in="+t.doctorPhone}))),r=Object(s["a"])(o).join("&"),e.next=16,u["a"].getDoctors(r);case 16:c=e.sent,d=c.items,d.forEach((function(t){return a.find((function(e){return e.doctorPhone==t.phone})).details=t})),t.orders=a,e.next=25;break;case 22:e.prev=22,e.t0=e["catch"](3),alert("error getOrderHistoryList: "+e.t0);case 25:return e.prev=25,t.loadingApi=!1,e.finish(25);case 28:case"end":return e.stop()}}),e,null,[[3,22,25,28]])})))()}},mounted:function(){this.getOrderHistoryList()},watch:{}},l=d,m=(r("24ef"),r("2877")),g=r("6852"),f=Object(m["a"])(l,n,i,!1,null,"11e519c0",null);"function"===typeof g["default"]&&Object(g["default"])(f);e["default"]=f.exports},a15b:function(t,e,r){"use strict";var n=r("23e7"),i=r("44ad"),a=r("fc6a"),o=r("a640"),s=[].join,c=i!=Object,u=o("join",",");n({target:"Array",proto:!0,forced:c||!u},{join:function(t){return s.call(a(this),void 0===t?",":t)}})},accc:function(t,e,r){var n=r("23e7"),i=r("64e5");n({target:"Date",proto:!0,forced:Date.prototype.toISOString!==i},{toISOString:i})},ae32:function(t,e,r){}}]);
//# sourceMappingURL=chunk-d5aaf2e4.bc303887.js.map