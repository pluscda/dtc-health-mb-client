import Vue from "vue";
import firebase from "firebase/app";
import "firebase/auth";
// remove hard coded password here; hide the password in server side 
let PASSWORD = "weR168@healther.dtc.tw"
const init = {
  cancerCats:[],
  isLogin: false,
  isApiLoading: false,
  PASSWORD,
  cancers:[],
  imgPrefix: process.env.NODE_ENV === 'production'? 'https://dtc-health.herokuapp.com' : `http://${location.hostname}:1337`,
  isDoctor: false,
  MIN_NON_CANCER_NUM: 34,
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
  async getCount(url){
     return await axios.get(url);
  },
  async updateOrder(item){
     return axios.put('orders/' + item.id, item);
  },
  async getCancerCats(){
    if(store.cancerCats.length > 0){
      return store.cancerCats;
    }
    const cats =  await axios.get("cancer-cats");
    store.cancerCats = cats;
    return cats;
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
    const url = "orders?" + qs;
    const url2 = "orders/count?" + qs;
    const count = await actions.getCount(url2);
    const items = await axios.get(url);
    return {count, items};
  },
  async addOrder(item){
      const obj =  await axios.post('orders', item);
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
        return e;
      }    
  },
 
};
export let mutations = {
  login(phone) {
    store.isLogin = true;
    sessionStorage.phone = phone;
  },
  async logout() {
    await firebase.auth().signOut();
    window.recaptchaVerifier = null;
    store.isLogin = false; // need this line to tigger other pages; DO NOT REMOVE
    sessionStorage.clear();
    localStorage.clear();
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
  firebase.auth().onAuthStateChanged((user) => {
    // firebase user id
    user ? store.fireUid = user.uid : mutations.logout();
  });
}
watchLogin();
