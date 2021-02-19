<template>
  <section class="doc-list pt-2">
    <van-overlay :show="loadingApi" style="z-index:9999;text-align:center">
      <van-loading type="spinner" />
    </van-overlay>
    <van-nav-bar title="我的收藏" left-text="返回" left-arrow @click-left="$router.push('login')"> </van-nav-bar>

    <main v-for="(item, i) in docs" :key="i" class="doc-item mt-1">
      <van-card @click="viewDetail(item)" :price="item.price" currency="NT" :desc="getDesc(item)" :title="getTitle(item)" :thumb="getImgPath(item, i)">
        <template #footer>
          <van-button size="small" type="info" class="mr-2" @click.stop="removeCollection(item)">取消收藏</van-button>
        </template>
      </van-card>
    </main>
  </section>
</template>

<script>
import Vue from "vue";
import { store, actions } from "@/store/global.js";
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
      favList: store.favList,
    };
  },
  computed: {
    unFinishOrders() {
      return this.myPreviousOrders.filter((s) => s.status != "finish");
    },
  },
  methods: {
    async removeCollection(item) {
      const favId = this.favList.find((s) => s.doctorPhone == item.phone).id;
      this.favList = this.favList.filter((s) => s.doctorPhone !== item.phone);
      try {
        await actions.removeMyFav(favId);
        Vue.$toast.success("取消收藏成功");
        this.docs = this.docs.filter((s) => s.phone != item.phone);
        if (!this.favList.length) {
          this.$router.push("login");
        }
      } catch (e) {
        Vue.$toast.error("取消收藏 Fail");
      }
    },
    viewDetail(item) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // const ok = this.isOrderAble(item);
      //ok ? (item.status = "waiting") : (item.status = "finish");
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
    async getFavList() {
      try {
        const url = `doctors?_limit=1130`;
        const items = await axios.get(url);
        this.docs = items.filter((s1) => this.favList.find((s2) => s2.doctorPhone == s1.phone));
      } catch (e) {}
    },
  },
  async mounted() {
    try {
      await this.getFavList();
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
//1px solid #ebedf0
</style>
