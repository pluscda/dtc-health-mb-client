<template>
  <section class="doc-list">
    <van-overlay :show="loadingApi" style="z-index:999;text-align:center;">
      <van-loading type="spinner" />
    </van-overlay>
    <van-nav-bar title="我的預約紀錄" left-text="返回" left-arrow @click-left="$router.push('login')">
      <template #right>
        <van-tag round v-if="commentFilter" type="primary" class="ml-2" @click="commentFilter = ''">離開留言區</van-tag>
      </template>
    </van-nav-bar>

    <van-field
      v-if="showLeavelMsg"
      autofocus="true"
      v-model="myMsg"
      rows="5"
      autosize
      label="留言"
      type="textarea"
      maxlength="150"
      placeholder="请输入留言"
      show-word-limit
    >
      <template #button>
        <van-tag type="primary" class="ml-2" @click="addComment(myMsg, true)">新增</van-tag>
        <van-tag type="danger" class="ml-2" @click="showLeavelMsg = false">取消</van-tag>
      </template>
    </van-field>
    <div></div>

    <main v-for="(item, i) in orders" :key="i" class="doc-item mt-1" v-if="item.details">
      <van-card @click="viewDetail(item)" :price="item.details.price" currency="NT" :desc="getDesc(item)" :title="getTitle(item)" :thumb="getImgPath(item, i)">
        <template #tags>
          <van-tag plain type="danger">{{ $formatStatus(item.status) }}</van-tag>
          <van-tag plain type="primary" style="transform:translateX(5px)" @click="viewComment(item)">可查看留言為{{ item.comment.length }}則</van-tag>
          <van-tag type="primary" class="ml-2" style="transform:translateX(10px)" @click="addComment()" v-if="commentFilter">新增留言</van-tag>
        </template>
        <template #footer>
          <van-tag type="success" v-if="item.status == 'finish'">再次預約</van-tag>
        </template>
      </van-card>
    </main>
    <nav v-if="commentFilter" style="color:white;font-size:14px;" class="mt-1">
      <div class="comment-dtc px-2 py-2" v-for="(item, i) in orders[0].comment" :key="i" :style="item.docComment ? 'background:#1f7cd3;' : 'background:#0f579b;'">
        <div class="mb-1">{{ $twDate(item.commentAt) }}</div>
        <div style="padding-right:50px;">{{ item.docComment || item.userComment }}</div>
        <div style="float:right;margin-top:-30px;">
          <img v-if="item.docComment" src="https://www.cgh.org.tw/rwd101/Store/bImages/b07907.jpg" width="30" height="30" style="border-radius:50%;" />
          <img v-if="!item.docComment" src="person.svg" width="30" height="30" style="border-radius:50%;color:red;" />
        </div>
      </div>
    </nav>
  </section>
</template>

<script>
import Vue from "vue";
import { store, mutations, actions } from "@/store/global.js";

export default {
  name: "login",
  data() {
    return {
      docs: [],
      skip: 0,
      orders: [],
      commentFilter: "",
      showLeavelMsg: false,
      myMsg: "",
      price: "",
      loadingApi: false,
    };
  },
  computed: {},
  methods: {
    async book(item) {
      const obj = {
        orderPhoneNum: sessionStorage.phone,
        paidAmount: item.details.price,
        status: "waiting", // process and finish
        orderDate: new Date().toISOString(),
        doctorPhone: item.details.phone,
        isCancer: item.details.cid < store.MIN_NON_CANCER_NUM ? true : false,
        hardCopyReceived: false,
        copySendBack: false,
        docHasCopy: false,
        comment:
          item.details.cid < store.MIN_NON_CANCER_NUM
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
        await this.getOrderHistoryList();
      } catch (e) {
        Vue.$toast.error("order fail");
      } finally {
        sessionStorage.orderedDocPhone = "";
        this.loadingApi = false;
      }
    },
    async addComment(msg, userClick) {
      if (!msg && !userClick) {
        this.myMsg = "";
        this.showLeavelMsg = true;
      } else if (msg) {
        const obj = { docComment: "", commentAt: new Date().toISOString(), rating: 0, userComment: msg };
        this.orders[0].comment.unshift(obj);
        await actions.updateOrder(this.orders[0]);
        this.orders = [...this.orders];
        this.commentFilter = "";
        this.showLeavelMsg = false;
      }
    },
    viewComment(item) {},
    viewDetail(item) {
      this.commentFilter = item.doctorPhone;
    },
    getDesc(item) {
      return "專長: " + item.details.description;
    },
    getTitle(item) {
      return item.details.name + " | " + item.details.hospital + " | " + item.details.title + " @ " + this.$twDate(item.orderDate) + " 預約成功";
    },
    getImgPath(item, i) {
      return store.imgPrefix + item.details.cover.url;
    },
    async getOrderHistoryList() {
      this.orders = [];
      let qs = "orderPhoneNum_eq=" + sessionStorage.phone;
      qs += "&_sort=orderDate:desc";
      try {
        this.loadingApi = true;
        const { count, items } = await actions.getOrders(qs);
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
.doc-list {
  background: var(--strapi-blue);
  width: 100vw;
  height: 100vh;
  margin-bottom: 90px;
  color: white;
  //overflow-y: auto;
  header {
    font-size: 20px;
    text-align: center;
    padding-top: 3px;
  }
}
.doc-item {
  border-bottom: 1px solid #ebedf0;
}
.comment-dtc {
  margin-bottom: 2px;
  padding-right: 4px;
  font-size: 12px;
}
</style>
