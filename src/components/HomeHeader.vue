<template>
  <div class="dtc-header">
    <main class="dtc-main-heaer">
      <div class="dtc-logo">
        {{ $t("title") }}
        <div class="dtc-private ml-2">關於會館</div>
        <span v-if="myPhone" style="display:inline-block;font-size:12px;text-align:left;transform:translate3d(10px,0px,0)" class="mt-2">用戶: {{ myPhone }}...</span>
      </div>

      <div v-if="$i18n.locale == 'zh-tw'" class="dtc-lang-switch" @click="$root.$i18n.locale = 'zh-cn'">繁</div>
      <div v-else class="dtc-lang-switch" @click="$root.$i18n.locale = 'zh-tw'">簡</div>
    </main>
    <van-search background="var(--snap-blue)" v-model="searchBy" shape="round" class="mt-1" placeholder="醫院 | 醫生名 | 病名"></van-search>
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
      return sessionStorage.token || store.isLogin;
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
.dtc-private {
  width: 60px;
  clip-path: polygon(10% 1%, 100% 0%, 100% 99%, 10% 100%, 0% 50%);
  background: linear-gradient(to right, #da5afa, #3570ec);
  color: white;
  clip-path: unset;
  display: inline-block;
  font-size: 12px;
  text-align: center;
}
</style>
