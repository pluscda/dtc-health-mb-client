module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'zh-tw',
      fallbackLocale: 'zh-tw',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
   pwa: {
      name: '名醫會館',
      short_name: '名醫會館',
      display: 'standalone',
      start_url: '.',
      themeColor: '#ffffff',
      msTileColor: '#000000',
      background_color: '#ffffff',
      manifestOptions: {
          gcm_sender_id: "567717669747",
          "icons": [
            {
              "src": "./img/icons/android-launchericon-512-512.png",
              "sizes": "512x512"
            },
            {
              "src": "./img/icons/android-launchericon-192-192.png",
              "sizes": "192x192"
            },
            {
              "src": "./img/icons/android-launchericon-144-144.png",
              "sizes": "144x144"
            },
            {
              "src": "./img/icons/android-launchericon-96-96.png",
              "sizes": "96x96"
            },
            {
              "src": "./img/icons/android-launchericon-72-72.png",
              "sizes": "72x72"
            },
            {
              "src": "./img/icons/android-launchericon-48-48.png",
              "sizes": "48x48"
            },
            {
              "src": "./img/icons/chrome-extensionmanagementpage-48-48.png",
              "sizes": "48x48"
            },
            {
              "src": "./img/icons/chrome-favicon-16-16.png",
              "sizes": "16x16"
            },
            {
              "src": "./img/icons/chrome-installprocess-128-128.png",
              "sizes": "128x128"
            }
          ]
        },
        workboxPluginMode: "InjectManifest",
        workboxOptions:{
            swSrc: "./src/firebase-messaging-sw.js"
        }
  }
}
