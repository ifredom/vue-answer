'use strict';
const webpack = require('webpack');
const path = require('path');
const AssetsPlugin = require('assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const baseWebpackConfig = require('./webpack.base.conf');
const config = require('../config'); // 与业务代码共用同一份路径的配置表

process.env.NODE_ENV = 'dll';

module.exports = {
  output: {
    path: config.dll.buildDir,
    filename: '[name].dll.js',
    library: '[name]_[hash]'// 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与DllPlugin的name参数保持一致
  },
  entry: {
    /*
      指定需要打包的js模块
      或是css/less/图片/字体文件等资源，但注意要在module参数配置好相应的loader
    */
    vendor: [
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
      path: path.join(config.dll.buildDir, '[name]-manifest.json'), // 本Dll文件中各模块的索引，供DllReferencePlugin读取使用
      name: '[name]', // 当前Dll的所有内容都会存放在这个参数指定变量名的一个全局变量下，注意与参数output.library保持一致
      context: config.dll.staticRootDir, // 指定一个路径作为上下文环境，需要与DllReferencePlugin的context参数保持一致，建议统一设置为项目根目录
    }),
    new webpack.DefinePlugin({
      'process.env': require('../config/dev.env')
    }),
    /* 跟业务代码一样，该兼容的还是得兼容 */
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: config.build.productionSourceMap,
      parallel: true
    }),
    new AssetsPlugin({
      filename: 'bundle-config.json',
      path: config.dll.buildDir
    })
  ],
  module: baseWebpackConfig.module, // 沿用业务代码的module配置
  resolve: baseWebpackConfig.resolve, // 沿用业务代码的resolve配置
};
console.log(module.exports.plugins[0]);