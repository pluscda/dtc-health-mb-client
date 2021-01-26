const fs = require('fs')
const path = require('path');
const capacitorConfig = {
  "appId": "tw.com.datacom.healthstore",
  "appName": "名醫會館",
  "bundledWebRuntime": false,
  "npmClient": "npm",
  "webDir": "dist",
  "plugins": {
    "SplashScreen": {
      "launchShowDuration": 5000,
      "launchAutoHide": true,
      "backgroundColor": "#ffffffff",
      "androidSplashResourceName": "screen",
      "androidScaleType": "CENTER_CROP",
      "androidSpinnerStyle": "large",
      "iosSpinnerStyle": "small",
      "spinnerColor": "#999999",
      "showSpinner": true,
      "splashFullScreen": true,
      "splashImmersive": true
    }
  },
  "server": {
    "url": "http://172.16.16.17:8082",
    "cleartext": true
  },
  "cordova": {}
}

const isHMR = process.env.NODE_ENV !== 'production' ? true : false;

if (!isHMR) {
  capacitorConfig.server.url = "https://dtc-health-mb-client.vercel.app";
  delete capacitorConfig.server.cleartext;
}

const configPath = path.resolve(__dirname, 'capacitor.config.json')
fs.writeFileSync(configPath, JSON.stringify(capacitorConfig))

// hide the toast showing the real BE address in UI
fs.copyFileSync("Toast-1.java", "Toast.java");
const toast = path.resolve(__dirname,`node_modules/@capacitor/android/capacitor/src/main/java/com/getcapacitor/ui/Toast.java`);
fs.renameSync("Toast.java", toast);