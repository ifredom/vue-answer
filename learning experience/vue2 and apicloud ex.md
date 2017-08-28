# 项目实践

    vue2  + vue-router  + vuex + apicloud   制作手机app

## 其中的坑

**1. 调试涉及apicloud模块，也就时原生功能的时候不太方便。**

* 通过vue-cli构建项目，可以在浏览器中通过设置proxy反向代理后， 直接与后台通信调试。
* 但是涉及app的一些功能，比如读取手机相册，扫描二维码，定位，数据统计等功能时，必须build之后，通过手机真机同步然后进行调试。
* 解决办法:npm run build时 将inde.html 和 static文件夹复制到widget中，可以减少手动复制的繁琐环节。代码如下,可直接替换vue-cli生成的build.js文件

    文件名：build.js

 `

    require('./check-versions')()
    process.env.NODE_ENV = 'production'

    var ora = require('ora')
    var rm = require('rimraf')
    var path = require('path')
    var chalk = require('chalk')
    var webpack = require('webpack')
    var config = require('../config')
    var webpackConfig = require('./webpack.prod.conf')
    var shell = require('shelljs')

    var spinner = ora('building for production...')
    spinner.start()

    rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
        if (err) throw err
        webpack(webpackConfig, function(err, stats) {
            spinner.stop()
            if (err) throw err
            process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n')

            console.log(chalk.cyan('  Build complete.\n'))
            console.log(chalk.yellow(
                '  注意: npm run build后的产物，无法通过直接打开index.html来访问\n' +
                '  请放置在服务器上.\n'
            ))

            var cppath = path.resolve(__dirname, './widget')
            var bb = ora('正在复制处理到 ' + cppath + ' 文件夹...\n\n').start()

            rm(path.join(cppath, 'static'), err => {
                if (err) throw console.warn(err)
                shell.cp('-Rf', path.join(config.build.assetsRoot, '/*'), cppath);
                console.log(chalk.cyan('复制完成'))
                bb.stop()
            })
        })
    })
`

******

**2.页面缓存是个问题**

* 进入A页面后，再进入B页面，再返回A页面，A应该被缓存。同时可以设置返回A时，刷新A

* 使用keep-alive时一个解决办法，但是不好用。

* 解决办法：使用vue-navigation，github搜索即可

******

**3.ios移动手势**

* 解决办法：先instal，再main.js中引用一下就行

``

    import Tocca from 'tocca';  // 移动手势
    Vue.use(Tocca);

    if ('addEventListener' in document) {
        //仅支持 ios 10.1+
        document.addEventListener('swiperight', function(e) {
            self.$router.go(-1)
        });
    }

``

******

**4.页面适配问题**

* 解决办法： 在mian.js中引入下面这个函数即可

    (function(doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function() {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 16 * (clientWidth / 320) + 'px';
            };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);

******

**5.取消移动端点击事件的300ms延迟**
    解决办法： 先安装，然后main.js 写入以下内容

    import FastClick from 'fastclick' //快速点击
    if ('addEventListener' in document) { //取消点击300ms延迟
        document.addEventListener('DOMContentLoaded', function() {
            FastClick.attach(document.body);
        }, false);
    }

******

**6.数据请求，fetch或者称之为ajax，已封装好**

    文件名：api.js

`
    import axios from 'axios';
    import Qs from 'qs';
    import NProgress from 'nprogress';

    let base = ""
    if (process.env.NODE_ENV == 'development') {
        base = "/api" // [开发环境]
    } else {
        base = "http://111.XXXX这里是你自己的地址" // [开发apicloud原生相关功能] 或 [发布环境]
    }

    // 配置进度条的样式
    NProgress.configure({
        template: `
        <div class="bar" role="bar">
        <div class="peg"></div>
        </div>
        <div class="spinner" role="spinner">
        <div class="spinner-icon"></div>
        </div>
    `
    });

    // 将数据数据转化为字符串
    function formatParams(params) {
        for (let i in params) {
            if (Object.prototype.toString.call(params[i]) === '[object Array]') {
                params[i] = JSON.stringify(params[i])
            }
        }
    }

    function middlePromiseFun(url, params, method = "post") {
        formatParams(params)
        method = method.toUpperCase();
        return new Promise((resolve, reject) => {

            NProgress.start()
            axios({
                method: method,
                url: url,
                timeout: 10000,
                data: params,
                transformRequest: [function(data) {
                    // 这里提前处理请求的数据，若不加，则开发模式proxy代理情况下无法传递参数
                    return Qs.stringify(data);
                }]
            }).then(response => {
                NProgress.done()
                resolve(response.data)
            }, err => {
                NProgress.done()
                console.log(err)
                reject(err)
            }).catch(error => {
                NProgress.done()
                console.log(error)
            })
        })
    }


    export const requestLogin = (params, method) => { // 登陆接口
        return middlePromiseFun(`${base}/login`, params, method)
    }
    export const noteSend = (params, method) => { // 短信验证码登录接口
        return middlePromiseFun(`${base}/sendcode`, params, method)
    }
    export const noteLogin = (params, method) => { // 短信登录接口
        return middlePromiseFun(`${base}/validatephone`, params, method)
    }
    // .......其他接口......
`

**6.移动端部分手机兼容型profill**
    报错：Uncaught Error: [vuex] vuex requires a Promise polyfill in this browser.
    安装
        npm install es6-promise --save
    全局引入  main.js
    import 'es6-promise/auto'
