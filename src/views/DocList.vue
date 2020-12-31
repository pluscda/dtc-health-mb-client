<template>
  <section class="doc-list">
    <header>快速找名醫</header>
    <van-search background="#1c1b7e" v-model="searchBy" shape="round" class="mx-4 mt-2" placeholder="醫院 | 醫生名 | 病名"></van-search>
    <h3 class="mt-3 ml-4 mb-4">{{ name }}熱門醫生</h3>

    <main v-for="(item, i) in docs" :key="i" class="doc-item mt-1">
      <van-card @click="viewDetail(item)" :price="item.price" currency="NT" :desc="getDesc(item)" :title="getTitle(item)" :thumb="getImgPath(item, i)">
        <template #tags>
          <van-tag plain type="danger">可預約數量剩餘({{ getBooksNum() }})</van-tag>
        </template>
        <template #footer>
          <van-button size="mini" class="mr-2">標籤</van-button>
          <van-button size="mini" class="mr-2" @click="book(item)">預約</van-button>
        </template>
      </van-card>
    </main>
  </section>
</template>

<script>
import Vue from 'vue';
import faker from 'faker';
import { store, mutations, actions } from '@/store/global.js';

export default {
  name: 'login',
  data() {
    return {
      id: '',
      name: '',
      docs: [],
      skip: 0,
      cat: '',
      searchBy: '',
    };
  },
  methods: {
    async book(item) {
      const obj = {
        orderPhoneNum: sessionStorage.phone,
        paidAmount: item.price,
        status: 'waiting', // process and finish
        orderDate: new Date().toISOString(),
        doctorPhone: item.phone,
        isCancer: true,
        hardCopyReceived: false,
        copySendBack: false,
        docHasCopy: false,
        comment: [
          {
            docComment: '需要你的癌症報告,請你用郵件寄出',
            commentAt: new Date().toISOString(),
            rating: 0,
            userComment: '',
          },
        ],
      };
      try {
        await actions.addOrder(obj);
        Vue.$toast.success('order created');
      } catch (e) {
        Vue.$toast.error('order fail');
      }
    },
    getBooksNum() {
      return faker.random.number({
        min: 1,
        max: 10,
      });
    },
    viewDetail(item) {
      //alert();
    },
    getDesc(item) {
      return '專長: ' + item.description;
    },
    getTitle(item) {
      return item.name + ' | ' + item.hospital + ' | ' + item.title;
    },
    getImgPath(item, i) {
      return store.docImgs[i];
      //return item.cover.url; // at aws now
    },
    async getDDL() {
      const url = this.id ? 'doctors?cid_eq=' + this.id : `doctors?_limit=30&_start=${this.skip}`;
      this.docs = await axios.get(url);
    },
  },
  mounted() {
    const { id, name } = this.$route.query;
    this.id = +id;
    this.name = name;
    this.searchBy = name ? name : '熱門醫生';
    this.getDDL();
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
