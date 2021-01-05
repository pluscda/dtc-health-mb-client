<template>
  <section class="dtc-detail">
    <van-nav-bar title="線上預約" left-text="返回" left-arrow @click-left="onClickLeft" />
    <main class="dtc-detail__content">
      <img src="https://unsplash.it/80/80" class="left" />
      <div class="right mt-2">
        <h4>饒樹文<span style="font-size:0.9rem;display:inline-block;margin-left:10px;color:var(--bs-dark-gray)">主治醫師</span></h4>
        <p style="font-size:13px;">三軍總醫院大腸直腸外科主治醫師</p>
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
        <van-button round color="var(--bs-orange)" style="transform:translateY(6px)">訂閱服務2000元</van-button>
        <!-- <h4 class="pt-3" style="color:var(--bs-orange)">2000<span style="font-size:15px;">元</span></h4> -->
        <nav class="how2-subtitle mt-2">
          <div>
            <van-icon name="medal" size="20px" color="var(--orange)" />
            <p>醫生真實</p>
          </div>
          <div>
            <van-icon name="coupon" size="20px" color="var(--orange)" />
            <p>未接診隨時退</p>
          </div>
          <div>
            <van-icon name="service" size="20px" color="var(--orange)" />
            <p>不滿意可申訴退款</p>
          </div>
        </nav>
        <footer class="mt-2 how2-footer">
          <p>1. 用戶透過實體寄件方式,寄出病史。</p>
          <p>2. 醫生問診不限交流次數。</p>
          <p>3. 醫生給出明確建議後問診結束。</p>
          <p>4. 醫生接診後問診最長開啟48小時, 預期自動結束。</p>
        </footer>
      </main>
    </nav>
    <h4 class="mt-4" style="transform:translateX(10px)">服務流程</h4>
    <footer class="detail-footer pb-5 pr-1 mb-5">
      <span data-msg="線上預約">
        <img src="card.svg" />
      </span>
      <van-icon name="arrow" />
      <span data-msg="病情描述">
        <img src="note.svg" />
      </span>
      <van-icon name="arrow" />
      <span data-msg="醫生回覆">
        <img src="send.svg" />
      </span>
      <van-icon name="arrow" />
      <span data-msg="問診結束">
        <img src="medical-personnel-doctor.svg" />
      </span>
    </footer>
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
  > main:first-child {
    width: 97vw;
    height: auto;
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
.how2-subtitle {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-gap: 3px;
  justify-content: space-around;
  p {
    font-size: 14px;
  }
  > div {
    display: grid;
    grid-template-columns: max-content max-content;
  }
}
.how2-footer {
  grid-column: 1/-1;
  display: grid;
  grid-template-columns: 1fr;
  p {
    margin-bottom: 0.6rem;
    margin-left: 1rem;
  }
}
.detail-footer {
  display: grid;
  grid-template-columns: repeat(7, max-content);
  justify-content: space-around;
  padding-top: 20px;
  > span {
    border: 1px solid var(--bs-orange);
    display: grid;
    place-items: center;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    position: relative;
    &::after {
      position: absolute;
      content: attr(data-msg);
      font-size: 14px;
      bottom: 0px;
      display: black;
      left: 0%;
      width: 100px;
      transform: translateY(20px);
      color: var(--dark);
    }
  }
  i {
    transform: translateY(22px);
    color: var(--bs-orange);
    font-size: 20px;
  }
}
</style>
