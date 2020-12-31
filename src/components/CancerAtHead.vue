<template>
  <section class="dtc-head-cancer">
    <van-nav-bar title="頭頸部" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" />

    <nav class="grid-2-img">
      <div v-for="(item, i) in items" :key="i" :data-msg="item.text">
        <img :src="item.src" />
      </div>
    </nav>
  </section>
</template>

<script>
import { store, mutations, actions } from "@/store/global.js";
const strs = ["腦癌", "眼癌", "鼻腔／鼻竇癌", "鼻咽癌", "口腔／口咽癌", "甲狀腺癌", "唾液腺癌", "喉腔／下咽癌"];
const items = [
  "thumbnail_n5_Gcu_YDM_1_I2_Yz_MW_Yk_ZDO_3_Im_Nm_NT_Mw_Q3_Lt92_Yuc2cth_Wcuw2cz5_S_Mw9y_L6_M_Hc0_R_Ha_fc86d4ece1.jpg",
  "thumbnail_7705798_2d286d376f.jpg",
  "thumbnail_091005_jpg_1140x855_8dd9ad755b.jpg",
  "thumbnail__40a39b563f.jpg",
  "thumbnail_1309180501_624x491_732c3e3b3c.jpg",
  "thumbnail_DSC_1778_fb045cf426.jpg",
  "thumbnail__f0e0837881.jpg",
  "thumbnail_58fdbc3b_1266_4531_9ec9_fff21c8300631562039758_171b8574bf.jpg",
].map((s, i) => ({
  src: s,
  text: strs[i],
}));

export default {
  name: "login",
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
