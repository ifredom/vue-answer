'use strict';
const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('../config'); // 与业务代码共用同一份路径的配置表

process.env.NODE_ENV = 'production';

module.exports = {
  output: {
    path: config.dll.buildDir,
    filename: '[name].js',
    library: '[name]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
    publicPath: './'
  },
  entry: {
    /*
      指定需要打包的js模块
      或是css/less/图片/字体文件等资源，但注意要在module参数配置好相应的loader
    */
    dll: [
      'jquery',
      'fastclick',
      'vue-lazyload',
      'es6-promise',
      'vue/dist/vue.esm.js',
      'vue-router',
      'vuex',
      'axios'
    ],
  },
  plugins: [
    new webpack.DllPlugin({
      path: 'manifest.json', // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
      name: '[name]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与参数output.library保持一致
      context: config.dll.staticRootDir, // 指定一个路径作为上下文环境，需要与DllReferencePlugin的context参数保持一致，建议统一设置为项目根目录
    }),
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
    new webpack.NoEmitOnErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    // copy custom static assets
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../static'),
      to: config.dev.assetsSubDirectory,
      ignore: ['.*']
    }]),
    // new webpack.DllReferencePlugin({
    //   context: __dirname,
    //   manifest: require('../static/verdor-manifest.json')
    // })
  ],
  module: baseWebpackConfig.module, // 沿用业务代码的module配置
  resolve: baseWebpackConfig.resolve, // 沿用业务代码的resolve配置
};
console.log(module.exports.plugins[0]);