import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
import actions from './actions';
import mutations from './mutations';

Vue.use(Vuex)

// 应用初始状态
const state = {
  loginState: false,
  title: '',
  count: 0,
  showSidebar: false, //侧边栏
  allTime: 3600, // 答题总时长
  useTime: 0, // 答题总用时
  homelist: [] // 首页列表
}

export {
  state
}

// 创建 store 实例
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})