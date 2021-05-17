const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
      .set('@components', path.resolve(__dirname, 'src/components'))
      .set('@modules', path.resolve(__dirname, 'src/modules'))
      .set('@utils', path.resolve(__dirname, 'src/utils'))
      .set('@router', path.resolve(__dirname, 'src/router'))
      .set('@store', path.resolve(__dirname, 'src/store'))
      .set('@views', path.resolve(__dirname, 'src/views'))
      .set('@scss', path.resolve(__dirname, 'src/scss'))
      .set('@images', path.resolve(__dirname, 'src/assets/images'));
  },
  css: {
    loaderOptions: {
      sass: {
          prependData: `@import "@/assets/scss/main.scss";`,
      }
    }
  }
};
