<template>
  <section class="dtc-head-cancer">
    <van-nav-bar title="心血管疾病線上諮詢" left-text="返回" left-arrow @click-left="onClickLeft" />
    <main class="px-2">
      <p class="py-3">
        心血管疾病（英語：cardiovascular
        disease，簡稱CVD）指的是關於心臟或血管的疾病，又稱為循環系統疾病、迴圈系統疾病。常見的心血管疾病包括冠狀動脈症候群(心肌梗塞)、中風、高血壓性心臟病（英語：hypertensive
        heart disease）、風濕性心臟病、動脈瘤、心肌病變、心房顫動、先天性心臟病、心內膜炎、以及周邊動脈阻塞性疾病等等。
      </p>
    </main>
  </section>
</template>

<script>
import { store, mutations, actions } from "@/store/global.js";
const strs = ["食道癌", "肺癌", "乳癌"];
const items = ["thumbnail_shutterstock_1511820146_889e63f558.jpg", "thumbnail_59fad74a620f2_6a1a6ee578.jpg", "thumbnail_22741_a3c56a949c.jpg"].map((s, i) => ({
  src: s,
  text: strs[i],
}));
export default {
  name: "lung",
  data() {
    return {
      items,
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
  background: black;
  width: 100vw;
  color: white;
  display: grid;
  grid-template-rows: max-content 1fr;
  position: relative;
  min-height: 100vh;
}
p {
  line-height: 22px;
}
.grid-2-img {
  display: grid;
  grid-template-columns: 1fr 1fr;
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
