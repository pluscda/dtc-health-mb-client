<template>
  <section class="dtc-head-cancer">
    <van-nav-bar title="腹部" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <nav class="grid-2-img">
      <div v-for="(item, i) in items" :key="i" :data-msg="item.text">
        <img :src="item.src + '.jpg'" />
      </div>
    </nav>
  </section>
</template>

<script>
import { store, mutations, actions } from "@/store/global.js";
const strs = ["肝癌", "膽管癌", "膽囊癌", "結腸癌", "胃癌", "胰臟癌"];
const items = ["150 (17)", "150 (3)", "150 (4)", "150 (5)", "150 (6)", "150"].map((s, i) => ({
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
  gap: 0.2rem;
  padding: 3px;
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
