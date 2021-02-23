"use strict";

import Vue from "vue";
import axios from "axios";
let config = {
  ///dtchealth.datacom.com.tw
  //baseURL: process.env.NODE_ENV === 'production'? 'https://dtc-health.herokuapp.com/' : `https://dtchealth.datacom.com.tw/`,
  baseURL:  "https://sandbox.tappaysdk.com/tpc/payment",
  headers: {
    "Content-Type": "application/json",
    'x-api-key': 'partner_o1z1cKCItSyhwv6jjGKr1FiWcNNHO2J43mPXiiVc9KWATdDbsxr0xxol'
  },
  timeout: 720 * 1000 // Timeout
};


const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
   
    return response.data;
  },
  function (error) {
   
    return Promise.reject(error);
  }
);

Plugin.install = function (Vue, options) {
  Vue.tappay = _axios;
  window.tappay = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
