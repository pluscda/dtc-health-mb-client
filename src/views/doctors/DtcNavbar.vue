<template>
  <div style="position:sticky;top:0;z-index:3;">
    <b-navbar toggleable="lg" type="dark" class="dtc-bg">
      <b-navbar-brand style="max-width:200px;">
        <div class="bar-icon" id="popover-9" style="color:black;">
          <i class="fas fa-user-alt"></i>
        </div>
        DTC HEALTH</b-navbar-brand
      >

      <b-navbar-nav class="ml-auto" v-show="isLogin">
        <!-- <div class="bar-icon" id="popover-9" style="color:black;">
          <i class="fas fa-user-alt"></i>
        </div> -->
        <b-popover target="popover-9" title="個人專區" triggers="hover" placement="bottom">
          <b-button size="sm" variant="danger" @click="logout">登出</b-button>
        </b-popover>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
import { store, mutations } from "@/store/global.js";
export default {
  name: "navbardoc",
  data() {
    return {};
  },
  computed: {
    isLogin() {
      return sessionStorage.token || store.isLogin;
    },
  },
  components: {},
  methods: {
    async logout() {
      mutations.logout();
      this.$router.push("login?isdoc=true");
      setTimeout(() => location.reload(true), 200);
    },
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.dtc-bg {
  background: #10579b;
  max-height: 70px;
}
.bar-icon {
  border-radius: 50%;
  background: var(--light);
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  cursor: pointer;
  display: inline-block;
}
</style>
