<template>
  <section class="dtc-login">
    lung
  </section>
</template>

<script>
import { store, mutations, actions } from "@/store/global.js";

export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      showLoginPwd: true,
    };
  },
  methods: {},
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.dtc-login {
  background: #eaf8ff;
  width: 100vw;
  color: #3570ec;
  display: grid;
  grid-template-rows: max-content 1fr;
  position: relative;
}
</style>
