// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import ga from 'vue-ga'

import App from '@/App'
import store from '@/vuex/store'
import routes from '@/router/router'

import "./style/common.css"
import "./style/ngprogress/ngprogress.css"

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(VueResource);

Vue.config.productionTip = true

const router = new VueRouter({
  routes
})
ga(router, 'UA-XXXXX-Y')


// router.beforeEach((to, from, next) => {// 跳转页面前，检测是否登录（token）
//   if (to.path == '/login') {
//     sessionStorage.removeItem('user');
//   }
//   let user = JSON.parse(sessionStorage.getItem('user'));
//   if (!user && to.path != '/login') {
//     next({ path: '/login' })
//   } else {
//     next()
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
