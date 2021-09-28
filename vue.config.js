const path = require('path');

module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src/'))
      .set('@core', path.resolve(__dirname, 'src/core'))
      .set('@shared', path.resolve(__dirname, 'src/shared'))
      .set('@modules', path.resolve(__dirname, 'src/modules'))
      .set('@scss', path.resolve(__dirname, 'src/assets/scss'))
      .set('@images', path.resolve(__dirname, 'src/assets/images'));
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/assets/scss/variables/index.scss";`,
      },
    },
  },
  devServer: {
    port: 8000,
    host: '0.0.0.0',
    proxy: 'https://service.medford.pro',
  },
};
