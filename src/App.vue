<template>
  <div id="app">
    <van-overlay style="z-index:999999999" :show="showOverlay" />
    <div v-if="gisInfo" class="gis-info">{{ this.gisInfo }}</div>
    <img hidden :src="avatorImg" />
    <router-view></router-view>
    <van-popup v-model="showGisPopup" position="bottom">
      <van-picker :title="pickName" show-toolbar :columns="columns" @confirm="onConfirm" @cancel="showGisPopup = false" />
    </van-popup>

    <van-share-sheet v-model="showShareSheet" title="用地圖找名醫會館相關醫院" :options="gisOptions" @select="onSelectGis" :cancel-text="cancel" />
    <van-tabbar v-model="active" style="z-index:8;">
      <nav class="gis-btn" @click="openGisOps" v-if="active == 2">
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
import liff from "@line/liff";

let features = GISJSON.filter((s) => store.hotMapIds.find((s2) => s2 == +s.myID));
const mySet = new Set(features.map((s) => s.address.slice(0, 3)));
const acc = {};
features.reduce((_, obj) => {
  let str = obj.address.slice(0, 3);
  acc[str] ? (acc[str] += 1) : (acc[str] = 1);
  //console.log(obj.address.slice(0, 3));
});

const countries = [...mySet]
  .map((s) => ({
    name: s,
    icon: "custom-icon-light.png",
    count: acc[s],
    description: acc[s],
  }))
  .sort((a, b) => b.count - a.count);

export default {
  name: "app",
  data() {
    return {
      showShareSheet: false,
      gisOptions: [countries.slice(0, 5), countries.slice(5, 5 + 5), countries.slice(15, 1000)],
      active: 0,
      locs: [],
      name: "",
      columns: [],
      showGisPopup: false,
      gisInfo: "",
      showOverlay: true,
    };
  },
  components: {},
  computed: {
    pickName() {
      return `找${this.name}醫院`;
    },
    avatorImg() {
      const str = store.lineProfile?.pictureUrl;
      return str ? str : "http://unsplash.it/126/126";
    },
  },
  methods: {
    async connectWithStrapi() {
      try {
        const { jwt: jwt1 } = await this.loginStrapi();
        window.token = jwt1;
        if (!window.token) {
          const { jwt: jwt2 } = await this.registerStrapi().catch((e) => {
            alert("something wrong at app jwt connectWithStrapi");
            return;
          });
          window.token = jwt2;
        }
        mutations.login(store.lineProfile.userId);
      } catch (e) {
        alert("請檢查驗證號碼" + e);
      }
    },
    async registerStrapi() {
      const { jwt } = await actions.registerStrapi({ username: store.lineProfile.userId, password: store.PASSWORD });
      return { jwt };
    },
    async loginStrapi() {
      try {
        const { jwt } = await actions.loginStrapi({ identifier: store.lineProfile.userId, password: store.PASSWORD });
        return { jwt };
      } catch (e) {
        return { jwt: "" };
      }
    },
    async getLineInfo() {
      // ckc@datacom.com.tw / 22458558   ; line dev login user/pass
      await liff.init({ liffId: "1655679414-AdYmjyMx" });
      store.isNativeOS = liff.getOS() != "web" ? true : false;
      store.isLineApp = liff.isInClient();
      if (store.isLineApp) store.lineProfile = await liff.getProfile();
      this.connectWithStrapi();
    },
    onConfirm(value, index) {
      this.showGisPopup = false;
      const { address, phone } = GISJSON.find((s) => s.name == value);
      this.gisInfo = phone ? `${address} / ${phone}` : address;
      this.$root.$emit("gis-name", value);
    },
    openGisOps() {
      this.showShareSheet = true;
      this.gisInfo = "";
      this.$router.push("/gis");
    },
    onSelectGis(option) {
      this.name = option.name;
      this.showShareSheet = false;
      this.columns = features.filter((s) => s.address.includes(option.name)).map((s) => s.name);
      this.showGisPopup = true;
    },
    tabClick(name) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      requestAnimationFrame(() => this.$router.push(name));
    },
  },
  async mounted() {
    this.$root.$on("show-gis-label", (obj) => {
      this.gisInfo = obj.phone ? `${obj.address} / ${obj.phone}` : obj.address;
    });
    try {
      await this.getLineInfo();
      this.showOverlay = false;
    } catch (e) {
      alert(e + "");
      this.showOverlay = false;
    }
  },
  async beforeCreate() {},
  watch: {
    $route(to, from) {
      this.gisInfo = "";
      if (to.path.includes("home")) {
        this.active = 0;
      } else if (to.path.includes("doclist")) {
        this.active = 1;
      } else if (to.path.includes("gis")) {
        this.active = 2;
        this.openGisOps();
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
html,
body {
  background: var(--snap-blue) !important;
  scroll-behavior: smooth;
  overflow-x: hidden !important;
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
.gis-info {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100vw;
  padding: 3px;
  background: linear-gradient(to right, #ae15d4, #3570ec);
  color: white;
  text-align: center;
  font-size: 12px;
  z-index: 99999;
}
</style>
