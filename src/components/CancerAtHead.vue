<template>
  <section class="dtc-head-cancer">
    <van-nav-bar title="頭頸部" />

    <nav class="grid-2-img">
      <div v-for="(item, i) in items" :key="i" :data-msg="item.text" @click="$router.push(`doclist?searchBy=${item.text}`)">
        <img :src="item.src" with="245" height="150" :alt="item.text" />
      </div>
    </nav>
  </section>
</template>

<script>
import { store, mutations, actions } from "@/store/global.js";
const strs = ["腦癌", "眼癌", "鼻腔/鼻竇癌", "鼻咽癌", "口腔/口咽癌", "甲狀腺癌", "唾液腺癌", "喉腔/下咽癌"];
const items = ["腦癌.png", "眼癌.png", "鼻腔-鼻竇癌.png", "鼻咽癌.png", "口腔-口咽癌.png", "甲狀腺癌.png", "唾液腺癌.png", "喉癌-下咽癌.png"].map((s, i) => ({
  src: s,
  text: strs[i],
}));

export default {
  name: "chead",
  data() {
    return {
      items,
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
  min-height: 100vh;
  margin-bottom: 70px;
}
.grid-2-img {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fit, 150px);
  grid-gap: 0.2rem;
  > div {
    position: relative;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
      display: inline-block;
      object-fit: cover;
    }
    &::after {
      position: absolute;
      content: attr(data-msg);
      color: var(--light);
      background: rgba(#000, 0.4);
      font-size: 20px;
      text-align: center;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 2;
      line-height: 150px;
    }
  }
}
</style>
