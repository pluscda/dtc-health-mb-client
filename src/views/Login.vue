<template>
  <section class="dtc-login">
    <img class="dtc-avator" :src="avatorImg" />
    <h4>{{ userName }}</h4>
    <section class="dtc-report" @click="viewOrderHistory">
      <h5>預約紀錄</h5>
      <h6>{{ orderCount }}</h6>
    </section>
    <section class="dtc-report" @click="viewMyCollection">
      <h5>我的收藏</h5>
      <h6>0</h6>
    </section>
  </section>
</template>

<script>
import { store, mutations, actions } from "@/store/global.js";

const titles = ["預約紀錄(6)", "提問(5)", "意見反饋(1)", "我的收藏(2)", "系統設置"];

const labels = ["共有6筆記錄", "你有一則已答覆", "廠商有兩則反饋", "你有兩個收藏", "客製化個人設定"];
export default {
  name: "loginHome",
  data() {
    return {
      orderCount: 0,
      collectionCount: 0,
    };
  },
  computed: {
    avatorImg() {
      const str = store.lineProfile?.pictureUrl;
      return str ? str : "http://unsplash.it/126/126";
    },
    userName() {
      const str = store.lineProfile?.displayName;
      return str ? str : "DTC Testing User";
    },
  },
  components: {},
  methods: {
    async viewOrderHistory() {
      if (!this.orderCount) return;
      this.$router.push("myorderlist");
    },
    async viewMyCollection() {
      if (!this.collectionCount) return;
      this.$router.push("mycollectionlist");
    },
    async getOrderHistoryList() {
      this.orders = [];
      let qs = "orderPhoneNum_eq=" + window.lineId;
      qs += "&_sort=orderDate:desc";
      try {
        this.loadingApi = true;
        const { count, items } = await actions.getOrders(qs);
        this.orderCount = count;
        if (!count) return;
        const mySet = new Set(items.map((s) => "phone_in=" + s.doctorPhone));
        qs = [...mySet].join("&");
        const { items: docs } = await actions.getDoctors(qs);
        // attach the doctor detail into each order here
        docs.forEach((s) => (items.find((s2) => s2.doctorPhone == s.phone).details = s));
        this.orders = items;
      } catch (e) {
        alert("error getOrderHistoryList: " + e);
      } finally {
        this.loadingApi = false;
      }
    },
  },
  mounted() {
    this.getOrderHistoryList();
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
.dtc-login {
  background: var(--strapi-blue);
  width: 100vw;
  position: relative;
  overflow: hidden;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dtc-avator {
  width: 126px;
  height: 126px;
  border-radius: 50%;
  object-fit: cover;
  justify-self: center;
  filter: drop-shadow(1px 1px 2px #000);
}
h4 {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 16px;
  /* identical to box height, or 80% */
  justify-self: center;
  color: #2a4262;
  margin-top: 14px;
}
.dtc-report {
  margin-top: 50px;
  display: grid;
  place-items: center;
  padding: 1rem;

  h5 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    /* identical to box height, or 100% */
    color: #9cb1d8;
    font-size: 20px;
  }
  h6 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;

    line-height: 16px;
    /* identical to box height, or 89% */
    font-size: 24px;
    color: #3b516e;
  }
}
</style>
