<template>
  <section class="doc-list">
    <van-nav-bar v-if="!commentFilter" title="我的預約紀錄" left-text="返回" left-arrow @click-left="$router.push('login')"> </van-nav-bar>

    <van-nav-bar v-if="commentFilter" title="留言紀錄" left-text="返回" left-arrow @click-left="commentFilter = false">
      <!-- <template #right>
        <van-tag round v-if="commentFilter && orders.length > 1" type="primary" class="ml-2" @click="commentFilter = ''">離開留言區</van-tag>
      </template> -->
    </van-nav-bar>
    <van-overlay :show="loadingApi" style="text-align:center;">
      <van-loading type="spinner" />
    </van-overlay>

    <main v-for="(item, i) in myOrders" :key="i" class="doc-item mt-1" v-show="item.details">
      <van-card
        v-if="item.details"
        @click="viewDetail(item)"
        :price="item.details.price"
        currency="NT"
        :desc="getDesc(item)"
        :title="getTitle(item)"
        :thumb="getImgPath(item, i)"
      >
        <template #tags>
          <div class="my-tags-grid" @click="showLeavelMsg = true">
            <div style="color:var(--bs-blue)">{{ $formatStatus(item.orderStatus) }}</div>
          </div>
        </template>
        <template #footer>
          <div class="my-tags-grid3" @click="showLeavelMsg = true">
            <div></div>
            <van-badge :content="getMyCount(item.message)" color="rgb(25, 137, 250)">
              <div class="my-msg">我的留言</div>
            </van-badge>
            <van-badge :content="getDoctCount(item.message)" color="rgb(25, 137, 250)">
              <div class="my-doc-msg">醫生留言</div>
            </van-badge>
          </div>
        </template>
      </van-card>
    </main>
    <nav v-if="commentFilter" style="color:white;font-size:14px;" class="mt-1">
      <div
        class="comment-dtc px-2 py-2"
        v-for="(note, idxkey) in orderMsgs"
        :key="idxkey"
        :style="note.docComment ? 'background:#1f7cd3;' : 'background:#f3d6d2;color:black;'"
      >
        <div class="mb-1 msg-line-grid">
          <span>{{ $twDate(note.commentAt) }}</span>
          <span>{{ getMsgStatus(note) }}</span>
          <van-icon name="pending-payment" size="20px" v-if="getMsgStatus(note).includes('醫生未讀取')" />
          <van-icon name="certificate" color="green" size="20px" v-if="getMsgStatus(note).includes('醫生已讀取')" />

          <span class="mark-as-read" v-if="!note.read && note.docComment" @click.stop="updateReadStatus(note)">註記已讀</span>
        </div>
        <div style="padding-right:50px;">{{ note.docComment || note.userComment }}</div>
      </div>
    </nav>
    <footer v-if="commentFilter">
      <van-field autofocus="true" v-model="myMsg" rows="2" type="textarea" placeholder="請輸入留言..."> </van-field>
      <div class="my-tags-grid">
        <van-button
          type="primary"
          size="small"
          class="ml-2"
          @click.stop="
            loadingApi = true;
            addComment(myMsg);
          "
          :disabled="loadingApi || !myMsg"
          >新增留言</van-button
        >
        <van-tag type="warning" size="large" class="ml-2" @click.stop="commentFilter = false">離開留言區</van-tag>
      </div>
    </footer>
  </section>
</template>

<script>
//註記已讀
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
  computed: {
    myOrders() {
      if (!this.commentFilter) {
        return [...this.orders];
      }
      return this.orders.filter((s) => s.doctorPhone == this.commentFilter);
    },
    orderMsgs() {
      return [...this.myOrders[0].message].reverse();
    },
  },
  methods: {
    getMyCount(message) {
      return message.filter((s) => s.userComment).length;
    },
    getDoctCount(message) {
      return message.filter((s) => s.docComment).length;
    },
    async updateReadStatus(note) {
      this.loadingApi = true;
      note.read = true;
      await actions.updateOrder(this.myOrders[0]);
      await this.getOrderHistoryList();
      this.myMsg = "";
      this.loadingApi = false;
      //this.myOrders[0].message = [...this.myOrders[0].message];
    },
    getMsgStatus(item) {
      let str = item.userComment && item.read ? "狀態: 醫生已讀取" : "";
      if (!str) str = item.userComment && !item.read ? "狀態: 醫生未讀取" : "";
      if (!str) str = item.docComment && !item.read ? "狀態: 您未讀取" : "";
      if (!str) str = item.docComment && item.read ? "狀態: 您已讀取" : "";
      return str;
    },
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
                  docComment: "需要您的報告,請您用郵件寄出",
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
        await this.getOrderHistoryList();
      } catch (e) {
        Vue.$toast.error("order fail");
      } finally {
        sessionStorage.orderedDocPhone = "";
        this.loadingApi = false;
      }
    },
    async addComment(msg) {
      this.loadingApi = true;
      const obj = { docComment: "", commentAt: new Date().toISOString(), rating: 0, userComment: msg, read: false };
      if (!this.myOrders[0].message) {
        this.myOrders[0].message = [];
      }
      this.myOrders[0].message.unshift(obj);
      await actions.updateOrder(this.myOrders[0]);
      this.orders = [...this.orders];
      //this.commentFilter = "";
      //this.showLeavelMsg = false;
      Vue.$toast.success("新增留言成功");
      this.loadingApi = false;
    },
    viewComment(item) {
      this.commentFilter = item.doctorPhone;
    },
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
.doc-list {
  //background: var(--strapi-blue);
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

.my-msg,
.my-doc-msg {
  background: #1f7cd3 !important;
  color: white;
  font-size: 12px !important;
  padding: 0 5px;
}
.my-msg {
  background: #f3d6d2 !important;
  color: var(--dark);
}

.mark-as-read {
  display: inline-block;
  clip-path: polygon(10% 1%, 100% 0%, 100% 99%, 10% 100%, 0% 50%);
  background: linear-gradient(to right, #da5afa, #c735ec);
  height: 25px;
  width: 70px;
  text-align: center;
  color: white;
  font-size: 12px;
  line-height: 25px;
  transform: translateY(-5px);
}
.msg-line-grid {
  display: grid;
  grid-template-columns: repeat(10, max-content);
  grid-gap: 6px;
}
.my-tags-grid,
.my-tags-grid3 {
  display: grid;
  grid-template-columns: repeat(10, max-content);
  grid-gap: 6px;
}
.my-tags-grid3 {
  display: grid;
  grid-template-columns: 1fr repeat(2, max-content);
  grid-gap: 16px;
}
.my-tags-grid {
  padding: 4px;
}
</style>
