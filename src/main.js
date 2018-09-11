import 'es6-promise/auto'; // 兼容库

import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
var R =require('ramda');
import App from '@/App';
import store from '@/vuex';
import router from '@/router';

// 工具
import FastClick from 'fastclick';
import VueLazyload from 'vue-lazyload';
import NProgress from 'nprogress';
import './util/common/adaption/rem';
import '@/components/global.js';
// 框架
import MintUI from 'mint-ui';

// 增强vue原go方法,注入meta属性isBack
VueRouter.prototype.go = function () {
  this.isBack = true;
  window.history.go(-1);
};
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(VueLazyload);
Vue.use(MintUI);

Vue.config.productionTip = true;


var str = '10.1.1'
var target = '10.2.1'
var getArr1 = str.split('.')
var getArr2 = target.split('.')
var isTrue= (a,b)=>(a-b)>=0

console.log(R.gte(getArr1,getArr2) );

// 取消点击300ms延迟
FastClick.attach(document.body);

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render (createElement) {
    return createElement(App);
  }
}).$mount('#app');
