const LOGINSTATE = 'LOGINSTATE'
const COUNT = 'COUNT'
const COM_SHOW_SIDE_BAR = 'COM_SHOW_SIDE_BAR'
// 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
export default {
    [LOGINSTATE](state, payload) { //登陆状态
        state.logonState = payload ? payload : false
    },
    [COUNT](state, payload) { //登陆状态
        state.count++
    },
    [COM_SHOW_SIDE_BAR](state, payload) {
      state.showSidebar = payload
    },
}
