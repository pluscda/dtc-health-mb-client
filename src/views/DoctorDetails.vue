<template>
  <section class="dtc-detail">
    <van-nav-bar title="頭頸部" left-text="返回" left-arrow @click-left="onClickLeft" />
    <main class="dtc-detail__content">
      <img src="https://unsplash.it/80/80" class="left" />
      <div class="right mt-2">
        <h4>饒樹文<span style="font-size:0.9rem;display:inline-block;margin-left:10px;color:var(--bs-dark-gray)">主治醫師</span></h4>
        <p>三軍總醫院大腸直腸外科主治醫師</p>
        <p>台灣台北市</p>
      </div>
    </main>
    <main class="px-2">
      <p style="font-size:14px;">
        擅長: 各種癌症
        (乳癌、婦癌、肺癌、腦癌、頭頸癌、食道癌、泌尿道腫瘤、大腸直腸癌、肝癌)之治癒性及緩和性放射治療。此外，對於最新型直線加速器，如真光刀(TrueBeam)、好神刀(Halcyon)，及新式之放射治療技術，擁有豐富的臨床治療經驗。
      </p>
    </main>
    <nav class="how2 mt-2">
      <main class="how2-title">
        <van-icon name="vip-card" color="var(--bs-orange)" size="60px" />
        <h4 class="pt-3">線上諮詢</h4>
        <div></div>
        <div class="pt-4" style="color:var(--bs-orange)">NT2000<span style="font-size:12px;">元</span></div>
      </main>
    </nav>
  </section>
</template>

<script>
export default {
  name: "docdetails",
  components: {},
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.dtc-detail {
  display: flex;
  flex-direction: column;
}
.dtc-detail__content {
  display: grid;
  grid-template-columns: repeat(2, max-content);
  .left {
    display: inline-block;
    border-radius: 100%;
    object-fit: cover;
    margin-right: 1rem;
    margin-top: 1rem;
    margin-left: 1rem;
  }
  grid-gap: 1rem;
  .right {
    display: flex;
    flex-direction: column;
  }
}
.how2 {
  display: grid;
  place-items: center;
  > main {
    width: 97vw;
    height: 250px;
    background: var(--bs-light);
    border-radius: 15px;
    filter: drop-shadow(6px 6px 7px rgba(0, 0, 0, 0.7));
    padding: 1rem;
    padding-top: 1.4rem;
  }
}
.how2-title {
  display: grid;
  grid-template-columns: 70px max-content 1fr max-content;
}
</style>
