import * as types from './mutation-types.js';

export default {
    get_local_userinfo({ commit }) {
        if (localStorage.getItem('user_info')) {
            commit(
                types.LOCAL_USER_INFO,
                JSON.parse(localStorage.getItem('user_info'))
            );
        }
    },
    loginState({
        commit,
        state
    }, loginState) {
        commit(types.LOGINSTATE, loginState)
        commit(types.COUNT)
    },
    count({
        commit
    }, num) {
        commit(types.COUNT, num)
    },
    setShowSidebar({
        commit
    }, isShow) {
        commit(types.COM_SHOW_SIDE_BAR, isShow)
    },
    set_user_time({
        commit,
        state
    }, useTime) {
        console.log('用户用时：' + useTime);
        commit(types.SET_USERTIME, useTime);
    }
};