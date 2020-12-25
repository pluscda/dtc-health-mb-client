<template>
  <div class="dtc-header">
    <main class="dtc-main-heaer">
      <div class="dtc-logo">
        {{ $t("title") }}
        <span v-if="!myPhone" @click="$router.push('login')" style="font-size:14px;text-align:left;" class="mr-3"><i class="fas fa-sign-in-alt"></i>登入</span>
        <span v-if="myPhone" style="font-size:13px;text-align:left;" class="mt-2">用戶: {{ myPhone }}...</span>
      </div>

      <div v-if="$i18n.locale == 'zh-tw'" class="dtc-lang-switch" @click="$root.$i18n.locale = 'zh-cn'">繁</div>
      <div v-else class="dtc-lang-switch" @click="$root.$i18n.locale = 'zh-tw'">簡</div>
    </main>
    <van-search background="var(--snap-blue)" v-model="searchBy" shape="round" class="mx-4 mt-2" placeholder="醫院 | 醫生名 | 病名"></van-search>
  </div>
</template>

<script>
import { store, mutations } from "@/store/global.js";
export default {
  name: "homeSearchTitle",
  data() {
    return {};
  },
  computed: {
    isLogin() {
      return sessionStorage.isLogin || store.isLogin;
    },
    myPhone() {
      const phone = sessionStorage.phone ? sessionStorage.phone.slice(0, 9) : "";
      return phone;
    },
  },
  mounted() {},
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
.dtc-header {
  display: grid;
  .dtc-main-heaer {
    display: grid;
    grid-template-columns: max-content max-content;
    justify-content: space-between;
    align-items: center;
  }
}
.dtc-logo {
  font-size: 24px;
  font-weight: bold;
  color: #3570ec;
  transform: translateX(10px);
}
.search-by {
  position: relative;
  input {
    display: inline-block;
    border-radius: 80px;
    border: none;
    padding: 0.7rem;
    padding-left: 2rem !important;
    font-size: 13px;
    color: black;
    box-shadow: 0 0 0 1px #bababa;
    width: 170px;
  }
  .search-icon {
    position: absolute;
    left: 12px;
    color: #d1dffd;
    top: 10px;
  }
}
.dtc-lang-switch {
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background: linear-gradient(to right, #da5afa, #3570ec);
  color: white;
  text-align: center;
  line-height: 30px;
  transform: translateX(-25px);
}
</style>
