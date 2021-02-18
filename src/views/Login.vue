<template>
  <section class="dtc-login" :style="isLogin ? '' : 'justify-content: center;'">
    <nav v-if="!isLogin">
      <!-- <PhoneLogin :callback="callback"></PhoneLogin> -->
      <iframe src="https://line.me/R/"></iframe>
    </nav>
    <nav class="login" v-else v-show="!isDoc">
      <h2>
        我的健康中心
        <span @click="logout" style="font-size:13px;text-align:left;" class="mt-2">用戶: {{ myPhone }}...<i class="fas fa-sign-out-alt ml-2">登出</i></span>
      </h2>
      <van-cell-group>
        <van-cell
          style2="background:#e3e4f9 !important;color:black;"
          :label="labels[i]"
          @click="open(item, i)"
          v-for="(item, i) in titles"
          :key="item"
          :title="item"
          size="large"
        ></van-cell>
      </van-cell-group>
    </nav>
  </section>
</template>

<script>
import { store, mutations, actions } from "@/store/global.js";
import PhoneLogin from "@/components/auth/PhoneLogin.vue";
import queryString from "qs";

const titles = ["預約紀錄(6)", "提問(5)", "意見反饋(1)", "我的收藏(2)", "系統設置"];

const labels = ["共有6筆記錄", "你有一則已答覆", "廠商有兩則反饋", "你有兩個收藏", "客製化個人設定"];

export default {
  name: "loginHome",
  data() {
    return {
      titles,
      labels,
      phone: sessionStorage.phone,
      callback: "",
    };
  },
  computed: {
    isLogin() {
      return sessionStorage.token || store.isLogin;
    },
    myPhone() {
      const phone = sessionStorage.phone ? sessionStorage.phone.slice(0, 6) : "";
      return phone;
    },
  },
  components: {
    PhoneLogin,
  },
  methods: {
    open(item, i) {
      if (i == 0) {
        this.$router.push("myorderlist");
      }
    },
    logout() {
      mutations.logout();
      this.$router.push("home");
      location.reload(true);
    },
    checkQueryString() {
      const str = location.search ? location.search.replace("?", "") : "";
      const { callback } = queryString.parse(str);
      this.callback = callback;
    },
  },
  mounted() {
    this.checkQueryString();
  },
  watch: {},
};
</script>
<i18n>
{
  "zh-tw": {
    "title": "名醫會館"
    
  },
  "zh-cn": {
    "title": "名医会馆"
  }
}
</i18n>

<style lang="scss" scoped>
.dtc-login {
  background: var(--strapi-blue);
  width: 100vw;
  color: var(--light);
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  display: grid;
}
.logo,
.logo2 {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  object-fit: cover;
}
.logo2 {
  top: 500px;
}
.login {
  position: relative;
  h2 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
}
iframe {
  width: 100vw;
  height: 100vh;
  z-index: 9999;
}
</style>
