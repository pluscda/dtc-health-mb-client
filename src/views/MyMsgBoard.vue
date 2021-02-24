<template>
  <section class="doc-list">
    <van-nav-bar title="我的預約紀錄"> </van-nav-bar>
    <nav style="color:white;font-size:14px;" class="mt-1">
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
      <van-field autofocus="true" v-model="myMsg" rows="2" type="textarea" placeholder="請輸入留言..."> </van-field>
      <div class="my-tags-grid">
        <van-button type="primary" size="small" class="ml-2" @click.stop="addComment(myMsg)" :disabled="loadingApi || !myMsg">新增留言</van-button>
      </div>
    </footer>
  </section>
</template>

<script>
import Vue from "vue";
import { store, mutations, actions } from "@/store/global.js";
import queryString from "qs";

export default {
  name: "mymsgboard",
  data() {
    return {
      orderMsgs: [],
      myMsg: "",
      loadingApi: true,
    };
  },
  computed: {},
  methods: {
    async getOrderHistoryList() {
      this.orders = [];
      const str = location.href.split("?")[1];
      const { id } = queryString.parse(str);
      let qs = "id=" + id;
      try {
        this.loadingApi = true;
        const { count, items } = await actions.getOrders(qs);
        if (!count) return;
        this.orders = items;
      } catch (e) {
        alert("error getOrderHistoryList: " + e);
      } finally {
        this.loadingApi = false;
      }
    },
  },
  mounted() {},
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
