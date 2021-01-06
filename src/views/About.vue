<template>
  <section class="dtc-about">
    <van-nav-bar title="關於會館" left-text="返回" left-arrow @click-left="$router.push('home')" />
    <h4 style="color:#3570EC;font-size:24px;text-align:center" class="mt-2">名醫會館館長</h4>

    <div class="mt-4 head-desc">
      <img src="doctor.svg" width="126" height="126" class="head-img" />
    </div>

    <div class="head-desc name mt-3">何慶華</div>
    <div class="head-desc sub-name mt-2">美國約翰霍普金斯:醫學管理博士</div>
    <div class="head-desc sub-name mt-2">Johns Hopkins University</div>
    <div class="head-desc sub-name mt-1">PhD in Health Policy and Management</div>

    <div class="target-plan mt-3">
      <main>
        <h5>會館宗旨</h5>
        <p>
          有鑑於國內各大醫院名醫掛號困難，一般重大及緊急病患家屬沒有管 道斟詢名醫意見，「名醫會館」藉由互聯網科技技術提供病患家屬以手機通
          訊，可以即時找到相關的名醫徵詢醫療方面的寶貴意見，爭取有效的健康方案。
        </p>
      </main>
    </div>

    <div class="target-plan mt-3">
      <main>
        <h5>會館目標</h5>
        <p>
          提供病患正確就醫知識、找對醫生、遠離病痛。
        </p>
      </main>
    </div>
  </section>
</template>

<script>
import { store, mutations, actions } from "@/store/global.js";
export default {
  name: "about",
  data() {
    return {};
  },
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
.dtc-about {
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-bottom: 100px;
  //background: #e5e5e5;
}

.head-desc {
  position: relative;
  margin: 0 auto;
}
.head-img {
  border-radius: 100%;
  filter: drop-shadow(3px 3px 1px rgba(0, 0, 0, 0.7));
}

.name {
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 16px;
  color: #2a4262;
}
.sub-name {
  font-family: Poppins;
  font-style: normal;
  font-weight: 400px;
  font-size: 16px;
  line-height: 16px;
  color: darken(#9cb1d8, 20%);
}
.target-plan {
  display: grid;
  place-items: center;
  > main:first-child {
    width: 94vw;
    height: auto;
    background-image: linear-gradient(to right, #878ede, #878ede);
    border-radius: 15px;
    //filter: drop-shadow(6px 6px 7px rgba(0, 0, 0, 0.7));
    padding: 1rem;
    padding-top: 1.4rem;
    color: white;
  }
}
</style>
