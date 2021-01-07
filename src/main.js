import Vue from 'vue'
import './plugins/axios'
import "./assets/reset.css"
import "./assets/utility.css"
import moment from "dayjs"
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './plugins/vant.js'
import VueToast from "vue-toast-notification";

// Import one of available themes
import "vue-toast-notification/dist/theme-default.css";

import './registerServiceWorker'
//import 'vue-toast-notification/dist/theme-sugar.css';

/* map */
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-extra-markers/dist/js/leaflet.extra-markers.js";
import "leaflet-extra-markers/dist/css/leaflet.extra-markers.min.css";

Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);
Vue.component("l-marker", LMarker);

Vue.use(VueToast, { position: "top" });

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount('#app')

Vue.prototype.$formatPrice = function(value) {
  value = Number(value);
  if (!value || isNaN(value)) return "";
  let val = (value / 1).toFixed(0).replace(".", ",");
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

Vue.prototype.$twDate = function(str){
  if(!str || str.startsWith("0")) return "暫無資料";
  const twYear = +str.split("T")[0].split("-")[0] - 1911;
  const d = new Date(str.split("T")[0]);
  return twYear + "年" + moment(str).format("MM月DD日 HH:mm");
}

Vue.prototype.$formatStatus = function(str){
     if(!str) return "";
     if(str == 'waiting'){
        return "等待醫師處理中"
     }else if(str == 'process'){
        return "醫生處理中"
     }else{
       return "醫師已結案"
     }

}

window.taipeis = [
  "北投區",
  "士林區",
  "中山區",
  "內湖區",
  "大同區",
  "松山區",
  "萬華區",
  "中正區",
  "大安區",
  "信義區",
  "南港區",
  "文山區",
];