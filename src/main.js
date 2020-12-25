import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/axios'
import "./assets/reset.css"
import moment from "moment"
// import "@fortawesome/fontawesome-free/css/all.css";
// import "@fortawesome/fontawesome-free/js/all.js";
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './plugins/vant.js'
// /import './registerServiceWorker'
import VueToast from "vue-toast-notification";
// Import one of available themes
import "vue-toast-notification/dist/theme-default.css";
//import 'vue-toast-notification/dist/theme-sugar.css';

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