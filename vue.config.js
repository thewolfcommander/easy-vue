module.exports = {
  pwa : {
    name : "pwa-easyeats",
    workboxPluginMode : "InjectManifest",
    workboxOptions : {
      swSrc : "src/service-worker.js"
    }

  },
  "transpileDependencies" : [
    "vuetify"
  ],
  "devServer" : {
    host: 'localhost'
    }
}
