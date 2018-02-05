
import 'es6-promise/auto' // 兼容库

import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import App from '@/App'
import store from '@/vuex/store'
import routes from '@/router'
import VueResource from 'vue-resource'
// 框架
import MintUI from 'mint-ui'
// 工具
import FastClick from 'fastclick'
import NProgress from 'nprogress'

import ga from 'vue-ga'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(MintUI)
Vue.use(VueResource)

Vue.config.productionTip = true

const router = new VueRouter({
    routes
})

// 设置开发环境变量
if (process.env.NODE_ENV == 'development') {
    window.NODE_ENV = 'development' // [开发环境]
} else {
    window.NODE_ENV = 'production' // [真机或发布环境]
}
//取消点击300ms延迟
if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}
// 全局转场加载进度动画
// router.beforeEach((to, from, next) => {
//     NProgress.start();
//     next()
// })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})

//此统计ID后期将会删除，此处测试使用
// ga(router, 'UA-100770375-1')
// ga('send', 'test-pageview')
