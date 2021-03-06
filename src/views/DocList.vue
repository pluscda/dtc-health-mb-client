<template>
  <section class="doc-list pt-2">
    <van-overlay :show="loadingApi" style="z-index:9999;text-align:center">
      <van-loading type="spinner" />
    </van-overlay>
    <header>快速找名醫</header>
    <van-search background="#1c1b7e" v-model="searchBy" shape="round" class="mx-4 mt-2" placeholder="醫院 | 醫生名 | 病名"></van-search>

    <main v-for="(item, i) in docs" :key="i" class="doc-item mt-1">
      <van-card @click="viewDetail(item)" :price="item.price" currency="NT" :desc="getDesc(item)" :title="getTitle(item)" :thumb="getImgPath(item, i)">
        <template #tags>
          <van-tag plain type="danger">可預約數量剩餘({{ getBooksNum() }})</van-tag>
        </template>
        <template #footer>
          <van-button size="small" class="mr-2">收藏</van-button>
          <van-button size="small" type="info" class="mr-2" @click.stop="book(item)" v-if="isOrderAble(item)">預約</van-button>
          <van-tag plain class="mr-2" style="transform:translate3d(4px,5px,0)" type="primary" v-else>您已預約: {{ getWaitStatus(item) }}</van-tag>
        </template>
      </van-card>
    </main>
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
    };
  },
  computed: {
    unFinishOrders() {
      return this.myPreviousOrders.filter((s) => s.status != "finish");
    },
  },
  methods: {
    isOrderAble(item) {
      return !this.unFinishOrders.find((s) => s.orderPhoneNum == sessionStorage.phone && s.doctorPhone == item.phone);
    },
    getWaitStatus(item) {
      const status = this.unFinishOrders.find((s) => s.orderPhoneNum == sessionStorage.phone && s.doctorPhone == item.phone).status;
      return status == "process" ? "醫師處理中" : "等待醫師回覆中";
    },
    async book(item) {
      sessionStorage.orderedDocPhone = item.phone;
      if (!sessionStorage.token) {
        this.$router.push("/login?callback=doclist");
        return;
      }
      const obj = {
        orderPhoneNum: sessionStorage.phone,
        paidAmount: item.price,
        orderStatus: "waiting",
        orderDate: new Date().toISOString(),
        doctorPhone: item.phone,
        inqueryCate: this.searchBy != "熱門醫生" ? this.cates.find((s) => s.name.includes(this.searchBy)).cid : item.cid,
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
        const ret = await actions.addOrder(obj);
        Vue.$toast.success("您已預約成功");
        await this.getOrderHistory();
        this.docs = [...this.docs];
        const obj = { senderPhone: sessionStorage.phone, receivePhone: item.phone, orderId: ret.id, type: "newOrder" };
        actions.sendPushMsg(obj);
      } catch (e) {
        Vue.$toast.error("order fail");
      } finally {
        sessionStorage.orderedDocPhone = "";
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
        const url = this.id ? "doctors?cid_eq=" + this.id : `doctors?_limit=30&_start=${this.skip}`;
        this.docs = await axios.get(url);
      } catch (e) {}
    },
    async getOrderHistory() {
      if (!sessionStorage.phone) {
        this.myPreviousOrders = [];
        return;
      }
      let qs = "orderPhoneNum_eq=" + sessionStorage.phone;
      const { count, items } = await actions.getOrders(qs);
      this.myPreviousOrders = items;
    },
  },
  async mounted() {
    const { id, searchBy } = this.$route.query;
    this.id = +id;
    this.name = searchBy;
    this.searchBy = searchBy ? searchBy : "熱門醫生";
    try {
      this.loadingApi = true;
      await this.getOrderHistory();
      await this.getDocList();
      this.cates = await actions.getCancerTypes();
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
  }
}
.doc-item {
  border-bottom: 1px solid #ebedf0;
}
//1px solid #ebedf0
</style>
