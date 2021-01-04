<template>
  <section class="doc-list pt-2">
    <header>快速找名醫</header>
    <van-search background="#1c1b7e" v-model="searchBy" shape="round" class="mx-4 mt-2" placeholder="醫院 | 醫生名 | 病名"></van-search>

    <main v-for="(item, i) in docs" :key="i" class="doc-item mt-1">
      <van-card @click="viewDetail(item)" :price="item.price" currency="NT" :desc="getDesc(item)" :title="getTitle(item)" :thumb="getImgPath(item, i)">
        <template #tags>
          <van-tag plain type="danger">可預約數量剩餘({{ getBooksNum() }})</van-tag>
        </template>
        <template #footer>
          <van-button size="mini" class="mr-2">收藏</van-button>
          <van-button size="mini" class="mr-2" @click="book(item)" v-if="isOrderAble(item)">預約</van-button>
          <van-tag plain type="primary" v-else>您已預約</van-tag>
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
      skip: 0,
      cat: "",
      searchBy: "",
      myPreviousOrders: [],
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
        isCancer: true,
        hardCopyReceived: false,
        copySendBack: false,
        docHasCopy: false,
        comment: [
          {
            docComment: "需要你的癌症報告,請你用郵件寄出",
            commentAt: new Date().toISOString(),
            rating: 0,
            userComment: "",
          },
        ],
      };
      try {
        await actions.addOrder(obj);
        Vue.$toast.success("你已預約成功");
        await this.getOrderHistory();
        this.docs = [...this.docs];
      } catch (e) {
        Vue.$toast.error("order fail");
      } finally {
        sessionStorage.orderedDocPhone = "";
      }
    },
    getBooksNum() {
      return 3;
    },
    viewDetail(item) {
      //alert();
    },
    getDesc(item) {
      return "專長: " + item.description;
    },
    getTitle(item) {
      return item.name + " | " + item.hospital + " | " + item.title;
    },
    getImgPath(item, i) {
      return store.docImgs[i];
    },
    async getDocList() {
      try {
        const url = this.id ? "doctors?cid_eq=" + this.id : `doctors?_limit=30&_start=${this.skip}`;
        this.docs = await axios.get(url);
      } catch (e) {}
    },
    async getOrderHistory() {
      let qs = "orderPhoneNum_eq=" + sessionStorage.phone;
      const { count, items } = await actions.getOrders(qs);
      this.myPreviousOrders = items;
      //alert(items.length);
    },
  },
  async mounted() {
    const { id, name } = this.$route.query;
    this.id = +id;
    this.name = name;
    this.searchBy = name ? name : "熱門醫生";
    // await order is important here
    await this.getOrderHistory();
    await this.getDocList();
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
