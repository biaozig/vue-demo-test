const path = require('path')

module.exports = {
  outputDir: 'build',
  // publicPath: process.env.NODE_ENV === 'production' ? '/vant-demo/' : '/',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: 'vue-demo-test',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
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
          require('autoprefixer')(),
          // https://www.npmjs.com/package/postcss-plugin-px2rem 
          require('postcss-plugin-px2rem')({
            rootValue: 37.5,//换算基数， 默认100，开启hd后需要换算：rootValue=designWidth*100/750,此处设计稿为375，所以375*100/750=50
            unitPrecision: 2, //允许REM单位增长到的十进制数字。
            // propWhiteList: [],  //默认值是一个空数组，这意味着禁用白名单并启用所有属性。
            propBlackList:['border','border-top','border-left','border-right','border-bottom','border-radius'],//黑名单 这些属性不需要转换
            selectorBlackList:['.am-', '.iconfont'], // 过滤掉.am-开头的class，不进行rem转换
            exclude: /(node_module)/,  //默认false，可以（reg）利用正则表达式排除某些文件夹的方法，例如/(node_module)/ 。如果想把前端UI框架内的px也转换成rem，请把此属性设为默认值
            // ignoreIdentifier: false,  //（boolean/string）忽略单个属性的方法，启用ignoreidentifier后，replace将自动设置为true。
            // replace: true, // （布尔值）替换包含REM的规则，而不是添加回退。
            mediaQuery: false, //（布尔值）允许在媒体查询中转换px。
            minPixelValue: 3 //设置要替换的最小像素值(3px会被转rem)。 默认 0
          })
          // 配置px => viewport
          // require('postcss-px-to-viewport')({
          //   viewportWidth: 375
          // })
        ]
      }
    }
  }
};