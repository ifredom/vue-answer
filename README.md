## vue-answer是什么？
    * 答案（answer）--找你所问，问你所需
    * 在答案，你可以找到任何你需要的解决办法
    * 在答案，你可以轻易找到曾经历相同困境的朋友
    * 答案，你的知识解决方案宝库，披荆斩棘的同路人

### 结果
    * 手把手演示，如何制作一款有点创意，有点逼格的手机应用。
    * UI界面我尽力
    * 用户体验会虚谁？

### 展示
  ![image](https://github.com/ifredom/vue-answer/raw/master/test/testsrc/1.png)
  ![image](https://github.com/ifredom/vue-answer/raw/master/test/testsrc/2.png)
### 下载安装
  ![image](https://github.com/ifredom/vue-answer/raw/master/test/testsrc/ifredom-answoe-code.png)
### 使用方法：
    // 安装依赖
    npm install

    // 运行
    npm run dev
### 上线编译：
    npm run build
    // 生成的widget文件夹放在你的手机APP中即可正常访问

### development progress log
    平时开发时积累的经验逗记录在learning experience文件夹内。
    其中：
    vue2 and apicloud ex.md是使用vue全家桶+apicloud打包所遇到的整个流程比较麻烦的难点心得。你值得一看
### 项目结构
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
