<template>
  <section class="dtc-about">
    <header class="my-header">
      <h4 class="mb-3">會館館長: 何慶華</h4>
      <h4 class="mb-3">美國約翰霍普金斯</h4>
      <h4 class="mb-4">醫學管理博士</h4>
      <img src="plants.svg" />
    </header>
    <footer class="px-5 pt-3">
      <h5>
        宗旨: 有鑑於國內各大醫院名醫掛號困難，一般重大及緊急病患家屬沒有管 道斟詢名醫意見，「名醫會館」藉由互聯網科技技術提供病患家屬以手機通
        訊，可以即時找到相關的名醫徵詢醫療方面的寶貴意見，爭取有效的健康方案。
      </h5>
      <h5 class="mt-4">目標: 提供病患正確就醫知識、找對醫生、遠離病痛。</h5>
    </footer>
  </section>
</template>

<script>
import { store, mutations, actions } from "@/store/global.js";
import firebase from "firebase/app";
import "firebase/auth";
export default {
  name: "about",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      showLoginPwd: true,
    };
  },
  methods: {
    async register() {
      try {
        const obj = { username: this.username, password: this.password };
        const { jwt, user } = await actions.registerUser(obj);
        sessionStorage.token = jwt;
      } catch (e) {
        alert(e);
      }
    },
  },
  mounted() {},
  watch: {
    showLoginPwd() {},
  },
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
.dtc-about {
  background: transparent url("/background.svg") top left 100% 100% no-repeat;
  background-size: cover;
  width: 100vw;
  position: relative;
  .my-header {
    display: grid;
    padding: 2.5rem;
    grid-template-columns: 1fr;
    &::after {
      position: absolute;
      content: url("/doctor.svg");
      width: auto;
      height: 100%;
      top: 10px;
      right: 20px;
    }
  }
  h5 {
    line-height: 2rem;
  }
}
</style>
