module.exports = {
  productionSourceMap: false,
  assetsDir: 'assets',
  devServer: {
    proxy: 'http://cms.eda.artktika.ru/'
  },
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: '[hash:base64:8]'
        }
      },
      sass: {
        additionalData: `@import "~bootstrap/scss/functions";@import "~bootstrap/scss/variables";@import "~bootstrap/scss/mixins";@import "~bootstrap/scss/utilities";`
      }
    }
  }
}
