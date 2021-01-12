<template>
  <section class="msg-container">
    <header class="dtc-title" style="color:white !important;">備註留言</header>
    <main class="msg-main">
      <ServiceBasicInformation class="mb-3"></ServiceBasicInformation>
      <section class="msg-list" v-if="!addingMsg">
        <b-button
          variant="info"
          @click="
            addingMsg = true;
            msg = '';
          "
          ><i class="fas fa-plus mr-2 d-inline-block"></i>新增留言</b-button
        >
        <aside class="mb-2">
          <div class="pl-2" style="transform:translateY(2px)" :style="items.length ? '' : 'opacity:0'">共{{ items.length }}筆</div>
          <div :style="items.length ? '' : 'opacity:0'"><span class="sp-1"></span>體檢醫院</div>
          <div :style="items.length ? '' : 'opacity:0'"><span class="sp-2"></span>兵役局</div>
        </aside>
        <div class="item-msg" v-for="(item, i) in items" :key="i" :style="!item.Type ? 'background:#F3D6D2' : 'background:#C3E4EA'">
          <nav class="nav-msg-detail" style="color:black !important;">
            <div>{{ item.AccountName }}</div>
            <div>{{ $twDate(item.CreateTime) }}@{{ item.CreateTime && item.CreateTime.split("T")[1].split(".")[0] }}</div>
            <div v-if="AccountNo != item.AccountNo">{{ item.IsRead ? "狀態: 已讀取" : "狀態: 未讀取" }}</div>
            <b-button v-show="AccountNo != item.AccountNo" @click="updateReadStatus(item)" v-if="!item.IsRead" size="sm" style="transform:scale(0.8) translateY(-5px)"
              >註記已讀</b-button
            >
          </nav>
          <div class="pl-2 pb-2">內容: {{ item.Text }}</div>
        </div>
        <main v-if="!items.length" style="height:400px;text-align:center;color:black;">
          <h3 style="transform:translateY(200px)">暫無留言</h3>
        </main>
      </section>
      <section v-if="addingMsg" style="color:black;" class="add-msg">
        <h4>新增備註留言(不可超過 500個字):</h4>
        <b-textarea v-model.trim="msg" placeholder="新增備註留言..." spellcheck="false"></b-textarea>
        <footer>
          <div></div>
          <b-button variant="primary" @click="addNewMsg" :disabled="!validMsg">儲存</b-button>
          <b-button @click="addingMsg = false">取消</b-button>
        </footer>
      </section>
    </main>
  </section>
</template>

<script>
import { store, actions } from "@/store/global.js";
import ServiceBasicInformation from "./ServiceBasicInformation.vue";
//體檢醫院/兵役局
const bgColors = ["#C3E4EA", "#F3D6D2"];
export default {
  data() {
    return {
      bgColors,
      addingMsg: false,
      msg: "",
      items: [],
      AccountNo: sessionStorage.No,
    };
  },

  components: {
    ServiceBasicInformation,
  },
  computed: {
    validMsg() {
      return this.msg && this.msg.length < 501;
    },
  },
  methods: {
    updateReadStatus(item) {
      try {
        axios.post("military/SetExamNoteRead?noteId=" + item.Id);
        item.IsRead = true;
        this.items = [...this.items];
      } catch (e) {
        alert("" + e);
      }
    },
    addNewMsg() {
      const obj = { MilitaryId: store.editItem.Id, Text: this.msg.slice(0, 500).trim() };
      try {
        axios.post("military/SetExamNote", obj);
        setTimeout(() => this.getData(), 600);
        this.addingMsg = false;
      } catch (e) {
        alert("" + e);
        this.items = [];
      }
    },
    async getData() {
      try {
        const items = await axios.post("military/GetExamNotes?militaryId=" + store.editItem.Id);
        this.items = items.reverse();
      } catch (e) {
        alert("" + e);
        this.items = [];
      }
    },
  },
  mounted() {
    this.getData();
  },
  watch: {},
};
</script>
<style lang="scss" scoped>
.msg-container {
  height: 929px !important;
  overflow-y: auto;
  color: black;
}

.dtc-title {
  height: 54px;
  line-height: 54px;
  font-size: 24px;
  text-align: center;
  background: var(--primary);
  color: black !important;
}

.msg-main {
  padding: 3rem;
  padding-top: 1rem;
}
aside {
  display: grid;
  color: black;
  grid-template-columns: 1fr max-content max-content;
  gap: 0.5rem;
}
.sp-1,
.sp-2 {
  display: inline-block;
  width: 17px;
  height: 17px;
  background: #c3e4ea;
  margin-right: 2px;
  transform: translateY(3px);
}
.sp-2 {
  background: #f3d6d2;
}
.item-msg {
  width: 100%;
  //max-height: 115px;
  min-height: 115px;
  color: black !important;
  font-size: 14px;
  border-radius: 10px;
  &:not(:first-of-type) {
    margin-top: 4px;
  }
  filter: drop-shadow(1px 1px 1px rgba(0, 0, 0, 0.7));
}
.add-msg {
  color: black !important;
  textarea {
    width: 100%;
    height: 500px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  footer {
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    gap: 14px;
  }
}
.nav-msg-detail {
  display: grid;
  padding: 0.5rem;
  grid-template-columns: repeat(4, max-content);
  text-align: left;
  color: black !important;
  gap: 1rem;
}
/deep/ .btn-info {
  background: #0f579b;
  border-color: #0f579b;
}
</style>
