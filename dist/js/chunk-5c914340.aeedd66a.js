(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5c914340"],{"0ccb":function(e,t,r){var n=r("50c4"),o=r("1148"),i=r("1d80"),a=Math.ceil,s=function(e){return function(t,r,s){var c,l,u=String(i(t)),f=u.length,d=void 0===s?" ":String(s),p=n(r);return p<=f||""==d?u:(c=p-f,l=o.call(d,a(c/d.length)),l.length>c&&(l=l.slice(0,c)),e?u+l:l+u)}};e.exports={start:s(!1),end:s(!0)}},"1e9d":function(e,t,r){},"26e9":function(e,t,r){"use strict";var n=r("23e7"),o=r("e8b5"),i=[].reverse,a=[1,2];n({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return o(this)&&(this.length=this.length),i.call(this)}})},4127:function(e,t,r){"use strict";var n=r("d233"),o=r("b313"),i=Object.prototype.hasOwnProperty,a={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},s=Array.isArray,c=Array.prototype.push,l=function(e,t){c.apply(e,s(t)?t:[t])},u=Date.prototype.toISOString,f=o["default"],d={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,format:f,formatter:o.formatters[f],indices:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},p=function(e){return"string"===typeof e||"number"===typeof e||"boolean"===typeof e||"symbol"===typeof e||"bigint"===typeof e},y=function e(t,r,o,i,a,c,u,f,y,m,g,h,b){var v=t;if("function"===typeof u?v=u(r,v):v instanceof Date?v=m(v):"comma"===o&&s(v)&&(v=n.maybeMap(v,(function(e){return e instanceof Date?m(e):e})).join(",")),null===v){if(i)return c&&!h?c(r,d.encoder,b,"key"):r;v=""}if(p(v)||n.isBuffer(v)){if(c){var O=h?r:c(r,d.encoder,b,"key");return[g(O)+"="+g(c(v,d.encoder,b,"value"))]}return[g(r)+"="+g(String(v))]}var j,w=[];if("undefined"===typeof v)return w;if(s(u))j=u;else{var C=Object.keys(v);j=f?C.sort(f):C}for(var x=0;x<j.length;++x){var S=j[x],D=v[S];if(!a||null!==D){var k=s(v)?"function"===typeof o?o(r,S):r:r+(y?"."+S:"["+S+"]");l(w,e(D,k,o,i,a,c,u,f,y,m,g,h,b))}}return w},m=function(e){if(!e)return d;if(null!==e.encoder&&void 0!==e.encoder&&"function"!==typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||d.charset;if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o["default"];if("undefined"!==typeof e.format){if(!i.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],a=d.filter;return("function"===typeof e.filter||s(e.filter))&&(a=e.filter),{addQueryPrefix:"boolean"===typeof e.addQueryPrefix?e.addQueryPrefix:d.addQueryPrefix,allowDots:"undefined"===typeof e.allowDots?d.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:d.charsetSentinel,delimiter:"undefined"===typeof e.delimiter?d.delimiter:e.delimiter,encode:"boolean"===typeof e.encode?e.encode:d.encode,encoder:"function"===typeof e.encoder?e.encoder:d.encoder,encodeValuesOnly:"boolean"===typeof e.encodeValuesOnly?e.encodeValuesOnly:d.encodeValuesOnly,filter:a,formatter:n,serializeDate:"function"===typeof e.serializeDate?e.serializeDate:d.serializeDate,skipNulls:"boolean"===typeof e.skipNulls?e.skipNulls:d.skipNulls,sort:"function"===typeof e.sort?e.sort:null,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:d.strictNullHandling}};e.exports=function(e,t){var r,n,o=e,i=m(t);"function"===typeof i.filter?(n=i.filter,o=n("",o)):s(i.filter)&&(n=i.filter,r=n);var c,u=[];if("object"!==typeof o||null===o)return"";c=t&&t.arrayFormat in a?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var f=a[c];r||(r=Object.keys(o)),i.sort&&r.sort(i.sort);for(var d=0;d<r.length;++d){var p=r[d];i.skipNulls&&null===o[p]||l(u,y(o[p],p,f,i.strictNullHandling,i.skipNulls,i.encode?i.encoder:null,i.filter,i.sort,i.allowDots,i.serializeDate,i.formatter,i.encodeValuesOnly,i.charset))}var g=u.join(i.delimiter),h=!0===i.addQueryPrefix?"?":"";return i.charsetSentinel&&("iso-8859-1"===i.charset?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),g.length>0?h+g:""}},4328:function(e,t,r){"use strict";var n=r("4127"),o=r("9e6a"),i=r("b313");e.exports={formats:i,parse:o,stringify:n}},"64e5":function(e,t,r){"use strict";var n=r("d039"),o=r("0ccb").start,i=Math.abs,a=Date.prototype,s=a.getTime,c=a.toISOString;e.exports=n((function(){return"0385-07-25T07:06:39.999Z"!=c.call(new Date(-50000000000001))}))||!n((function(){c.call(new Date(NaN))}))?function(){if(!isFinite(s.call(this)))throw RangeError("Invalid time value");var e=this,t=e.getUTCFullYear(),r=e.getUTCMilliseconds(),n=t<0?"-":t>9999?"+":"";return n+o(i(t),n?6:4,0)+"-"+o(e.getUTCMonth()+1,2,0)+"-"+o(e.getUTCDate(),2,0)+"T"+o(e.getUTCHours(),2,0)+":"+o(e.getUTCMinutes(),2,0)+":"+o(e.getUTCSeconds(),2,0)+"."+o(r,3,0)+"Z"}:c},"9e6a":function(e,t,r){"use strict";var n=r("d233"),o=Object.prototype.hasOwnProperty,i=Array.isArray,a={allowDots:!1,allowPrototypes:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},s=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},c=function(e,t){return e&&"string"===typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},l="utf8=%26%2310003%3B",u="utf8=%E2%9C%93",f=function(e,t){var r,f={},d=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,p=t.parameterLimit===1/0?void 0:t.parameterLimit,y=d.split(t.delimiter,p),m=-1,g=t.charset;if(t.charsetSentinel)for(r=0;r<y.length;++r)0===y[r].indexOf("utf8=")&&(y[r]===u?g="utf-8":y[r]===l&&(g="iso-8859-1"),m=r,r=y.length);for(r=0;r<y.length;++r)if(r!==m){var h,b,v=y[r],O=v.indexOf("]="),j=-1===O?v.indexOf("="):O+1;-1===j?(h=t.decoder(v,a.decoder,g,"key"),b=t.strictNullHandling?null:""):(h=t.decoder(v.slice(0,j),a.decoder,g,"key"),b=n.maybeMap(c(v.slice(j+1),t),(function(e){return t.decoder(e,a.decoder,g,"value")}))),b&&t.interpretNumericEntities&&"iso-8859-1"===g&&(b=s(b)),v.indexOf("[]=")>-1&&(b=i(b)?[b]:b),o.call(f,h)?f[h]=n.combine(f[h],b):f[h]=b}return f},d=function(e,t,r,n){for(var o=n?t:c(t,r),i=e.length-1;i>=0;--i){var a,s=e[i];if("[]"===s&&r.parseArrays)a=[].concat(o);else{a=r.plainObjects?Object.create(null):{};var l="["===s.charAt(0)&&"]"===s.charAt(s.length-1)?s.slice(1,-1):s,u=parseInt(l,10);r.parseArrays||""!==l?!isNaN(u)&&s!==l&&String(u)===l&&u>=0&&r.parseArrays&&u<=r.arrayLimit?(a=[],a[u]=o):a[l]=o:a={0:o}}o=a}return o},p=function(e,t,r,n){if(e){var i=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,c=r.depth>0&&a.exec(i),l=c?i.slice(0,c.index):i,u=[];if(l){if(!r.plainObjects&&o.call(Object.prototype,l)&&!r.allowPrototypes)return;u.push(l)}var f=0;while(r.depth>0&&null!==(c=s.exec(i))&&f<r.depth){if(f+=1,!r.plainObjects&&o.call(Object.prototype,c[1].slice(1,-1))&&!r.allowPrototypes)return;u.push(c[1])}return c&&u.push("["+i.slice(c.index)+"]"),d(u,t,r,n)}},y=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!==typeof e.decoder)throw new TypeError("Decoder has to be a function.");if("undefined"!==typeof e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t="undefined"===typeof e.charset?a.charset:e.charset;return{allowDots:"undefined"===typeof e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"===typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,arrayLimit:"number"===typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"===typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"===typeof e.comma?e.comma:a.comma,decoder:"function"===typeof e.decoder?e.decoder:a.decoder,delimiter:"string"===typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"===typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"===typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"===typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"===typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"===typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}};e.exports=function(e,t){var r=y(t);if(""===e||null===e||"undefined"===typeof e)return r.plainObjects?Object.create(null):{};for(var o="string"===typeof e?f(e,r):e,i=r.plainObjects?Object.create(null):{},a=Object.keys(o),s=0;s<a.length;++s){var c=a[s],l=p(c,o[c],r,"string"===typeof e);i=n.merge(i,l,r)}return n.compact(i)}},a15b:function(e,t,r){"use strict";var n=r("23e7"),o=r("44ad"),i=r("fc6a"),a=r("a640"),s=[].join,c=o!=Object,l=a("join",",");n({target:"Array",proto:!0,forced:c||!l},{join:function(e){return s.call(i(this),void 0===e?",":e)}})},accc:function(e,t,r){var n=r("23e7"),o=r("64e5");n({target:"Date",proto:!0,forced:Date.prototype.toISOString!==o},{toISOString:o})},b313:function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g,i=r("d233"),a={RFC1738:"RFC1738",RFC3986:"RFC3986"};e.exports=i.assign({default:a.RFC3986,formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return String(e)}}},a)},c255:function(e,t,r){"use strict";r("1e9d")},c2dd:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"doc-list"},[r("van-nav-bar",{attrs:{title:"線上看診紀錄"}}),e._l(e.orders,(function(t,n){return r("main",{key:n,staticClass:"doc-item mt-1"},[t.details?r("van-card",{attrs:{price:t.details.price,currency:"NT",desc:e.getDesc(t),title:e.getTitle(t),thumb:e.getImgPath(t,n)},scopedSlots:e._u([{key:"tags",fn:function(){return[r("div",{staticClass:"my-tags-grid"},[r("div",{staticStyle:{color:"var(--bs-blue)"}},[e._v(e._s(e.$formatStatus(t.orderStatus)))])])]},proxy:!0},{key:"footer",fn:function(){return[r("div",{staticClass:"my-tags-grid3"},[r("div"),r("van-badge",{attrs:{content:e.getMyCount(t.message),color:"rgb(25, 137, 250)"}},[r("div",{staticClass:"my-msg"},[e._v("我的留言")])]),r("van-badge",{attrs:{content:e.getDoctCount(t.message),color:"rgb(25, 137, 250)"}},[r("div",{staticClass:"my-doc-msg"},[e._v("醫生留言")])])],1)]},proxy:!0}],null,!0)}):e._e(),t.judge?r("nav",{staticClass:"mt-1",staticStyle:{color:"white","font-size":"14px"}},[r("h5",{staticClass:"pl-1",staticStyle:{color:"black"}},[e._v("醫師診斷報告")]),r("div",{staticClass:"px-2"},[t.report?r("van-cell-group",{staticClass:"mb-2"},[r("van-field",{attrs:{label:"病患姓名",readonly:"",value:t.report.name}}),r("van-field",{attrs:{label:"身份證號",readonly:"",value:t.report.personId}})],1):e._e(),r("div",{staticStyle:{color:"black","font-size":"16px"}},[e._v(e._s(t.judge))])],1)]):e._e()],1)})),r("nav",{staticClass:"mt-1",staticStyle:{color:"white","font-size":"14px"}},[r("h5",{staticClass:"pl-1",staticStyle:{color:"black"}},[e._v("留言區")]),e._l(e.orderMsgs,(function(t,n){return r("div",{key:n,staticClass:"comment-dtc px-2 py-2",style:t.docComment?"background:#1f7cd3;":"background:#f3d6d2;color:black;"},[r("div",{staticClass:"mb-1 msg-line-grid"},[r("span",[e._v(e._s(e.$twDate(t.commentAt,"@")))])]),r("div",[e._v(e._s(t.docComment?"醫生說":"我留言")+": "+e._s(t.docComment||t.userComment))])])}))],2),r("footer",[r("van-field",{attrs:{autofocus:"true",rows:"2",type:"textarea",placeholder:"請輸入留言..."},model:{value:e.myMsg,callback:function(t){e.myMsg=t},expression:"myMsg"}}),r("div",{staticClass:"my-tags-grid"},[r("van-button",{staticClass:"ml-2",attrs:{type:"primary",size:"small",disabled:e.loadingApi||!e.myMsg},on:{click:function(t){return t.stopPropagation(),e.addComment(e.myMsg)}}},[e._v("新增留言")])],1)],1)],2)},o=[],i=(r("a4d3"),r("e01a"),r("99af"),r("4de4"),r("7db0"),r("4160"),r("a15b"),r("d81d"),r("26e9"),r("accc"),r("0d03"),r("b0c0"),r("d3b7"),r("ac1f"),r("6062"),r("3ca3"),r("1276"),r("159b"),r("ddb0"),r("2909")),a=(r("96cf"),r("1da1")),s=r("2b0e"),c=r("3aec"),l=r("4328"),u=r.n(l),f={name:"mymsgboard",data:function(){return{orderMsgs:[],myMsg:"",loadingApi:!0,orders:[]}},computed:{},methods:{getMyCount:function(e){return e.filter((function(e){return e.userComment})).length},getDoctCount:function(e){return e.filter((function(e){return e.docComment})).length},getDesc:function(e){return"專長: "+e.details.description},getTitle:function(e){return e.details.name+" | "+e.details.hospital+" | "+e.details.title+" @ "+this.$twDate(e.orderDate)+" 預約成功"},getImgPath:function(e,t){return c["c"].imgPrefix+e.details.cover.url},addComment:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,o,a,l,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n={docComment:"",commentAt:(new Date).toISOString(),rating:0,userComment:e,read:!1},t.orders[0].message||(t.orders[0].message=[]),t.orders[0].message.unshift(n),r.next=5,c["a"].updateOrder(t.orders[0]);case 5:s["a"].$toast.success("新增留言成功"),t.orders=Object(i["a"])(t.orders),o=c["c"].lineUrl+"orderid="+t.orders[0].id,a=t.orders[0].lineClientDisplayName?t.orders[0].lineClientDisplayName:c["c"].lineProfile.displayName,!a&&(a="DTC Tester"),l="您的客戶: ".concat(a,"\n新增留言:\n").concat(e,"\n\n").concat(o),u=t.orders[0].doctorPhone.length>10?t.orders[0].doctorPhone:"U60dea79b6fcd77b9c9e3eeb21fcce0a1",c["a"].lineMsg({id:u,msg:l}),t.myMsg="",t.orderMsgs=Object(i["a"])(t.orders[0].message).reverse();case 15:case"end":return r.stop()}}),r)})))()},getOrderHistoryList:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var r,n,o,a,s,l,f,d,p,y;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.orders=[],r=location.href.split("?")[1],n=u.a.parse(r),o=n.id,a="id="+o,t.prev=4,e.loadingApi=!0,t.next=8,c["a"].getOrders(a);case 8:if(s=t.sent,l=s.count,f=s.items,l){t.next=13;break}return t.abrupt("return");case 13:return d=new Set(f.map((function(e){return"phone_in="+e.doctorPhone}))),a=Object(i["a"])(d).join("&"),t.next=17,c["a"].getDoctors(a);case 17:p=t.sent,y=p.items,y.forEach((function(e){return f.find((function(t){return t.doctorPhone==e.phone})).details=e})),e.orders=f,e.orderMsgs=Object(i["a"])(e.orders[0].message).reverse(),t.next=27;break;case 24:t.prev=24,t.t0=t["catch"](4),alert("error getOrderHistoryList: "+t.t0);case 27:return t.prev=27,e.loadingApi=!1,t.finish(27);case 30:case"end":return t.stop()}}),t,null,[[4,24,27,30]])})))()}},mounted:function(){this.getOrderHistoryList()},watch:{}},d=f,p=(r("c255"),r("2877")),y=Object(p["a"])(d,n,o,!1,null,"5994c052",null);t["default"]=y.exports},d233:function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=Array.isArray,i=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),a=function(e){while(e.length>1){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],i=0;i<r.length;++i)"undefined"!==typeof r[i]&&n.push(r[i]);t.obj[t.prop]=n}}},s=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)"undefined"!==typeof e[n]&&(r[n]=e[n]);return r},c=function e(t,r,i){if(!r)return t;if("object"!==typeof r){if(o(t))t.push(r);else{if(!t||"object"!==typeof t)return[t,r];(i&&(i.plainObjects||i.allowPrototypes)||!n.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!==typeof t)return[t].concat(r);var a=t;return o(t)&&!o(r)&&(a=s(t,i)),o(t)&&o(r)?(r.forEach((function(r,o){if(n.call(t,o)){var a=t[o];a&&"object"===typeof a&&r&&"object"===typeof r?t[o]=e(a,r,i):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var a=r[o];return n.call(t,o)?t[o]=e(t[o],a,i):t[o]=a,t}),a)},l=function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},u=function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(o){return n}},f=function(e,t,r){if(0===e.length)return e;var n=e;if("symbol"===typeof e?n=Symbol.prototype.toString.call(e):"string"!==typeof e&&(n=String(e)),"iso-8859-1"===r)return escape(n).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var o="",a=0;a<n.length;++a){var s=n.charCodeAt(a);45===s||46===s||95===s||126===s||s>=48&&s<=57||s>=65&&s<=90||s>=97&&s<=122?o+=n.charAt(a):s<128?o+=i[s]:s<2048?o+=i[192|s>>6]+i[128|63&s]:s<55296||s>=57344?o+=i[224|s>>12]+i[128|s>>6&63]+i[128|63&s]:(a+=1,s=65536+((1023&s)<<10|1023&n.charCodeAt(a)),o+=i[240|s>>18]+i[128|s>>12&63]+i[128|s>>6&63]+i[128|63&s])}return o},d=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],i=o.obj[o.prop],s=Object.keys(i),c=0;c<s.length;++c){var l=s[c],u=i[l];"object"===typeof u&&null!==u&&-1===r.indexOf(u)&&(t.push({obj:i,prop:l}),r.push(u))}return a(t),e},p=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},y=function(e){return!(!e||"object"!==typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},m=function(e,t){return[].concat(e,t)},g=function(e,t){if(o(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)};e.exports={arrayToObject:s,assign:l,combine:m,compact:d,decode:u,encode:f,isBuffer:y,isRegExp:p,maybeMap:g,merge:c}}}]);
//# sourceMappingURL=chunk-5c914340.aeedd66a.js.map