<template>
  <section class="dtc-phone">
    <van-overlay :show="showMask" @click="showMask = false" style="z-index:9999;">
      <van-loading type="spinner" class="mt-4" />
    </van-overlay>
    <main>
      <h2>
        <span class="mr-3"><i class="fas fa-sign-in-alt"></i></span>{{ $t("健康通行證") }}
      </h2>
      <div class="phone-div">
        <input v-model="phone" placeholder="請輸入手機號碼" minlength="10" maxlength="10" />
      </div>
      <div class="phone-div mt-3 short-code">
        <div class="code-btn" @click="register" v-show="phone.length == 10">獲取短信驗證碼</div>
        <input placeholder="請輸入短信驗證碼" minlength="6" maxlength="6" v-model="code" v-show="needCode" />
      </div>

      <div class="login" @click="confirmSMSCode" v-show="enableLogin">登入</div>
    </main>
    <button :id="recaptchaDomId" note="google requried this invisable div"></button>
    <!-- <pre style="color:white;">{{ user }}</pre> -->
  </section>
</template>

<script>
import { store, mutations, actions } from "@/store/global.js";
import Vue from "vue";
export default {
  name: "login",
  data() {
    return {
      showKeyboard: true,
      phone: "0928012588",
      needCode: "",
      code: "654321",
      confirmationSMSCodeResult: "",
      user: "",
      jwt: "",
      recaptchaDomId: "sign-in-button",
      showMask: false,
    };
  },
  computed: {
    isLogin() {
      return sessionStorage.isLogin || store.isLogin;
    },
    enableLogin() {
      return this.code && this.code.length == 6 && !isNaN(this.code) && this.needCode;
    },
  },

  methods: {
    async register() {
      try {
        this.showMask = true;
        this.confirmationSMSCodeResult = await actions.registerByMobilePhone(`+886${this.phone}`, this.recaptchaDomId);
        this.needCode = true;
        this.showMask = false;
      } catch (e) {
        Vue.$toast.error("請檢查電話號碼是否正確");
        this.showMask = false;
      }
    },
    async connectWithStrapi() {
      try {
        const { jwt: jwt1 } = await this.loginStrapi();
        this.jwt = jwt1;
        if (!jwt1) {
          const { jwt: jwt2 } = await this.registerStrapi().catch((e) => {
            alert("something wrong");
            return;
          });
          this.jwt = jwt2;
        }
        sessionStorage.token = this.jwt;
        localStorage.token = this.jwt;
        this.user = JSON.stringify(this.user, null, 2);
        this.showMask = false;
        mutations.login(this.phone);
      } catch (e) {
        this.showMask = false;
        //location.reload();
        Vue.$toast.error("請檢查驗證號碼" + e);
      }
    },
    async confirmSMSCode() {
      try {
        this.showMask = true;
        await this.confirmationSMSCodeResult.confirm(this.code);
        this.connectWithStrapi();
      } catch (e) {
        location.reload();
        Vue.$toast.error("請檢查驗證號碼" + e);
      }
    },
    async registerStrapi() {
      const { user, jwt } = await actions.registerStrapi({ username: this.phone, password: store.PASSWORD });
      if (jwt) {
        this.user = user;
        if (user.isDoctor) {
          alert("this is not for doctor; you will be logout at once");
          mutations.logout();
        }
        return { jwt };
      }
    },
    async loginStrapi() {
      try {
        const { user, jwt } = await actions.loginStrapi({ identifier: this.phone, password: store.PASSWORD });
        if (jwt) {
          this.user = user;
          if (user.isDoctor) {
            alert("this is not for doctor; you will be logout at once");
            mutations.logout();
          }
        }
        return { jwt };
      } catch (e) {
        return { jwt: "" };
      }
    },
  },
  mounted() {
    // alert("0928012588".length);
  },
};
</script>
<i18n>
{
  "zh-tw": {
    "登入": "登入",
    "健康通行證":"登入健康通行證",
    "手機號碼":"手機號碼",
    "24小時不限次數與醫生面對面諮詢立即開通":"24小時不限次數與醫生面對面諮詢立即開通"
    
  },
  "zh-cn": {
    "登入": "登入",
    "健康通行證":"登入健康通行證",
    "手機號碼":"手機號碼",
     "24小時不限次數與醫生面對面諮詢立即開通":"24小時不限次數與醫生面對面諮詢立即開通"
  }
}
</i18n>

<style lang="scss" scoped>
::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: darken(#f8f9fa, 23);
}
.dtc-phone {
  width: 100%;
  position: relative;
  color: white;
  text-align: center;
  display: grid;
  place-items: center;
  main {
    width: 80vw;
    height: 400px;
    h2 {
      font-size: 20px;
      margin-top: 20px;
      margin-bottom: 40px;
    }
    input {
      border: none;
      display: inline-block;
      width: 80vw;
      background: transparent;
      border-bottom: 1px solid white;
      height: 40px;
      font-size: 13px;
    }
  }
}

.short-code {
  position: relative;
  .code-btn {
    display: block;
    position: absolute;
    content: attr(data-msg);
    font-size: 12px;
    color: orange;
    top: 16px;
    right: 0px;
  }
}
.login {
  border-radius: 20px;
  font-size: 18px;
  background: var(--success);
  text-align: center;
  color: white;
  width: 80vw;
  height: 40px;
  line-height: 40px;
  margin-top: 3rem;
}
</style>
