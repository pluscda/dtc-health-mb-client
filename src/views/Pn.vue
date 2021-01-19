<template>
  <section class="dashboard"></section>
</template>

<script>
import { store, mutations } from "@/store/global.js";
import { Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed, Capacitor } from "@capacitor/core";

const { PushNotifications } = Plugins;
export default {
  name: "pushNotify",

  data() {
    return {};
  },
  components: {},
  computed: {
    isLogin() {
      return store.isLogin;
    },
  },
  methods: {
    initPush() {
      if (Capacitor.platform !== "web") {
        this.registerPush();
      }
    },
    registerPush() {
      PushNotifications.requestPermission().then((permission) => {
        if (permission.granted) {
          // Register with Apple / Google to receive push via APNS/FCM
          PushNotifications.register();
        } else {
          alet("No permission for push granted");
        }
      });
      PushNotifications.addListener("registration", (token) => {
        // token == {value:xxxx}
        console.log("My token: " + JSON.stringify(token));
      });
      PushNotifications.addListener("pushNotificationReceived", async (notification) => {
        console.log("Push received: " + JSON.stringify(notification));
      });
      PushNotifications.addListener("pushNotificationActionPerformed", async (notification) => {
        const data = notification.notification.data;
        console.log("Action performed: " + JSON.stringify(notification.notification));
        store.pnMsg = notification.notification;
        this.$router.push("pn-msg");
        // if (data.detailsId) {
        //   this.$router.push("pn-msg");
        //   //this.router.navigateByUrl(`/home/${data.detailsId}`);
        // }
      });
    },
  },

  async mounted() {
    this.initPush();
  },
  async beforeCreate() {},
};
</script>

<style lang="scss" scoped>
.dashboard {
}

aside {
}
</style>
