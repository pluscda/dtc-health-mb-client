<template>
  <section class="dashboard"></section>
</template>

<script>
import { store, mutations, actions } from "@/store/global.js";
import { Plugins, PushNotification, PushNotificationToken, PushNotificationActionPerformed, Capacitor } from "@capacitor/core";

const { PushNotifications, Device, Geolocation } = Plugins;
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
          alert("No permission for push granted");
        }
      });
      PushNotifications.addListener("registration", async (token) => {
        let obj = { token: token.value, phone: sessionStorage.phone };
        // const position = await Geolocation.getCurrentPosition();
        // const lat = position.coords.latitude;
        // const lon = position.coords.longitude;
        const ana = await Device.getInfo();
        ana.token = token.value;
        sessionStorage.phone ? await actions.registerPn(obj) : await actions.analysis(ana);
      });
      PushNotifications.addListener("pushNotificationReceived", async (notification) => {
        console.log("Push received: " + JSON.stringify(notification));
      });
      PushNotifications.addListener("pushNotificationActionPerformed", async (notification) => {
        const data = notification.notification.data;
        console.log("Action performed: " + JSON.stringify(notification.notification));
        store.pnMsg = notification;
        this.$router.push("pnmsg");
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
