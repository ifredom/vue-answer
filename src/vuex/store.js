import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters'; // 获取时，可以单个导出，使用星号，导出全部单个的子模块
import * as actions from './actions'; // 提交action时，可以单个导出，使用星号，导出全部单个的子模块
import mutations from './mutations';  //

Vue.use(Vuex)

// 应用初始状态
const state = {
    count: 0
}


// 创建 store 实例
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
