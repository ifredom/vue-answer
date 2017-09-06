import Vue from 'vue';
import Vuex from 'vuex';

import * as getters from './getters'; // 获取时，可以单个导出，使用星号，导出全部单个的子模块
import * as actions from './actions'; // 提交action时，可以单个导出，使用星号，导出全部单个的子模块
import mutations from './mutations'; //

Vue.use(Vuex)

// 应用初始状态
const state = {
    logonState: false,
    title: '',
    page: { // 我使用page这个对象来维护所有页面的状态，每一个页面就是一个childPage对象。title为页面的名称，与路由router中的name值一一对应。其他值随意
        childPage: {
            name: 'home',
            open: false,
            other: {
                anything: "随便写点"
            }
        },
        childPage: {
            name: 'my',
            open: false,
            other: {
                saysomething: '你好啊',
                backsomething: "非常好啊"
            }
        }
    }

}


// 创建 store 实例
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})