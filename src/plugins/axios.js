"use strict";

import Vue from "vue";
import axios from "axios";
import { store } from "../store/global";

let config = {
  baseURL: process.env.NODE_ENV === 'production'? 'https://dtc-health.herokuapp.com/' : `http://${location.hostname}:1337/`,
  headers: {
    "Content-Type": "application/json"
  },
  timeout: 720 * 1000 // Timeout
  // withCredentials: true // Check cross-site Access-Control
};


const _axios = axios.create(config);

_axios.interceptors.request.use(
  function (config) {
    //sessionStorage.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZDQxZTk0MzZjMDY2MGMzMDI1ZmZiNiIsImlhdCI6MTYwODQyNjM5MSwiZXhwIjoxNjExMDE4MzkxfQ.P4OHib8d_5QkdIq8JsIaYydbh_QR8PZ_cksY2vQD1Lk";
    if(sessionStorage.token)
       config.headers.Authorization = "Bearer " + sessionStorage.token
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data;
  },
  function (error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

Plugin.install = function (Vue, options) {
  Vue.axios = _axios;
  window.axios = _axios;
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
