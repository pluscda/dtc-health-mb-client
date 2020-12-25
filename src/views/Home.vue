<template>
  <div class="my-homepage">
    <HomeHeader></HomeHeader>
    <main class="fast-ask-doc">
      <div class="left">
        <img class="img1" src="https://unsplash.it/80/110" />
      </div>
      <div class="right mt-2">
        <h3 style="margin-left:10px;"></h3>
        <div>{{ $t("oneMin") }}</div>
        <div class="dtc-private">{{ $t("private") }}</div>
        <footer class="faster-footer" style="margin-left:10px;">
          <div>{{ $t("w1") }}</div>
          <div>/</div>
          <div>{{ $t("w2") }}</div>
          <div>/</div>
          <div>{{ $t("w3") }}</div>
        </footer>
      </div>
    </main>
    <main class="faster2">
      <div>
        <span>✣</span>
        <span class="fast-span" :data-msg="$t('各大醫院快速看病')">{{ $t("預約掛號") }}</span>
      </div>
      <div class="ml-2">
        <span style="background:#878ede;">❁</span>
        <span class="fast-span" :data-msg="$t('專家名醫在線解答')">{{ $t("找名醫") }}</span>
      </div>
    </main>
    <main class="hot-search">
      <div></div>
      <div>{{ $t("熱搜") }}:</div>
      <div v-for="(item, i) in cancers.slice(0, 6)" :key="i" style="margin-left:7px;color:blue;font-size:14px;">
        {{ $t(item.name) }}
      </div>
    </main>

    <main class="icon-search">
      <h4 class="mb-2">
        {{ $t("選科室問醫生") }} <span>{{ $t("自選科室專屬醫師對症下藥") }}</span>
      </h4>
      <nav class="list-grid-icons">
        <div @click="viewList(item)" v-for="(item, i) in cancers" :key="item.name" :data-msg="$t(item.name)" :class="i > 4 ? 'items-text2' : 'items-text'">
          <img :src="'https://unsplash.it/60/6' + i" />
          <!-- <span> {{ $t(item) }}</span> -->
        </div>
      </nav>
    </main>
    <main class="inquery">
      <h2 style="font-size:23px;">
        {{ $t("專業諮詢") }} <span>{{ $t("省時省心名醫指導好的快") }}</span>
      </h2>
      <nav class="grid-2">
        <div>
          <div class="button-dtc mt-3">{{ $t("月經異常") }}</div>
          <h4 class="mt-3">{{ $t("關愛女性健康") }}</h4>
          <img src="yoga.gif" />
        </div>
        <div>
          <div class="button-dtc love-btn mt-3">{{ $t("伴侶出軌") }}</div>
          <h4 class="mt-3">{{ $t("愛情急診室") }}</h4>
          <img src="phone.gif" />
        </div>
      </nav>
    </main>
  </div>
</template>
<i18n>
{
  "zh-tw": {
    "快速問醫生": "快速問醫生",
    "oneMin":"1分鐘速配醫生",
    "private":"隱私保護",
    "w1":"循診推薦醫師",
    "w2":"一對一在線諮詢",
    "w3":"開藥送到家",
    "預約掛號":"預約掛號",
    "找名醫": "找名醫",
    "熱搜":"熱搜",
    "大腸癌":"大腸癌",
    "肺癌":"肺癌",
    "女性乳癌":"女性乳癌",
    "肝癌":"肝癌",
    "口腔癌":"口腔癌",
    "攝護腺癌":"攝護腺癌",
    "甲狀腺癌":"甲狀腺癌",
    "各大醫院快速看病":"各大醫院快速看病",
    "專家名醫在線解答":"專家名醫在線解答",
    "選科室問醫生":"選科室 問醫生",
    "醫療首頁":"醫療首頁",
    "我的":"我的",
    "找醫師":"找醫師",
    "標籤":"標籤",
    "大排名醫問診":"大排名醫問診",
    "專業諮詢":"專業諮詢",
    "關愛女性健康":"關愛女性健康",
    "愛情急診室":"愛情急診室",
    "省時省心名醫指導好的快":"省時省心 名醫指導好的快",
    "月經異常":"月經異常",
    "伴侶出軌":"伴侶出軌",
    "自選科室專屬醫師對症下藥":"自選科室 專屬醫師 對症下藥"
  },
  "zh-cn": {
    "快速問醫生": "快速问医生",
    "oneMin":"1分钟速配医生",
    "private":"隐私保护",
    "w1":"循诊推荐医师",
    "w2":"一对一在线谘询",
    "w3":"开药送到家",
    "預約掛號":"预约挂号",
    "找名醫": "找名医",
    "熱搜":"热搜",
    "大腸癌":"大肠癌",
    "肺癌":"肺癌",
    "女性乳癌":"女性乳癌",
    "肝癌":"肝癌",
    "口腔癌":"口腔癌",
    "攝護腺癌":"摄护腺癌",
    "甲狀腺癌":"甲状腺癌",
    "各大醫院快速看病":"各大医院快速看病",
    "專家名醫在線解答":"专家名医在线解答",
    "選科室問醫生":"选科室 问医生",
    "醫療首頁":"医疗首页",
    "我的":"我的",
    "找醫師":"找医师",
    "標籤":"标签",
    "大排名醫問診":"大排名醫問診",
    "專業諮詢":"专业谘询",
    "關愛女性健康":"关爱女性健康",
    "愛情急診室":"爱情急診室",
    "省時省心名醫指導好的快":"省時省心 名醫指導好的快",
    "月經異常":"月经异常",
    "伴侶出軌":"伴侣出轨",
    "自選科室專屬醫師對症下藥":"自选科室 专属医师 对症下药"
  }
}
</i18n>
<script>
import { store, mutations, actions } from "@/store/global.js";
import queryString from "query-string";
import HomeHeader from "@/components/HomeHeader";
let types = "大腸癌,肺癌,女性乳癌,肝癌,口腔癌,攝護腺癌,甲狀腺癌,胃癌,皮膚癌,食道癌".split(",");

export default {
  name: "home",
  data() {
    return {
      types,
      active: 0,
      cancers: [],
    };
  },
  components: {
    HomeHeader,
  },
  methods: {
    async viewList(item) {
      const obj = { id: item.cid, name: item.name };
      const str = queryString.stringify(obj);
      this.$router.push("doclist?" + str);
    },
    async getDDL() {
      this.cancers = await actions.getCancerTypes();
      store.cancers = [...this.cancers];
    },
  },
  mounted() {
    store.activeTab = 0;
    this.getDDL();
  },
};
</script>

<style lang="scss" scoped>
.my-homepage {
  width: 100vw;
  padding: 3px;
  margin-bottom: 90px;
  overflow-x: hidden !important;
}
</style>

<style lang="scss" scoped>
.fast-ask-doc {
  height: 147px;
  width: 100vw;
  display: grid;
  margin-top: 1rem;
  display: grid;
  background: var(--light);
  grid-template-columns: max-content max-content;
  color: black;
  .img1 {
    display: inline-block;
    width: 70px;
    height: 110px;
    object-fit: cover;
    margin-top: 10px;
    border-radius: 10px;
  }
  .right {
    position: relative;
    display: grid;
    padding: 0px;
    margin: 0px;
    display: grid;
    grid-template-columns: repeat(3, max-content);
    gap: 2px;
    h3 {
      font-size: 15px;
      margin-top: 10px;
    }
    > div {
      margin-top: 3px;
      clip-path: polygon(10% 1%, 100% 0%, 100% 99%, 10% 100%, 0% 50%);
      background: linear-gradient(to right, #da5afa, #3570ec);
      height: 30px;
      width: 110px;
      text-align: center;
      color: white;
      font-size: 12px;
      line-height: 30px;
    }
    .dtc-private {
      width: 60px;
      background: #878ede;
      color: white;
      clip-path: unset;
    }
  }
}
.faster-footer {
  position: absolute;
  display: grid;
  grid-template-columns: repeat(10, max-content);
  gap: 2px;
  top: 78px;
  left: 2px;
  font-size: 12px;
}
.divide-line {
  width: 100vw;
  height: 2px;
  background: #bababa;
}
.faster2 {
  margin: 0px;
  height: 100px;
  width: 100vw;
  background: var(--light);
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-top: 1px solid #ebedf0;
  > div {
    display: grid;
    grid-template-columns: repeat(2, max-content);
    gap: 5px;
    > span:first-child {
      height: 46px;
      width: 46px;
      border-radius: 50%;
      text-align: center;
      color: white;
      background: #8faef1;
      margin: 20px 0px;
      margin-right: 0px;
      font-size: 30px;
      line-height: 46px;
    }
    > span:last-child {
      font-size: 19px;
      display: block;
      margin-top: 22px;
    }
  }
  > div:first-child {
    border-right: 1px solid #ebedf0;
  }
}
.hot-search {
  margin-top: 10px;
  height: 30px;
  width: 100%;
  background: var(--light);
  line-height: 30px;
  display: grid;
  grid-template-columns: repeat(120, max-content);
  > div:first-child {
    width: 5px;
    height: 20px;
    background: #8faef1;
    margin-top: 5px;
  }
}
.fast-span {
  position: relative;
  &::after {
    position: absolute;
    font-size: 12px;
    top: 30px;
    width: 200px;
    left: 0px;
    content: attr(data-msg);
  }
}
.items-text,
.items-text2 {
  position: relative;
  &::after {
    position: absolute;
    font-size: 12px;
    bottom: 30px;
    left: -10px;
    text-align: center;
    width: 80px;
    content: attr(data-msg);
  }
}
.items-text2 {
  &::after {
    bottom: -15px !important;
  }
}
.icon-search {
  margin-top: 10px;
  width: 100%;
  font-size: 20px;
  display: grid;
  background: var(--light);
}

.list-grid-icons {
  display: grid;
  grid-template-columns: repeat(5, max-content);
  grid-template-rows: 110px;
  justify-content: space-between;
  box-shadow: 0 30px 0 white;

  img {
    widows: 60px;
    height: 60px;
    border-radius: 100%;
  }
}

.inquery {
  margin-top: 50px;
  background: white;
  min-height: 300px;
  h2 {
    letter-spacing: 3px;
    padding-top: 10px;
    padding-left: 7px;
    span {
      font-size: 13px;
      color: darken(#ebedf0, 22);
    }
  }
}
.grid-2 {
  display: grid;
  grid-template-columns: 1fr 1fr;
  > div {
    position: relative;
  }
  > div:first-child {
    border-right: 2px solid #ebedf0;
  }
  img {
    display: inline-block;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    z-index: 1;
  }
  h4 {
    display: inline-block;
    position: absolute;
    top: -10px;
    left: 10px;
    width: 100%;
    z-index: 2;
    letter-spacing: 1px;
  }
}
h4 {
  letter-spacing: 1px;
  span {
    font-size: 13px;
    color: darken(#ebedf0, 22);
    letter-spacing: 0px;
  }
}
.button-dtc {
  border: 1px solid var(--pink);
  text-align: center;
  width: 100px;
  height: 30px;
  line-height: 30px;
  color: var(--pink);
  position: absolute;
  top: 13px;
  left: 6px;
  z-index: 3;
  border-radius: 1rem;
}
.love-btn {
  border: 1px solid #3570ec;
  color: #3570ec;
}
</style>
