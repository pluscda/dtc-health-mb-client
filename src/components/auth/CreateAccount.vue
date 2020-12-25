<template>
  <section class="dtc-create">

    
  </section>
</template>

<script>
import { store, mutations, actions } from '@/store/global.js';

export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      password2: '',
      showLoginPwd: true,
    };
  },
  methods: {
    async register() {
      try {
        const obj = { username: this.username, password: this.password };
        const { jwt, user } = await actions.registerUser(obj);
        sessionStorage.token = jwt;
      } catch (e) {
        alert(e);
      }
    },
  },
  mounted() {},
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
.dtc-login {
  background: #eaf8ff;
  width: 100vw;
  color: #3570ec;
  display: grid;
  grid-template-rows: max-content 1fr;
  position: relative;
}
</style>
