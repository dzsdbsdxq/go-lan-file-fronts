const { defineConfig } = require('@vue/cli-service')

//添加版本号  此处用时间戳
const Timestamp = new Date().getTime();
// 处理 css 时  引入MiniCssExtractPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath:'./',
  productionSourceMap: false,
  outputDir: 'web',
  indexPath: 'index.htm',
  configureWebpack: {
    plugins: [
      new MiniCssExtractPlugin({
        // 修改打包后css文件名
        filename: `css/[name].[chunkhash:8].${Timestamp}.css`,
        chunkFilename: `css/[name].[chunkhash:8].${Timestamp}.css`
      })
    ],
    devServer: {
      historyApiFallback: true
    },
  },
})
