import * as types from './mutation-types.js';
import {
    state as defState
} from './index';
// 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
export default {
    [types.LOCAL_USER_INFO](state, user_info) {
        state.user_info = user_info;
    },
    [types.LOGINSTATE](state, payload) { //登陆状态
        state.logonState = payload ? payload : false
    },
    [types.COUNT](state, payload) { //登陆状态
        state.count++
    },
    [types.COM_SHOW_SIDE_BAR](state, payload) {
        state.showSidebar = payload
    },
    /*
  记录做题时间
   */
    [types.SET_USERTIME](state, useTime) {
        state.useTime = useTime;
    },
    [types.RECORD_HOME_LIST](state, data) {
        state.homelist = data;
    },
    [types.ADD_ZAN_NUM](state, index) {
        state.homelist[index].zan += 1;
    },
};