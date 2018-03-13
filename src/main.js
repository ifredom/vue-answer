import 'es6-promise/auto'; // 兼容库

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from '@/App';
import store from '@/vuex';
import routes from '@/router';
import VueResource from 'vue-resource';
// 框架
import MintUI from 'mint-ui';
// 工具
import FastClick from 'fastclick';
import NProgress from 'nprogress';
import './util/adaption/rem';

import ga from 'vue-ga';
// 增强原方法，好处是旧的go方法不受影响
VueRouter.prototype.go = function() {
  this.isBack = true;
  window.history.go(-1);
};
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(MintUI);
Vue.use(VueResource);

Vue.config.productionTip = true;

// 返回上一级页面的浏览位置
const scrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};
const router = new VueRouter({
  base: '/',
  mode: 'hash',
  routes,
  scrollBehavior
});
//  判断是否需要登录权限 以及是否登录
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    // 判断是否需要登录权限
    if (localStorage.getItem('user_info')) {
      // 判断是否登录
      next();
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

// 设置开发环境变量
if (process.env.NODE_ENV == 'development') {
  window.NODE_ENV = 'development'; // [开发环境]
} else {
  window.NODE_ENV = 'production'; // [真机或发布环境]
}
// 取消点击300ms延迟
if ('addEventListener' in document) {
  document.addEventListener(
    'DOMContentLoaded',
    function() {
      FastClick.attach(document.body);
    },
    false
  );
}

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

// 此谷歌统计ID唯一,此处测试使用
// ga(router, 'UA-100770375-1')
// ga('send', 'test-pageview')
