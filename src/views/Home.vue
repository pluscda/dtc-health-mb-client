<template>
  <div class="my-homepage">
    <HomeHeader></HomeHeader>
    <main class="hot-search">
      <div></div>
      <div>{{ $t('熱搜') }}:</div>
      <div v-for="(item, i) in cancers.slice(5, 10)" :key="i" style="margin-left:7px;color:blue;font-size:14px;">
        {{ $t(item.name) }}
      </div>
    </main>
    <main class="icon-search">
      <h4 class="mb-2">
        {{ $t('選科室問醫生') }} <span>{{ $t('自選科室專屬醫師對症下藥') }}</span>
      </h4>
      <nav class="grid-2-img">
        <div v-for="(item, i) in cancerCats" :key="item" :data-msg="item.text" @click="$router.push(item.path)">
          <img :src="cancerCatsImg[i]" />
        </div>
        <div style="grid-column:1/-1" data-msg="其他部位" @click="$router.push('/canceratother')">
          <img src="small_dreamstime_s_75581102_8295cb0072.jpg" />
        </div>
      </nav>
    </main>
    <main class="fast-ask-doc">
      <div class="left">
        <img class="img1" src="thumbnail_image001_6397d39324.jpg" />
      </div>
      <div class="right mt-2">
        <h3 style="margin-left:10px;"></h3>
        <div>線上健康照護諮詢</div>
        <div class="dtc-private ml-2">{{ $t('private') }}</div>
        <footer class="faster-footer" style="margin-left:10px;">
          <van-button plain size="small" type="info"><van-icon name="friends" style="transform:translateY(2px)" />護理照護</van-button>
          <van-button plain size="small" type="danger"><van-icon name="like" style="transform:translateY(2px)" />復健照護</van-button>
          <van-button plain size="small" type="primary"><van-icon name="gem" style="transform:translateY(2px)" />營養照護</van-button>
        </footer>
      </div>
    </main>
    <main class="faster2">
      <div @click="$router.push('/heart')">
        <span style="color:white !important;background:#878ede;">♥️</span>
        <span class="fast-span" data-msg="線上諮詢">心血管疾病</span>
      </div>
      <div class="ml-2" @click="$router.push('/stroke')">
        <span style="background:#878ede;">❁</span>
        <span class="fast-span" data-msg="中風線上諮詢">腦血管事件</span>
      </div>
    </main>
    <main class="inquery">
      <h2 style="font-size:22px;margin-bottom:10px;">
        線上病理諮詢 <span>{{ $t('省時省心名醫指導好的快') }}</span>
      </h2>
      <nav class="grid-2-img">
        <div v-for="(item, i) in onlines" :key="i" :data-msg="item.text">
          <img :src="item.src + '.jpg'" />
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
    "選科室問醫生":"癌症篩選科系",
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
import { store, mutations, actions } from '@/store/global.js';
import queryString from 'query-string';
import HomeHeader from '@/components/HomeHeader';
let types = '大腸癌,肺癌,女性乳癌,肝癌,口腔癌,攝護腺癌,甲狀腺癌,胃癌,皮膚癌,食道癌'.split(',');
//thumbnail_dreamstime_s_75581102_8295cb0072.jpg
const cancerCatsImg = [
  'thumbnail__f0e0837881.jpg',
  'thumbnail_1544194965_4229027033_wn_9cfd7b444e.jpg',
  'thumbnail_20150801031535563_4e9f6ee0d9.jpg',
  'thumbnail_615f71b7_5bf2_4cf5_ad0f_44c307b60448_a6a4058942.jpg',
];
const cancerPaths = ['/cancerathead', '/canceratlung', '/canceratab', '/canceratlower'];
const cancerCats = ['頭頸部', '胸部', '腹部', '骨盆腔'].map((s, i) => ({ value: i + 1, text: s, path: cancerPaths[i] }));
const strs = '家醫科、老年醫學科、神經科、泌尿科、眼科、婦產科、皮膚科、眼科、小兒科、成年慢性病'.split('、');
const onlines = ['150 (7)', '150 (8)', '150 (9)', '150 (10)', '150 (11)', '150 (12)', '150 (13)', '150 (14)', '150 (15)', '150 (16)'].map((s, i) => ({
  src: s,
  text: strs[i],
}));
export default {
  name: 'home',
  data() {
    return {
      types,
      active: 0,
      cancers: [],
      cancerCats,
      cancerCatsImg,
      onlines,
      showBottom: false,
    };
  },
  components: {
    HomeHeader,
  },
  methods: {
    // visibleHandler(isVisible) {
    //   if (isVisible) {
    //     alert();
    //     this.showBottom = true;
    //   }
    // },
    async viewList(item) {
      const obj = { id: item.cid, name: item.name };
      const str = queryString.stringify(obj);
      this.$router.push('doclist?' + str);
    },
    async getDDL() {
      try {
        this.cancers = await actions.getCancerTypes();
        store.cancers = [...this.cancers];
      } catch (e) {}
    },
  },
  mounted() {
    store.activeTab = 0;
    // this.getDDL();
  },
};
</script>

<style lang="scss" scoped>
.my-homepage {
  width: 100vw;
  padding: 3px;
  padding-top: 0px;
  overflow: hidden !important;
  position: relative;
  display: flex;
  flex-direction: column;
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
      width: 140px;
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
  gap: 8px;
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
  height: 40px;
  width: 100%;
  background: var(--light);
  line-height: 40px;
  display: grid;
  grid-template-columns: repeat(120, max-content);
  > div:first-child {
    width: 5px;
    height: 20px;
    background: #8faef1;
    margin-top: 10px;
    margin-right: 4px;
  }
}
.fast-span {
  position: relative;
  &::after {
    position: absolute;
    font-size: 14px;
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
  background: white;

  h2 {
    padding-top: 10px;
    font-size: 15px;
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

.grid-2-img {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 150px);
  gap: 0.1rem;
  > div {
    position: relative;
    height: 150px;
    img {
      width: 100%;
      height: 100%;
      display: inline-block;
      object-fit: cover;
    }
    &::after {
      position: absolute;
      content: attr(data-msg);
      color: var(--light);
      background: rgba(#000, 0.4);
      font-size: 20px;
      text-align: center;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      z-index: 2;
      line-height: 150px;
    }
  }
}
</style>
