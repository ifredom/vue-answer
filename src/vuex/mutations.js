const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const GET_DATA = 'GET_DATA'
const REQUESTLOGIN = 'REQUESTLOGIN'
// 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
export default {
  [INCREMENT](state) {
    state.count++
  },
  [DECREMENT](state) {
    state.count--
  },
  [REQUESTLOGIN](state, payload) {
    console.log(payload)
  }
}

