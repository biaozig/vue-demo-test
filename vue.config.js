const autoprefixer = require('autoprefixer');
const pxtorem = require('postcss-pxtorem');
const pxtoviewport = require('postcss-px-to-viewport');


module.exports = {
  outputDir: 'build',
  // publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  css: {
    loaderOptions: {
      // 配置主题色
      less: {
        modifyVars: {
          'font-size-sm': '13px',
          'font-size-md': '15px',
          'font-size-lg': '17px',
          'goods-action-button-danger-color': '#7232dd',
          'goods-action-button-warning-color': '#3eaf7c'
        }
      },
      postcss: {
        plugins: [
          autoprefixer(),
          // 配置px => rem
          // pxtorem({
          //   rootValue: 37.5,
          //   propList: ['*']
          // }),
          // 配置px => viewport
          // pxtoviewport({
          //   viewportWidth: 375
          // })
        ]
      }
    }
  }
};