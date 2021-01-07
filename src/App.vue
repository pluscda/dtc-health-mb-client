<template>
  <div id="app">
    <router-view></router-view>

    <van-share-sheet v-model="searchHots" title="用地圖找醫院" :options="gisOptions" @select="onSelectGis" :cancel-text="cancel" />
    <van-tabbar v-model="active" style="z-index:8;">
      <nav class="gis-btn" v-if333="active == 2" :data-msg="totalHots" @click="openGisOps">
        <img src="pen.svg" />
      </nav>
      <van-tabbar-item icon="wap-home-o" @click="tabClick('/home')">{{ $t("醫療首頁") }}</van-tabbar-item>
      <van-tabbar-item icon="search" @click="tabClick('/doclist')">{{ $t("找醫師") }}</van-tabbar-item>
      <van-tabbar-item icon="bookmark-o" @click="tabClick('/gis')">找醫院</van-tabbar-item>
      <van-tabbar-item icon="setting-o" @click="tabClick('/login')">{{ $t("我的") }}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { store, mutations, actions } from "@/store/global.js";
import Vue from "vue";
import GISJSON from "@/assets/gis.json";
const mySet = new Set(GISJSON.map((s) => s.address.slice(0, 6)));

// GISJSON.map((s) => s.address.slice(0, 6)).reduce((acc, start) => {
//   acc[start] ? (acc[start] = acc[start] + 1) : (acc[start] = 1);
// }, {});

const countries = [...mySet].map((s) => ({
  name: s,
  icon: "link",
}));

export default {
  name: "app",
  data() {
    return {
      searchHots: false,
      gisOptions: countries,
      active: 0,
      locs: [],
      name: "",
    };
  },
  computed: {
    isLogin() {
      return sessionStorage.token || store.isLogin;
    },
  },
  methods: {
    openGisOps() {
      this.searchHots = true;
    },
    onSelectGis(option) {
      this.name = option.name;
    },
    tabClick(name) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      requestAnimationFrame(() => this.$router.push(name));
    },
  },
  mounted() {},
  watch: {
    $route(to, from) {
      if (to.path.includes("home")) {
        this.active = 0;
      } else if (to.path.includes("doclist")) {
        this.active = 1;
      } else if (to.path.includes("gis")) {
        this.active = 2;
      } else if (to.path.includes("login")) {
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
  overflow: hidden;
  overflow-y: auto !important;
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
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
  min-height: 100vh;
  overflow: hidden !important;
}
.grecaptcha-badge {
  opacity: 0 !important;
  display: none !important;
  width: 0px !important;
  height: 0px !important;
  z-index: -1;
}
.page-view {
  min-height: 50px;
  height: 50px;
}
.gis-btn {
  position: absolute;
  display: block;
  top: 0;
  margin-top: -8px;
  left: 50%;
  transform: translate3d(-32px, calc(-50%), 0);
  width: 67px;
  height: 67px;
  z-index: 9;
  border-radius: 100%;
  text-align: center;
  line-height: 60px;
  color: white;
  font-size: 50px;
  background: linear-gradient(to right, #ae15d4, #3570ec);
  filter: drop-shadow(1px 1px 2px rgba(#3570ec, 0.7));
  opacity: 0.7;
  &::after {
    position: absolute;
    content: attr(data-msg);
    color: black;
    font-size: 12px;
    bottom: -37px;
    left: 50%;
    transform: translateX(-50%);
    width: max-content;
    display: block;
    margin-top: 10px;
  }
}
</style>
