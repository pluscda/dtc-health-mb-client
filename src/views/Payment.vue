<template>
  <section class="doc-list pt-2">
    <van-overlay :show="loadingApi" style="z-index:9999;text-align:center">
      <van-loading type="spinner" />
    </van-overlay>
    <header>預約線上名醫</header>

    <main v-for="(item, i) in docs" :key="i" class="doc-item mt-1">
      <van-card @click="viewDetail(item)" :price="item.price" currency="NT" :desc="getDesc(item)" :title="getTitle(item)" :thumb="getImgPath(item, i)"> </van-card>
    </main>
    <h5 style="color:black;margin-top:10px;transform:translateX(10px)">請填寫基本資料</h5>
    <van-form @submit="submitCard">
      <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" :rules="[{ required: true, message: '請填寫用户名' }]" />
      <van-field v-model="email" type="email" name="密码" label="電子信箱" placeholder="電子信箱" :rules="[{ required: true, message: '請填寫電子信箱' }]" />
      <h5 style="color:black;margin-top:10px;transform:translateX(10px)">信用卡</h5>
      <div id="tappay-container"></div>
      <div style="margin: 16px;">
        <van-button :disabled="!enableSubmitBtn" round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </section>
</template>

<script>
import Vue from "vue";
import { store, mutations, actions } from "@/store/global.js";
export default {
  name: "docList",
  data() {
    return {
      id: "",
      name: "",
      docs: [],
      cates: [],
      skip: 0,
      cat: "",
      searchBy: "",
      myPreviousOrders: [],
      loadingApi: false,
      jsonOutput: "",
      favList: [],
      username: "",
      email: "",
      canGetPrime: false,
    };
  },
  computed: {
    unFinishOrders() {
      return this.myPreviousOrders.filter((s) => s.status != "finish");
    },
    enableSubmitBtn() {
      return this.canGetPrime && this.email && this.username;
    },
  },
  methods: {
    async submitCard() {
      this.loadingApi = true;
      const item = this.docs[0];
      const payObj = {};
      TPDirect.card.getPrime(async (result) => {
        payObj.partner_key = store.tappayId;
        payObj.prime = `${result.card.prime}`;
        payObj.amount = +item.price;
        payObj.merchant_id = "pluscda_CTBC";
        payObj.details = item.name;
        const cardInfo = {
          phone_number: "+886928012588",
          name: this.username ? this.username : "DTC Tester",
          email: this.email ? this.email : "DTC@dd.com",
          zip_code: "100",
          address: "台北市天龍區芝麻街1號1樓",
          national_id: "A123456789",
        };
        payObj.cardholder = cardInfo;
        try {
          await actions.confirmPayOnline(payObj);
          this.book(item);
        } catch (e) {
          this.loadingApi = false;
          alert("" + e);
        }
      });
    },
    async book(item) {
      window.orderedDocPhone = item.phone;
      const orderItem = {
        lineClientDisplayName: store.lineProfile.displayName ? store.lineProfile.displayName : "DTC Tester",
        realName: item.name,
        orderPhoneNum: window.lineId,
        paidAmount: item.price,
        orderStatus: "waiting",
        orderDate: new Date().toISOString(),
        doctorPhone: item.phone,
        inqueryCate: 1, //this.searchBy != "熱門醫生" ? this.cates.find((s) => s.name.includes(this.searchBy)).cid : item.cid,
        cusUnreadMsg: 1,
        totalMsg: 1,
        message:
          item.cid < store.MIN_NON_CANCER_NUM
            ? [
                {
                  docComment: "需要您的報告,請您用郵件寄出",
                  commentAt: new Date().toISOString(),
                },
              ]
            : [],
      };
      try {
        this.loadingApi = true;
        const ret = await actions.addOrder(orderItem);
        Vue.$toast.success("您已預約成功");
        await this.getOrderHistory();
        this.docs = [...this.docs];
        const lineId = item.orderPhoneNum?.length > 10 ? item.orderPhoneNum : "U60dea79b6fcd77b9c9e3eeb21fcce0a1";
        const obj2 = { id: lineId };
        const im = `你有一筆新訂單NT${orderItem.paidAmount}元,客戶名稱: ${orderItem.lineClientDisplayName}`;
        obj2.msg = im;
        await actions.lineMsg(obj2);
        if (item.cid < store.MIN_NON_CANCER_NUM) {
          const obj3 = { id: window.lineId };
          obj3.msg = "需要您的報告,請您用郵件寄出\n新北市中和區中正路866號15F 合華科技股份有限公司";
          await actions.lineSelf(obj3);
        }
        this.$router.push("/myorderlist");
      } catch (e) {
        Vue.$toast.error("order fail" + e);
      } finally {
        window.orderedDocPhone = "";
        this.loadingApi = false;
      }
    },
    getBooksNum() {
      return 3;
    },
    viewDetail(item) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      const ok = this.isOrderAble(item);
      ok ? (item.status = "waiting") : (item.status = "finish");
      store.selectedDoctor = item;
      this.$router.push("doctordetails");
    },
    getDesc(item) {
      return "擅長: " + item.description;
    },
    getTitle(item) {
      return item.name + " | " + item.hospital + " | " + item.title;
    },
    getImgPath(item, i) {
      return store.imgPrefix + item.cover.url;
    },
    async getDocList() {
      try {
        this.docs = [store.bookItem];
      } catch (e) {}
    },
    async getOrderHistory() {},
    constructTapPay() {
      actions.initTapPay("#tappay-container");
      TPDirect.card.onUpdate(async (update) => {
        this.canGetPrime = update.canGetPrime;
      });
    },
  },
  async mounted() {
    try {
      this.loadingApi = true;
      await this.getDocList();
      this.cates = await actions.getCancerTypes();
      setTimeout(() => this.constructTapPay(), 800);
    } catch (e) {
      alert("error " + e);
    } finally {
      this.loadingApi = false;
    }
  },
  watch: {},
};
</script>
<i18n>
{
  "zh-tw": {
    "title": "名醫會館"
    
  },
  "zh-cn": {
    "title": "名医会馆"
  }
}
</i18n>

<style lang="scss" scoped>
.doc-list {
  background: var(--strapi-blue);
  width: 100vw;
  min-height: 100vh;
  color: white;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-bottom: 100px;
  header {
    font-size: 20px;
    text-align: center;
    color: black;
  }
}
.doc-item {
  border-bottom: 1px solid #ebedf0;
}
#tappay-container {
  font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
  margin: 0;
  outline: 0;
  -webkit-appearance: none;
  line-height: 1.21428571em;
  padding: 0.578571em 1em;
  font-size: 1em;
  background: #fff;
  border: 1px solid rgba(34, 36, 38, 0.15);
  color: rgba(0, 0, 0, 0.87);
  border-radius: 0.28571429rem;
  box-shadow: 0 0 0 0 transparent inset;
  -webkit-transition: color 0.1s ease, border-color 0.1s ease;
  transition: color 0.1s ease, border-color 0.1s ease;
  width: 100%;
  height: 60px;
}
</style>
