(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4f509188"],{"3b51":function(t,e,n){},"6ab3":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showMap?n("l-map",{ref:"myMapRef",staticStyle:{"min-height":"calc(100vh - 51px)","z-index":"1",position:"relative"},attrs:{zoom:t.zoom,center:t.center,options:t.mapOptions},on:{"update:center":t.centerUpdate,"update:zoom":t.zoomUpdate},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[n("l-tile-layer",{attrs:{url:t.url,attribution2:t.attribution}}),n("l-control",{attrs:{position:"bottomright"}},[n("div",{staticClass:"dtc-home",on:{click:t.goHome}},[t._v("HOME")])]),t._l(t.features.slice(0,1),(function(e,o){return n("l-marker",{key:o,attrs:{"lat-lng":e.latLng,icon:t.houseMarker},on:{click:function(n){return t.clickItem(e)}}},[n("l-tooltip",{attrs:{options:{permanent:!0,interactive:!1,direction:"bottom"}}},[t._v(t._s(e.name))])],1)})),n("link",{attrs:{rel:"stylesheet",async:"",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",integrity:"sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==",crossorigin:"anonymous"}})],2):t._e()},i=[],r=(n("4de4"),n("7db0"),n("4160"),n("b0c0"),n("159b"),n("96cf"),n("1da1")),s=n("2909"),a=n("ade3"),c=n("3aec"),p=n("e11e"),u=n("f81f"),l=n("2699"),f=n("a40a"),d=n("4e2b"),h=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},m=function(t,e,n,o){var i=function(o){var i="set"+h(o),r=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&t[i]?t.$watch(o,(function(e,n){t[i](e,n)}),{deep:r}):"setOptions"===i?t.$watch(o,(function(t,n){Object(p["setOptions"])(e,t)}),{deep:r}):e[i]&&t.$watch(o,(function(t,n){e[i](t)}),{deep:r})};for(var r in n)i(r)},b=function(t){var e={};for(var n in t){var o=t[n];null!==o&&void 0!==o&&(e[n]=o)}return e},v=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var o=b(n);t=b(t);var i=e.$options.props;for(var r in t){var s=i[r]?i[r].default&&"function"===typeof i[r].default?i[r].default.call():i[r].default:Symbol("unique"),a=!1;a=Array.isArray(s)?JSON.stringify(s)===JSON.stringify(t[r]):s===t[r],o[r]&&!a?(console.warn(r+" props is overriding the value passed in the options props"),o[r]=t[r]):o[r]||(o[r]=t[r])}return o},O=function(t){var e=!1;while(t&&!e)void 0===t.mapObject?t=t.$parent:e=!0;return t},y={props:{content:{type:String,default:null,custom:!0}},mounted:function(){this.popperOptions={}},methods:{setContent:function(t){this.mapObject&&null!==t&&void 0!==t&&this.mapObject.setContent(t)}},render:function(t){return this.$slots.default?t("div",this.$slots.default):null}},j={props:{options:{type:Object,default:function(){return{}}}}},C={name:"LPopup",mixins:[y,j],props:{latLng:{type:[Object,Array],default:function(){return[]}}},mounted:function(){var t=this,e=v(this.popperOptions,this);this.mapObject=Object(p["popup"])(e),void 0!==this.latLng&&this.mapObject.setLatLng(this.latLng),p["DomEvent"].on(this.mapObject,this.$listeners),m(this,this.mapObject,this.$options.props),this.mapObject.setContent(this.content||this.$el),this.parentContainer=O(this.$parent),this.parentContainer.mapObject.bindPopup(this.mapObject),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},beforeDestroy:function(){this.parentContainer&&(this.parentContainer.unbindPopup?this.parentContainer.unbindPopup():this.parentContainer.mapObject&&this.parentContainer.mapObject.unbindPopup&&this.parentContainer.mapObject.unbindPopup())}};function $(t,e,n,o,i,r,s,a,c,p){"boolean"!==typeof s&&(c=a,a=s,s=!1);var u,l="function"===typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),o&&(l._scopeId=o),r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):e&&(u=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(l.functional){var f=l.render;l.render=function(t,e){return u.call(e),f(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return n}var g=C,_=void 0,w=void 0,S=void 0,A=void 0,T=$({},_,g,w,A,S,!1,void 0,void 0,void 0),R=T,E=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},x=function(t,e,n,o){var i=function(o){var i="set"+E(o),r=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&t[i]?t.$watch(o,(function(e,n){t[i](e,n)}),{deep:r}):"setOptions"===i?t.$watch(o,(function(t,n){Object(p["setOptions"])(e,t)}),{deep:r}):e[i]&&t.$watch(o,(function(t,n){e[i](t)}),{deep:r})};for(var r in n)i(r)},k=function(t){var e={};for(var n in t){var o=t[n];null!==o&&void 0!==o&&(e[n]=o)}return e},N=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var o=k(n);t=k(t);var i=e.$options.props;for(var r in t){var s=i[r]?i[r].default&&"function"===typeof i[r].default?i[r].default.call():i[r].default:Symbol("unique"),a=!1;a=Array.isArray(s)?JSON.stringify(s)===JSON.stringify(t[r]):s===t[r],o[r]&&!a?(console.warn(r+" props is overriding the value passed in the options props"),o[r]=t[r]):o[r]||(o[r]=t[r])}return o},P=function(t){var e=!1;while(t&&!e)void 0===t.mapObject?t=t.$parent:e=!0;return t},M={props:{content:{type:String,default:null,custom:!0}},mounted:function(){this.popperOptions={}},methods:{setContent:function(t){this.mapObject&&null!==t&&void 0!==t&&this.mapObject.setContent(t)}},render:function(t){return this.$slots.default?t("div",this.$slots.default):null}},U={props:{options:{type:Object,default:function(){return{}}}}},z={name:"LTooltip",mixins:[M,U],mounted:function(){var t=this,e=N(this.popperOptions,this);this.mapObject=Object(p["tooltip"])(e),p["DomEvent"].on(this.mapObject,this.$listeners),x(this,this.mapObject,this.$options.props),this.mapObject.setContent(this.content||this.$el),this.parentContainer=P(this.$parent),this.parentContainer.mapObject.bindTooltip(this.mapObject),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},beforeDestroy:function(){this.parentContainer&&(this.parentContainer.unbindTooltip?this.parentContainer.unbindTooltip():this.parentContainer.mapObject&&this.parentContainer.mapObject.unbindTooltip&&this.parentContainer.mapObject.unbindTooltip())}};function D(t,e,n,o,i,r,s,a,c,p){"boolean"!==typeof s&&(c=a,a=s,s=!1);var u,l="function"===typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),o&&(l._scopeId=o),r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):e&&(u=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(l.functional){var f=l.render;l.render=function(t,e){return u.call(e),f(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return n}var I=z,V=void 0,J=void 0,F=void 0,G=void 0,X=D({},V,I,J,G,F,!1,void 0,void 0,void 0),q=X,B=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},Z=function(t,e,n,o){var i=function(o){var i="set"+B(o),r=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&t[i]?t.$watch(o,(function(e,n){t[i](e,n)}),{deep:r}):"setOptions"===i?t.$watch(o,(function(t,n){Object(p["setOptions"])(e,t)}),{deep:r}):e[i]&&t.$watch(o,(function(t,n){e[i](t)}),{deep:r})};for(var r in n)i(r)},H=function(t){var e={};for(var n in t){var o=t[n];null!==o&&void 0!==o&&(e[n]=o)}return e},K=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var o=H(n);t=H(t);var i=e.$options.props;for(var r in t){var s=i[r]?i[r].default&&"function"===typeof i[r].default?i[r].default.call():i[r].default:Symbol("unique"),a=!1;a=Array.isArray(s)?JSON.stringify(s)===JSON.stringify(t[r]):s===t[r],o[r]&&!a?(console.warn(r+" props is overriding the value passed in the options props"),o[r]=t[r]):o[r]||(o[r]=t[r])}return o},Y=function(t){var e=!1;while(t&&!e)void 0===t.mapObject?t=t.$parent:e=!0;return t},W={props:{pane:{type:String,default:"overlayPane"},attribution:{type:String,default:null,custom:!0},name:{type:String,custom:!0,default:void 0},layerType:{type:String,custom:!0,default:void 0},visible:{type:Boolean,custom:!0,default:!0}},mounted:function(){this.layerOptions={attribution:this.attribution,pane:this.pane}},beforeDestroy:function(){this.unbindPopup(),this.unbindTooltip(),this.parentContainer.removeLayer(this)},methods:{setAttribution:function(t,e){var n=this.$parent.mapObject.attributionControl;n.removeAttribution(e).addAttribution(t)},setName:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setLayerType:function(){this.parentContainer.removeLayer(this),this.visible&&this.parentContainer.addLayer(this)},setVisible:function(t){this.mapObject&&(t?this.parentContainer.addLayer(this):this.parentContainer.hideLayer?this.parentContainer.hideLayer(this):this.parentContainer.removeLayer(this))},unbindTooltip:function(){var t=this.mapObject?this.mapObject.getTooltip():null;t&&t.unbindTooltip()},unbindPopup:function(){var t=this.mapObject?this.mapObject.getPopup():null;t&&t.unbindPopup()},updateVisibleProp:function(t){this.$emit("update:visible",t)}}},Q={mixins:[W],mounted:function(){this.layerGroupOptions=this.layerOptions},methods:{addLayer:function(t,e){e||this.mapObject.addLayer(t.mapObject),this.parentContainer.addLayer(t,!0)},removeLayer:function(t,e){e||this.mapObject.removeLayer(t.mapObject),this.parentContainer.removeLayer(t,!0)}}},tt={props:{options:{type:Object,default:function(){return{}}}}},et={name:"LGeoJson",mixins:[Q,tt],props:{geojson:{type:[Object,Array],custom:!0,default:function(){return{}}},options:{type:Object,custom:!0,default:function(){return{}}},optionsStyle:{type:[Object,Function],custom:!0,default:null}},computed:{mergedOptions:function(){return K(Object.assign({},this.layerGroupOptions,{style:this.optionsStyle}),this)}},mounted:function(){var t=this;this.mapObject=Object(p["geoJSON"])(this.geojson,this.mergedOptions),p["DomEvent"].on(this.mapObject,this.$listeners),Z(this,this.mapObject,this.$options.props),this.parentContainer=Y(this.$parent),this.parentContainer.addLayer(this,!this.visible),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))},beforeDestroy:function(){this.parentContainer.mapObject.removeLayer(this.mapObject)},methods:{setGeojson:function(t){this.mapObject.clearLayers(),this.mapObject.addData(t)},getGeoJSONData:function(){return this.mapObject.toGeoJSON()},getBounds:function(){return this.mapObject.getBounds()},setOptions:function(t,e){this.mapObject.clearLayers(),Object(p["setOptions"])(this.mapObject,this.mergedOptions),this.mapObject.addData(this.geojson)},setOptionsStyle:function(t,e){this.mapObject.setStyle(t)}},render:function(){return null}};function nt(t,e,n,o,i,r,s,a,c,p){"boolean"!==typeof s&&(c=a,a=s,s=!1);var u,l="function"===typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),o&&(l._scopeId=o),r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):e&&(u=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(l.functional){var f=l.render;l.render=function(t,e){return u.call(e),f(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return n}var ot=et,it=void 0,rt=void 0,st=void 0,at=void 0,ct=nt({},it,ot,rt,at,st,!1,void 0,void 0,void 0),pt=ct,ut=function(t){return t&&"function"===typeof t.charAt?t.charAt(0).toUpperCase()+t.slice(1):t},lt=function(t,e,n,o){var i=function(o){var i="set"+ut(o),r=n[o].type===Object||n[o].type===Array||Array.isArray(n[o].type);n[o].custom&&t[i]?t.$watch(o,(function(e,n){t[i](e,n)}),{deep:r}):"setOptions"===i?t.$watch(o,(function(t,n){Object(p["setOptions"])(e,t)}),{deep:r}):e[i]&&t.$watch(o,(function(t,n){e[i](t)}),{deep:r})};for(var r in n)i(r)},ft=function(t){var e={};for(var n in t){var o=t[n];null!==o&&void 0!==o&&(e[n]=o)}return e},dt=function(t,e){var n=e.options&&e.options.constructor===Object?e.options:{};t=t&&t.constructor===Object?t:{};var o=ft(n);t=ft(t);var i=e.$options.props;for(var r in t){var s=i[r]?i[r].default&&"function"===typeof i[r].default?i[r].default.call():i[r].default:Symbol("unique"),a=!1;a=Array.isArray(s)?JSON.stringify(s)===JSON.stringify(t[r]):s===t[r],o[r]&&!a?(console.warn(r+" props is overriding the value passed in the options props"),o[r]=t[r]):o[r]||(o[r]=t[r])}return o},ht=function(t){var e=!1;while(t&&!e)void 0===t.mapObject?t=t.$parent:e=!0;return t},mt={props:{position:{type:String,default:"topright"}},mounted:function(){this.controlOptions={position:this.position}},beforeDestroy:function(){this.mapObject&&this.mapObject.remove()}},bt={props:{options:{type:Object,default:function(){return{}}}}},vt={name:"LControl",mixins:[mt,bt],props:{disableClickPropagation:{type:Boolean,custom:!0,default:!0},disableScrollPropagation:{type:Boolean,custom:!0,default:!1}},mounted:function(){var t=this,e=p["Control"].extend({element:void 0,onAdd:function(){return this.element},setElement:function(t){this.element=t}}),n=dt(this.controlOptions,this);this.mapObject=new e(n),lt(this,this.mapObject,this.$options.props),this.parentContainer=ht(this.$parent),this.mapObject.setElement(this.$el),this.disableClickPropagation&&p["DomEvent"].disableClickPropagation(this.$el),this.disableScrollPropagation&&p["DomEvent"].disableScrollPropagation(this.$el),this.mapObject.addTo(this.parentContainer.mapObject),this.$nextTick((function(){t.$emit("ready",t.mapObject)}))}};function Ot(t,e,n,o,i,r,s,a,c,p){"boolean"!==typeof s&&(c=a,a=s,s=!1);var u,l="function"===typeof n?n.options:n;if(t&&t.render&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0,i&&(l.functional=!0)),o&&(l._scopeId=o),r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,c(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):e&&(u=s?function(t){e.call(this,p(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),u)if(l.functional){var f=l.render;l.render=function(t,e){return u.call(e),f(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return n}var yt=vt,jt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._t("default")],2)},Ct=[],$t=void 0,gt=void 0,_t=void 0,wt=!1,Lt=Ot({render:jt,staticRenderFns:Ct},$t,yt,gt,wt,_t,!1,void 0,void 0,void 0),St=Lt,At=L.ExtraMarkers.icon({icon:"fa-warehouse",markerColor:"orange",prefix:"fas"}),Tt={keepInView:!0,maxWidth:2600},Rt={name:"Map1",components:{LMap:l["a"],LTileLayer:f["a"],LMarker:d["a"],LPopup:R,LTooltip:q,LGeoJson:pt,LControl:St},data:function(){var t;return t={showSidebar:!1,showMakers:!0,selectedItem:"",houseMarker:At,zoomControl:"",showSideBar:!1,mapObj:"",features:[],popOptions:Tt,COUNTYNAME:"",clrIdx:0,zoom:7.4,center:Object(p["latLng"])(23.5,120.74739),url:"http://wmts.nlsc.gov.tw/wmts/EMAP6_OPENDATA/default/EPSG:3857/{z}/{y}/{x}",withPopup:Object(p["latLng"])(23.6,120.74739),withTooltip:Object(p["latLng"])(23.6,120.74739),currentZoom:7.4,currentCenter:Object(p["latLng"])(23.6,120.74739),showParagraph:!1,mapOptions:{zoomDelta:.3},showMap:!0},Object(a["a"])(t,"mapOptions",{}),Object(a["a"])(t,"show",!0),t},computed:{myGeojsonList:function(){return this.geojson}},methods:{shuuffleArray:function(t){var e=Object(s["a"])(t),n=function(t,e){return Math.floor(Math.random()*(e-t)+t)};return e.forEach((function(t,e,o){var i,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:n(e,o.length);return i=[o[r],o[e]],o[e]=i[0],o[r]=i[1],i})),e},clickItem:function(t){this.selectedItem=t,this.$router.push("doclist")},addZoomControl:function(){this.mapObj.zoomControl&&this.mapObj.zoomControl.remove(),this.zoomControl=L.control.zoom({position:"bottomleft"}),this.mapObj.addControl(this.zoomControl)},init:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.features=[],n=u.filter((function(t){return c["c"].hotMapIds.find((function(e){return e==+t.myID}))})),n=e.shuuffleArray(n),n.forEach((function(t){t.latLng=Object(p["latLng"])(t.lat,t.lon)})),e.features=Object(s["a"])(n),e.$root.$emit("show-gis-label",e.features[0]),requestAnimationFrame((function(){e.$refs.myMapRef.mapObject.setView([e.features[0].lat,e.features[0].lon],12.4)})),e.showMap=!0,e.$nextTick((function(){e.mapObj=e.$refs.myMapRef.mapObject,e.addZoomControl()}));case 9:case"end":return t.stop()}}),t)})))()},goHome:function(){this.$refs.myMapRef&&this.$refs.myMapRef.mapObject.setView([23.5,120.74739],7.4)},zoomUpdate:function(t){this.currentZoom=t},centerUpdate:function(t){this.currentCenter=t},showLongText:function(){this.showParagraph=!this.showParagraph},innerClick:function(){alert("Click!")}},mounted:function(){var t=this;this.init(),this.$nextTick((function(){return t.goHome()})),this.$root.$on("gis-name",(function(e){t.features=u.filter((function(t){return t.name==e})),requestAnimationFrame((function(){t.$refs.myMapRef.mapObject.setView([t.features[0].lat,t.features[0].lon],12.4)}))}))}},Et=Rt,xt=(n("dbab"),n("99ce"),n("2877")),kt=Object(xt["a"])(Et,o,i,!1,null,"04e194d6",null);e["default"]=kt.exports},"99ce":function(t,e,n){"use strict";n("e32b")},dbab:function(t,e,n){"use strict";n("3b51")},e32b:function(t,e,n){}}]);
//# sourceMappingURL=chunk-4f509188.0b59bbc2.js.map