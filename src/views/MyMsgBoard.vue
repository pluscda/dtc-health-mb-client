<template>
  <section class="doc-list">
    <van-nav-bar title="線上看診紀錄"> </van-nav-bar>
    <main v-for="(item, i) in orders" :key="i" class="doc-item mt-1">
      <van-card v-if="item.details" :price="item.details.price" currency="NT" :desc="getDesc(item)" :title="getTitle(item)" :thumb="getImgPath(item, i)">
        <template #tags>
          <div class="my-tags-grid">
            <div style="color:var(--bs-blue)">{{ $formatStatus(item.orderStatus) }}</div>
          </div>
        </template>
        <template #footer>
          <div class="my-tags-grid3">
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
      <nav style="color:white;font-size:14px;" class="mt-1" v-if="item.judge">
        <h5 class="pl-1" style="color:black;">醫師診斷報告</h5>
        <div class="px-2">
          <van-cell-group class="mb-2" v-if="item.report">
            <van-field label="病患姓名" readonly :value="item.report.name" />
            <van-field label="身份證號" readonly :value="item.report.personId" />
          </van-cell-group>
          <div style="color:black;font-size:14px;" class="pl-2 pb-3">{{ item.judge }}</div>
        </div>
      </nav>
    </main>
    <nav style="color:white;font-size:14px;" class="mt-1">
      <h5 class="pl-1" style="color:black;">留言區</h5>
      <div
        class="comment-dtc px-2 py-2"
        v-for="(note, idxkey) in orderMsgs"
        :key="idxkey"
        :style="note.docComment ? 'background:#1f7cd3;' : 'background:#f3d6d2;color:black;'"
      >
        <div class="mb-1 msg-line-grid">
          <span>{{ $twDate(note.commentAt, "@") }}</span>
        </div>
        <div>{{ note.docComment ? "醫生說" : "我留言" }}: {{ note.docComment || note.userComment }}</div>
      </div>
    </nav>
    <footer>
      <van-field autosize v-model="myMsg" rows="2" type="textarea" placeholder="請輸入留言..."> </van-field>
      <div class="my-tags-grid">
        <van-button type="primary" size="small" class="ml-2" @click.stop="addComment(myMsg)" :disabled="!myMsg">新增留言</van-button>
      </div>
    </footer>
  </section>
</template>

<script>
import Vue from "vue";
import { store, mutations, actions } from "@/store/global.js";
import queryString from "qs";

export default {
  name: "mymsgboard2",
  data() {
    return {
      orderMsgs: [],
      myMsg: "",
      loadingApi: true,
      orders: [],
    };
  },
  computed: {},
  methods: {
    getMyCount(message) {
      return message.filter((s) => s.userComment).length;
    },
    getDoctCount(message) {
      return message.filter((s) => s.docComment).length;
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
    async addComment(msg) {
      const obj = { docComment: "", commentAt: new Date().toISOString(), rating: 0, userComment: msg, read: false };
      if (!this.orders[0].message) {
        this.orders[0].message = [];
      }
      this.orders[0].message.unshift(obj);
      await actions.updateOrder(this.orders[0]);
      Vue.$toast.success("新增留言成功");
      this.orders = [...this.orders];
      let url = store.lineUrl + "orderid=" + this.orders[0].id;
      let name = this.orders[0].lineClientDisplayName ? this.orders[0].lineClientDisplayName : store.lineProfile.displayName;
      name ? "" : (name = "DTC Tester");
      const lineMsg = `您的客戶: ${name}\n新增留言:\n${msg}\n\n${url}`;
      const lineId = this.orders[0].doctorPhone; //this.orders[0].doctorPhone.length > 10 ? this.orders[0].doctorPhone : "U60dea79b6fcd77b9c9e3eeb21fcce0a1";
      actions.lineMsg({ id: lineId, msg: lineMsg });
      this.myMsg = "";
      this.orderMsgs = [...this.orders[0].message].reverse();
    },
    async getOrderHistoryList() {
      this.orders = [];
      const str = location.href.split("?")[1];
      const { id } = queryString.parse(str);
      let qs = "id=" + id;
      try {
        this.loadingApi = true;
        const { count, items } = await actions.getOrders(qs);
        if (!count) return;
        qs = "phone=" + items[0].doctorPhone;
        const { items: docs } = await actions.getDoctors(qs);
        items[0].details = docs[0];
        this.orders = items;
        this.orderMsgs = [...this.orders[0].message].reverse();
      } catch (e) {
        alert("error getOrderHistoryList: " + e);
      } finally {
        this.loadingApi = false;
      }
    },
  },
  mounted() {
    store.selectedDoctor ? (this.orders = [{ ...store.selectedDoctor }]) : this.getOrderHistoryList();
    store.selectedDoctor = "";
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
.clip-judge {
  position: fixed;
  z-index: 2;
  top: 132px;
  left: 0px;
  right: 0;
  bottom: 51px;
  width: 100vw;
  height: auto;
  background: rgba(#000, 0.7);
  clip-path: inset(100% 0 0 0);
  transition: clip-path 0.5s ease-in-out;
}
.show-detail-judge {
  clip-path: inset(0 0 0 0) !important;
}
.judge-content {
  color: black;
  background: var(--snap-blue);
  max-height: calc(100vh - 51px - 133px);
  overflow: hidden;
  overflow-y: auto;
  font-size: 13px;
}
.doc-list {
  //background: var(--strapi-blue);
  position: relative;
  width: 100vw;
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

.mark-as-read,
.click-4-more {
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
.click-4-more {
  width: 99px;
  border: none;
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
.judge-content {
  padding: 10px;
  height: 80vh;
}
</style>
