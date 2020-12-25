<template>
  <section class="dtc-login">
    <b-input-group size="sm" prepend="Phone #" class="mb-2">
      <b-input v-model="phone"></b-input>
    </b-input-group>
    <b-button @click="register">Register New account by phone #</b-button>
    <b-input-group size="sm" prepend="Code from Phone" class="mb-2" v-if="needCode">
      <b-input v-model="code"></b-input>
      <b-button @click="confirmSMSCode">Submit My SMS Code</b-button>
    </b-input-group>

    <div id="recaptcha-container"></div>
  </section>
</template>

<script>
import { store, mutations, actions } from '@/store/global.js';
export default {
  name: 'login',
  data() {
    return {
      phone: '+8860928012588',
      needCode: '',
      code: '654321',
      confirmationSMSCodeResult: '',
    };
  },

  methods: {
    async register() {
      try {
        actions.recaptch(this.phone);
        this.confirmationSMSCodeResult = await actions.registerByMobilePhone(this.phone);
        this.needCode = true;
      } catch (e) {
        alert('Error: SMS not sent');
      }
    },
    async confirmSMSCode() {
      try {
        const { user } = await this.confirmationSMSCodeResult.confirm(this.code);
        alert(JSON.stringify(user));
      } catch (e) {
        alert('' + e);
      }
    },
  },
  mounted() {},
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
