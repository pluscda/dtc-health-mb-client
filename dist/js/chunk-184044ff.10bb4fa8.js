(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-184044ff"],{"0355":function(t,e,n){"use strict";var i=n("7135"),a=n.n(i);e["default"]=a.a},1799:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"dtc-upload"},[n("van-uploader",{attrs:{multiple:"","max-count":12,accept:"*","after-read":t.afterRead},model:{value:t.fileList,callback:function(e){t.fileList=e},expression:"fileList"}}),n("b-button",{on:{click:t.upload}},[t._v("Submit")])],1)},a=[],o=(n("b0c0"),n("96cf"),n("1da1")),u=(n("3aec"),{name:"login",data:function(){return{name:"",url:"",uid:"5fd44ee2595e890fb41b11a9",file:"",fileList:[]}},methods:{afterRead:function(t){alert(this.fileList.length),console.log(this.fileList)},upload:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={name:t.name,uid:t.uid},i=JSON.stringify(n),a=new FormData,a.append("data",i),a.append("files.url",t.file,t.name),e.next=7,axios.post("health-files",a);case 7:case"end":return e.stop()}}),e)})))()},updateFile:function(t){this.file=t.target.files[0],this.name=this.file.name}},mounted:function(){},watch:{}}),c=u,s=(n("6d30"),n("2877")),l=n("0355"),f=Object(s["a"])(c,i,a,!1,null,"74f4be2c",null);"function"===typeof l["default"]&&Object(l["default"])(f);e["default"]=f.exports},"6d30":function(t,e,n){"use strict";n("cf09")},7135:function(t,e){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"zh-tw":{"title":"名醫會館"},"zh-cn":{"title":"名医会馆"}}'),delete t.options._Ctor}},cf09:function(t,e,n){}}]);
//# sourceMappingURL=chunk-184044ff.10bb4fa8.js.map