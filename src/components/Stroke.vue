<template>
  <section class="dtc-head-cancer">
    <van-nav-bar title="中風線上諮詢" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />
    <main class="px-2">
      <p class="py-3">
        中風（英語：Stroke），又稱作腦血管事件（英語：Cerebrovascular event，簡稱CVE）、腦血管意外（英語：Cerebrovascular
        accident，簡稱CVA）、腦血管病變（英語：Cerebrovascular incident，CVI）、或腦病突發（英語：Brain attack）、腦卒中，是指腦部缺血造成的腦細胞死亡。
      </p>

      <p>
        中風分為兩種類型：一種是由血管阻塞所造成的缺血性腦中風（英語：brain ischemia）；一種是由出血所造成的出血性腦中風（英語：intracranial hemorrhagic stroke)。
        不論是缺血性或是出血性腦中風都會造成腦功能異常[。 常見的中風症狀包括無法移動單側的肢體或者是一邊的身體出現無力、無法理解別人的話、不能說話（英語：Expressive
        aphasia）、暈昡、其中一邊的視野看不到（英語：Homonymous hemianopsia）等等。
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
  gap: 0.2rem;
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
