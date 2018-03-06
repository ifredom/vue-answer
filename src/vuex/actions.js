import * as types from './mutation-types.js';

export default {
    get_local_userinfo({
        commit
    }) {
        if (localStorage.getItem('user_info')) {
            commit(
                types.LOCAL_USER_INFO,
                JSON.parse(localStorage.getItem('user_info'))
            );
        }
    },
    set_login_state({
        commit
    }, loginState) {
        commit(types.LOGINSTATE, loginState)
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
        commit(types.SET_USERTIME, useTime);
    },
    record_home_list({
        commit
    }, listData) {
        commit(types.RECORD_HOME_LIST, listData);
    },
    add_zan_num({
        commit
    }, index) {
        commit(types.ADD_ZAN_NUM, index);
    }
};