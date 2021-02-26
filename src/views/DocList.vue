<template>
  <section class="doc-list pt-2">
    <van-overlay :show="loadingApi" style="z-index:9999;text-align:center">
      <van-loading type="spinner" />
    </van-overlay>
    <header>{{ searchBy.includes("熱門") ? "熱門" : searchBy }}名醫</header>

    <main v-for="(item, i) in docs" :key="i" class="doc-item mt-1">
      <van-card @click="viewDetail(item)" :price="item.price" currency="NT" :desc="getDesc(item)" :title="getTitle(item)" :thumb="getImgPath(item, i)">
        <template #tags>
          <van-tag plain type="danger">可預約數量剩餘({{ getBooksNum() }})</van-tag>
        </template>
        <template #footer>
          <van-button size="small" class="mr-2" @click.stop="addCollection(item)">收藏</van-button>
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
      jsonOutput: "",
      favList: [],
    };
  },
  computed: {
    unFinishOrders() {
      return this.myPreviousOrders.filter((s) => s.status != "finish");
    },
  },
  methods: {
    async getMyFav() {
      let qs = "userId=" + window.lineId;
      const { items } = await actions.getMyFav(qs);
      this.favList = items;
    },
    isOrderAble(item) {
      return !this.unFinishOrders.find((s) => s.orderPhoneNum == window.lineId && s.doctorPhone == item.phone);
    },
    getWaitStatus(item) {
      const status = this.unFinishOrders.find((s) => s.orderPhoneNum == window.lineId && s.doctorPhone == item.phone).status;
      return status == "process" ? "醫師處理中" : "等待醫師回覆中";
    },
    async addCollection(item) {
      const obj = { userId: window.lineId, doctorPhone: item.phone };
      const ret = this.favList?.find((s) => s.doctorPhone == item.phone);
      if (ret) {
        Vue.$toast.success("您已收藏成功");
        return;
      }
      try {
        await actions.addMyFav(obj);
        Vue.$toast.success("您已收藏成功");
      } catch (e) {
        Vue.$toast.error("收藏 Fail");
      }
    },
    async book(item) {
      store.bookItem = item;
      this.$router.push("/payment");
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
        //url += "&state=published";
        this.docs = await axios.get(url);
      } catch (e) {}
    },
    async getOrderHistory() {
      if (!window.lineId) {
        this.myPreviousOrders = [];
        return;
      }
      let qs = "orderPhoneNum_eq=" + window.lineId;
      const { count, items } = await actions.getOrders(qs);
      this.myPreviousOrders = items;
    },
  },
  async mounted() {
    setTimeout(
      () =>
        window.scrollTo({
          top: 10,
          behavior: "smooth",
        }),
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      }),
      300
    );
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
    this.getMyFav();
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
//1px solid #ebedf0
</style>
