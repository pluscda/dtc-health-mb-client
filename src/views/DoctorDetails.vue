<template>
  <section class="dtc-detail">
    <van-nav-bar title="線上預約" left-text="返回" left-arrow @click-left="onClickLeft" />
    <van-overlay :show="loadingApi" style="z-index:9999;text-align:center">
      <van-loading type="spinner" />
    </van-overlay>
    <main class="dtc-detail__content">
      <img :src="docImg" class="left" width="80" height="80" />
      <div class="right mt-2">
        <h4>
          {{ doctor.name }}<span style="font-size:0.9rem;display:inline-block;margin-left:10px;color:var(--bs-dark-gray)">{{ doctor.title }}</span>
        </h4>
        <p style="font-size:13px;">{{ doctor.hospital || (doctor.position && doctor.position.length && doctor.position[0].name) }}</p>
        <p>台灣台北市</p>
      </div>
    </main>
    <main class="px-2">
      <p style="font-size:14px;">擅長: {{ doctor.description }}</p>
    </main>
    <nav class="how2 mt-2">
      <main class="how2-title">
        <van-icon name="vip-card" color="var(--bs-orange)" size="60px" />
        <h4 class="pt-3">線上諮詢</h4>
        <div></div>
        <van-button @click="book(doctor)" v-if="doctor.status != 'finish'" round color="var(--bs-orange)" style="transform:translateY(6px)"
          >訂閱服務{{ doctor.price }}元</van-button
        >
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
import { store, mutations, actions } from "@/store/global.js";
export default {
  name: "docdetails",
  data() {
    return {
      doctor: store.selectedDoctor,
      loadingApi: false,
    };
  },
  computed: {
    docImg() {
      return store.imgPrefix + this.doctor.cover.url;
    },
  },
  components: {},
  methods: {
    async book(item) {
      sessionStorage.orderedDocPhone = item.phone;
      if (!sessionStorage.token) {
        this.$router.push("/login?callback=doclist");
        return;
      }
      const obj = {
        orderPhoneNum: sessionStorage.phone,
        paidAmount: item.price,
        status: "waiting", // process and finish
        orderDate: new Date().toISOString(),
        doctorPhone: item.phone,
        isCancer: item.cid < store.MIN_NON_CANCER_NUM ? true : false,
        hardCopyReceived: false,
        copySendBack: false,
        docHasCopy: false,
        comment:
          item.cid < store.MIN_NON_CANCER_NUM
            ? [
                {
                  docComment: "需要你的癌症報告,請你用郵件寄出",
                  commentAt: new Date().toISOString(),
                  rating: 0,
                  userComment: "",
                },
              ]
            : [],
      };
      try {
        this.loadingApi = true;
        await actions.addOrder(obj);
        Vue.$toast.success("你已預約成功");
      } catch (e) {
        Vue.$toast.error("order fail");
      } finally {
        sessionStorage.orderedDocPhone = "";
        this.loadingApi = false;
      }
    },
    onClickLeft() {
      this.$router.go(-1);
    },
  },
  mounted() {
    //alert(this.doctor.status);
  },
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
