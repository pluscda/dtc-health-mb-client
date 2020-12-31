<template>
  <section class="dtc-head-cancer">
    <van-nav-bar title="頭頸部" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
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
  methods: {
    onClickLeft() {
      this.$router.push("/home");
    },
  },
  mounted() {},
  watch: {},
};
</script>

<style lang="scss" scoped>
.dtc-head-cancer {
  background: #eaf8ff;
  width: 100vw;
  color: #3570ec;
  display: grid;
  grid-template-rows: max-content 1fr;
  position: relative;
}
</style>
