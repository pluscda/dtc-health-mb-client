<template>
  <section class="dtc-head-cancer">
    <van-nav-bar title="胸部" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <nav class="grid-2-img">
      <div v-for="(item, i) in items" :key="i" :data-msg="item.text" @click="$router.push('doclist')">
        <img :src="item.src" with="245" height="150" alt="abc" />
      </div>
    </nav>
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
  background: white;
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
