const INCREMENT = 'INCREMENT'
const REQUESTLOGIN = 'REQUESTLOGIN'
// 使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
export default {
  [INCREMENT](state) {//登陆次数计数
    state.loginCount++
  },
  [REQUESTLOGIN](state, payload) {//登陆成功后
    state.title = payload.title
    console.log(payload)
    console.log("登陆成功了，做点什么呢？")
  }
}

