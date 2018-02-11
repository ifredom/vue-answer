# what's vue-answer？

* Answer -- the classification, evaluation, and ranking of the mainstream information
（答案-对主流信息进行分类，评价，排行）

* In Answer, Guide to information acquisition, all the people on the street.
  (在答案,为你推介获取正确信息的指南，也作为你披荆斩棘的引路人)

* In Answer, you can easily find friends who have been in the same predicament.  all the people on the street
  (在答案，你可以轻易找到曾经历相同困境的朋友,披荆斩棘的同伴)

----

### 使用方法 ?

    // cmd中安装所需依赖
    npm install

    // 启动
    npm run dev

    # 其他-打包成产品
    npm run build

    # 构建产品并运行查看npm包分析报告
    npm run build --report

    # 运行 unit 测试
    npm run unit

    # 运行 e2e 测试
    npm run e2e

    # 运行所有测试用例
    npm test

----

### UI exhibition
  ![image](https://github.com/ifredom/vue-answer/raw/master/test/testsrc/1.png)
  ![image](https://github.com/ifredom/vue-answer/raw/master/test/testsrc/2.png)
  ![image](https://github.com/ifredom/vue-answer/raw/master/test/testsrc/3.png)
  ![image](https://github.com/ifredom/vue-answer/raw/master/test/testsrc/4.png)
### 下载安装
  ![image](https://github.com/ifredom/vue-answer/raw/master/test/testsrc/ifredom-answoe-code.png)

  二维码有时效性，如果已失效，那么你可以在installpackage文件夹中找到apk安装包

----

### 开发环境

  1.node v6.9.4

  2.cnpm v4.5.0

  3.npm v3.10.10

### support browser

  IE 10+

  Andorid 4.1+

  IOS 7+

## UI开发环境系统构建（storybook）

``` bash

# 构建UI测试框架（参考文档 https://storybook.js.org/basics/guide-vue/）
npm i @storybook/vue --save-dev
npm i storybook-router --save-dev

# package.json
{
  "scripts": {
    "storybook": "start-storybook -p 6006 -c .storybook"
  }
}

# 添加配置文件支持别名@  .torybook/webpack.config.js

```
## 移动端适配方案构建（Flexible.js）

**有什么好处？**
**按照750px宽度出图，前端不用计算尺寸，不用管什么rem，直接使用设计稿上的px即可，移动端自动适配**

``` bash
# 第一步，使用vue-cli初始化一个项目
vue init webpack test-flexible-layout
# 第二步，安装依赖，以及适配方案所需包
npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano --S

npm i cssnano-preset-advanced --save-dev
# 第三步，改造 .postcssrc.js文件.
参见该文件，直接copy方案二内容

# 第四步，对此适配方案进行兼容性优化
参见index.html。引入该CDN上的2个js文件，同时在onload中初始化
# ps：格外注意事项 ，所有css文件一律不在入口main.js中引入，使用app根组件引入
```
参考：https://www.w3cplus.com/mobile/vw-layout-in-vue.html

## 其他工具

``` bash
# npm-check是一个检查项目依赖包的工具，非常实用
# 安装
npm install  -g npm-check
# 使用
npm-check
```
### project structure
    .
    -- build                            // 项目构建相关代码
    |   |-- build.js                     // 生产环境构建代码
    |   |-- check-version.js             // 检查 node、npm 等版本
    |   |-- dev-client.js                // 热重载相关
    |   |-- dev-server.js                // 构建本地服务器
    |   |-- utils.js                     // 构建工具相关
    |   |-- webpack.base.conf.js         // webpack 基础配置（出入口和 loader）
    |   |-- webpack.dev.conf.js          // webpack 开发环境配置
    |   |-- webpack.prod.conf.js         // webpack 生产环境配置
    |-- config                           // 项目开发环境配置
    |   |-- dev.env.js                   // 开发环境变量
    |   |-- index.js                     // 项目一些配置变量（开发环境接口转发将在此配置）
    |   |-- prod.env.js                  // 生产环境变量
    |   |-- test.env.js                  // 测试环境变量
    |-- myself                           // 平时的小练习
    |-- server_mock                      // 后台接口数据
    |   |-- router                       // 接口router管理
    |   |-- controller                   // 接口控制器
    |-- src                              // 源码目录
    |   |-- api                          // ajxa请求接口地址
    |   |-- components                   // vue 公共组件
    |   |-- page                         // 页面
    |   |-- image                        // 图片
    |   |-- style                        // CSS样式
    |   |-- router                       // 路由
    |   |-- vuex                         // vuex 的组件状态统一管理
    |   |-- App.vue                      // 页面入口文件
    |   |-- main.js                      // 程序入口文件，加载各种公共组件
    |-- static                           // 静态文件，比如一些图片，json数据等
    |-- test                             // 自动化测试相关文件
    |-- .babelrc                         // ES6语法编译配置
    |-- .editorconfig                    // 定义代码格式
    |-- .eslintignore                    // ESLint 检查忽略的文件
    |-- .eslistrc.js                     // ESLint 文件，eslint检测规则配置，如需更改，在此添加
    |-- .gitignore                       // git 上传需要忽略的文件
    |-- README.md                        // 项目说明
    |-- index.html                       // 入口页面
    |-- package.json                     // 项目基本信息
    .
