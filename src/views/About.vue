<template>
  <section class="dtc-about">
    <img src="doctor.png" />
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
  background: #eaf8ff;
  width: 100vw;
  display: grid;
  position: relative;
}
</style>
