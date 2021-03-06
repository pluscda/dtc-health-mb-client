import Vue from "vue";
import firebase from "firebase/app";
import "firebase/auth";
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;
// this password is not used in server side, but requred at AJAX; in DB , it will not use this password
let PASSWORD = "weR168@healther.dtc.tw"
//blow ids are DTC big boss provided 
let hotMapIds = [3,4,8,12,18,19,26,28,30,31,33];
let numStr = "34,38,41,49,56,67,89,95,";
numStr += "98,99,104,111,115,118,123,";
numStr += "124,157,158,186,197,198,";
numStr += "211,226,238,245,247,275,";
numStr += "283,293,313,333,335,336,";
numStr += "337,344,345,346,349,";
numStr += "351,356,359,360,365,";
numStr += "370,371,376,379,";
numStr += "380,382,385,390,392,";
numStr += "400,429,434,436,440,";
numStr += "441,443,444,449,";
numStr += "451,460,462,";
numStr += "467,478,480,481,482,";
numStr += "483,484,486,487,493,494,";
numStr += "496,498,500,501";

hotMapIds = [...hotMapIds, ...numStr.split(",")];
const init = {
  hotMapIds,
  cancerCats:[],
  isLogin: false,
  PASSWORD,
  cancers:[],
  imgPrefix: process.env.NODE_ENV === 'production'? 'https://dtchealth.datacom.com.tw' : `http://${location.hostname}:1337`,
  //imgPrefix: process.env.NODE_ENV === 'production'? 'https://dtc-health.herokuapp.com' : `https://dtchealth.datacom.com.tw`,
  isDoctor: false,
  MIN_NON_CANCER_NUM: 34,
  selectedDoctor:'',
  totalHots:''
};
export let store = Vue.observable({
  ...init,
});

function recaptch(id){
    try{ 
      if(!window.recaptchaVerifier)
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(id, {
          'size': 'invisible',
        });
    }catch(e){
      alert("recaptch error: " + e);
    }
}
export let actions = {
  async sendPushMsg(obj){
    try{
       return await axios.post("dtc-sendpn",obj);
    }catch(e){
       console.log('fail to create dtc stats msg');
    }
  },
  async analysis(obj){
    try{
       return await axios.post("dtc-stats",obj);
    }catch(e){
       console.log('fail to create dtc stats msg');
    }
  },
  async registerPn(obj){
    try{
       return await axios.post("pns",obj);
    }catch(e){
       console.log('fail to create push notify msg');
    }
  },
  async setCapaData(obj){
    await Storage.set({
      key: 'user',
      value: JSON.stringify(obj)
    });
  },
  async getCapaData(){
     const ret = await Storage.get({ key: 'user' });
     return JSON.parse(ret.value);
  },
  async getCount(url){
     return await axios.get(url);
  },
  async updateOrder(item){
     return axios.put('dtc-orders/' + item.id, item);
  },
  async getCancerCats(){
    if(store.cancerCats.length > 0){
      return store.cancerCats;
    }
    const cats =  await axios.get("cancer-cats");
    store.cancerCats = cats;
    return cats;
  },
  async getGisList(qs){
    return await axios.get('gis?' + qs);
  },
  async getDoctors(qs){
    const url = "doctors?" + qs;
    const url2 = "doctors/count?" + qs;
    const count = await actions.getCount(url2);
    const items = await axios.get(url);
    return {count, items};
  },
  async getDocInfo(phone){
    return axios.get('doctores?phone_eq=' + sessionStorage.phone);
  },
 
  async getOrders(qs){
    const url = "dtc-orders?" + qs;
    const url2 = "dtc-orders/count?" + qs;
    const count = await actions.getCount(url2);
    const items = await axios.get(url);
    return {count, items};
  },
  async addOrder(item){
      const obj =  await axios.post('dtc-orders', item);
      return obj;
  },
  async getCancerTypes(){
     return await axios.get('cancer-types');
  },
  
  async registerStrapi(obj){
    try{
      obj.email = obj.username.includes("@") ? obj.username : obj.username + PASSWORD;
      return await axios.post("auth/local/register", obj);
    }catch(e){
      return e;
    }
  },
  async loginStrapi(obj){
    try{
      //https://strapi.io/documentation/developer-docs/latest/guides/auth-request.html#login-as-a-reader
      return await axios.post("auth/local", obj);
    }catch(e){
      return e;
    }
  },
  async registerByMobilePhone(phoneNum, id) {
     recaptch(id);
      try{
        return await firebase
          .auth()
          .signInWithPhoneNumber(phoneNum, window.recaptchaVerifier);
      }catch(e){
        return alert("registerByMobilePhone error : " + e);
      }    
  },
 
};
export let mutations = {
  login(phone) {
    store.isLogin = true;
    sessionStorage.phone = phone;
  },
  async logout() {
    sessionStorage.clear();
    store.isLogin = false; // need this line to tigger other pages; DO NOT REMOVE
    await Storage.clear();
    await firebase.auth().signOut();
    window.recaptchaVerifier = null;
    store = Vue.observable({
      ...init,
    });
  },
};

const firebaseConfig = {
    apiKey: "AIzaSyDPO6XXcDTQxtakG1PE8xqCw1QZGHI6Alg",
    authDomain: "ddeeee-4f963.firebaseapp.com",
    databaseURL: "https://ddeeee-4f963.firebaseio.com",
    projectId: "ddeeee-4f963",
    storageBucket: "ddeeee-4f963.appspot.com",
    messagingSenderId: "567717669747",
    appId: "1:567717669747:web:b0ab336820fadd5147f306",
    measurementId: "G-J5P1YXHGMR",
};

const watchLogin = () => {
  firebase.initializeApp(firebaseConfig);
  firebase.auth().useDeviceLanguage();
}
watchLogin();
