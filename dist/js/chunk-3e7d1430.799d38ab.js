(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e7d1430"],{"0ccb":function(t,e,n){var r=n("50c4"),a=n("1148"),o=n("1d80"),s=Math.ceil,i=function(t){return function(e,n,i){var c,l,d=String(o(e)),u=d.length,p=void 0===i?" ":String(i),v=r(n);return v<=u||""==p?d:(c=v-u,l=a.call(p,s(c/p.length)),l.length>c&&(l=l.slice(0,c)),t?d+l:l+d)}};t.exports={start:i(!1),end:i(!0)}},"64e5":function(t,e,n){"use strict";var r=n("d039"),a=n("0ccb").start,o=Math.abs,s=Date.prototype,i=s.getTime,c=s.toISOString;t.exports=r((function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-50000000000001))}))||!r((function(){c.call(new Date(NaN))}))?function(){if(!isFinite(i.call(this)))throw RangeError("Invalid time value");var t=this,e=t.getUTCFullYear(),n=t.getUTCMilliseconds(),r=e<0?"-":e>9999?"+":"";return r+a(o(e),r?6:4,0)+"-"+a(t.getUTCMonth()+1,2,0)+"-"+a(t.getUTCDate(),2,0)+"T"+a(t.getUTCHours(),2,0)+":"+a(t.getUTCMinutes(),2,0)+":"+a(t.getUTCSeconds(),2,0)+"."+a(n,3,0)+"Z"}:c},9125:function(t,e,n){"use strict";n("e8a9")},accc:function(t,e,n){var r=n("23e7"),a=n("64e5");r({target:"Date",proto:!0,forced:Date.prototype.toISOString!==a},{toISOString:a})},c71e:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"dtc-detail"},[n("van-nav-bar",{attrs:{title:"線上預約","left-text":"返回","left-arrow":""},on:{"click-left":t.onClickLeft}}),n("van-overlay",{staticStyle:{"z-index":"9999","text-align":"center"},attrs:{show:t.loadingApi}},[n("van-loading",{attrs:{type:"spinner"}})],1),n("main",{staticClass:"dtc-detail__content"},[n("img",{staticClass:"left",attrs:{src:t.docImg,width:"80",height:"80"}}),n("div",{staticClass:"right mt-2"},[n("h4",[t._v(" "+t._s(t.doctor.name)),n("span",{staticStyle:{"font-size":"0.9rem",display:"inline-block","margin-left":"10px",color:"var(--bs-dark-gray)"}},[t._v(t._s(t.doctor.title))])]),n("p",{staticStyle:{"font-size":"13px"}},[t._v(t._s(t.doctor.hospital||t.doctor.position&&t.doctor.position.length&&t.doctor.position[0].name))]),n("p",[t._v("台灣台北市")])])]),n("main",{staticClass:"px-2"},[n("p",{staticStyle:{"font-size":"14px"}},[t._v("擅長: "+t._s(t.doctor.description))])]),n("nav",{staticClass:"how2 mt-2"},[n("main",{staticClass:"how2-title"},[n("van-icon",{attrs:{name:"vip-card",color:"var(--bs-orange)",size:"60px"}}),n("h4",{staticClass:"pt-3"},[t._v("線上諮詢")]),n("div"),"finish"!=t.doctor.status?n("van-button",{staticStyle:{transform:"translateY(6px)"},attrs:{round:"",color:"var(--bs-orange)"},on:{click:function(e){return t.book(t.doctor)}}},[t._v("訂閱服務"+t._s(t.doctor.price)+"元")]):t._e(),n("nav",{staticClass:"how2-subtitle mt-2"},[n("div",[n("van-icon",{attrs:{name:"medal",size:"20px",color:"var(--orange)"}}),n("p",[t._v("醫生真實")])],1),n("div",[n("van-icon",{attrs:{name:"coupon",size:"20px",color:"var(--orange)"}}),n("p",[t._v("未接診隨時退")])],1),n("div",[n("van-icon",{attrs:{name:"service",size:"20px",color:"var(--orange)"}}),n("p",[t._v("不滿意可申訴退款")])],1)]),t._m(0)],1)]),n("h4",{staticClass:"mt-4",staticStyle:{transform:"translateX(10px)"}},[t._v("服務流程")]),n("footer",{staticClass:"detail-footer pb-5 pr-1 mb-5"},[t._m(1),n("van-icon",{attrs:{name:"arrow"}}),t._m(2),n("van-icon",{attrs:{name:"arrow"}}),t._m(3),n("van-icon",{attrs:{name:"arrow"}}),t._m(4)],1)],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"mt-2 how2-footer"},[n("p",[t._v("1. 用戶透過實體寄件方式,寄出病史。")]),n("p",[t._v("2. 醫生問診不限交流次數。")]),n("p",[t._v("3. 醫生給出明確建議後問診結束。")]),n("p",[t._v("4. 醫生接診後問診最長開啟48小時, 預期自動結束。")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{"data-msg":"線上預約"}},[n("img",{attrs:{src:"card.svg"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{"data-msg":"病情描述"}},[n("img",{attrs:{src:"note.svg"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{"data-msg":"醫生回覆"}},[n("img",{attrs:{src:"send.svg"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{attrs:{"data-msg":"問診結束"}},[n("img",{attrs:{src:"medical-personnel-doctor.svg",width:"32",height:"32"}})])}],o=(n("accc"),n("0d03"),n("96cf"),n("1da1")),s=n("3aec"),i={name:"docdetails",data:function(){return{doctor:s["c"].selectedDoctor,loadingApi:!1}},computed:{docImg:function(){return s["c"].imgPrefix+this.doctor.cover.url}},components:{},methods:{book:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(sessionStorage.orderedDocPhone=t.phone,sessionStorage.token){n.next=4;break}return e.$router.push("/login?callback=doclist"),n.abrupt("return");case 4:return r={orderPhoneNum:sessionStorage.phone,paidAmount:t.price,status:"waiting",orderDate:(new Date).toISOString(),doctorPhone:t.phone,isCancer:t.cid<s["c"].MIN_NON_CANCER_NUM,hardCopyReceived:!1,copySendBack:!1,docHasCopy:!1,comment:t.cid<s["c"].MIN_NON_CANCER_NUM?[{docComment:"需要你的癌症報告,請你用郵件寄出",commentAt:(new Date).toISOString(),rating:0,userComment:""}]:[]},n.prev=5,e.loadingApi=!0,n.next=9,s["a"].addOrder(r);case 9:Vue.$toast.success("你已預約成功"),n.next=15;break;case 12:n.prev=12,n.t0=n["catch"](5),Vue.$toast.error("order fail");case 15:return n.prev=15,sessionStorage.orderedDocPhone="",e.loadingApi=!1,n.finish(15);case 19:case"end":return n.stop()}}),n,null,[[5,12,15,19]])})))()},onClickLeft:function(){this.$router.go(-1)}},mounted:function(){}},c=i,l=(n("9125"),n("2877")),d=Object(l["a"])(c,r,a,!1,null,"70d96261",null);e["default"]=d.exports},e8a9:function(t,e,n){}}]);
//# sourceMappingURL=chunk-3e7d1430.799d38ab.js.map