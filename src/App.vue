<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active" style="z-index:8;" v-if="!isDoc">
      <van-tabbar-item icon="home-o" @click="$router.push('home')">{{ $t('醫療首頁') }}</van-tabbar-item>
      <van-tabbar-item icon="search" @click="$router.push('doclist')">{{ $t('找醫師') }}</van-tabbar-item>
      <van-tabbar-item hidden icon="friends-o" @click="$router.push('file')">{{ $t('標籤') }}</van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="$router.push('login')">{{ $t('我的') }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { store, mutations, actions } from '@/store/global.js';

import Vue from 'vue';

export default {
  name: 'app',
  data() {
    return {
      active: 0,
    };
  },
  computed: {
    isLogin() {
      return store.isLogin;
    },
  },
  methods: {},
  components: {},
  mounted() {
    //actions.recaptch("sign-in-button");
  },
  watch: {
    $route(to, from) {
      document.documentElement.scrollIntoView();
      if (to.path.includes('home')) {
        this.active = 0;
      } else if (to.path.includes('doclist')) {
        this.active = 1;
      } else if (to.path.includes('login')) {
        this.active = 3;
      }
    },
  },
};
</script>
<i18n>
{
  "zh-tw": {
    "醫療首頁":"醫療首頁",
    "我的":"我的",
    "找醫師":"找醫師",
    "標籤":"標籤"
   
  },
  "zh-cn": {
    "醫療首頁":"医疗首页",
    "我的":"我的",
    "找醫師":"找医师",
    "標籤":"标签"
  }
}
</i18n>

<style lang="scss">
html,
body {
  scroll-behavior: smooth;
  max-height: 100vh;
  overflow: hidden;
  overflow-y: auto !important;
  margin: 0px;
  padding: 0px;
}
#app {
  margin: 0px;
  padding: 0px;
  font-family: var(--font-family-sans-serif);
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: var(--dark);
  background: var(--snap-blue) !important;
  width: 100vw;
  overflow: hidden !important;
}
.grecaptcha-badge {
  opacity: 0 !important;
  display: none !important;
  width: 0px !important;
  height: 0px !important;
  z-index: -1;
}
</style>
