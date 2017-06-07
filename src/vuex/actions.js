
export const increment = ({commit}) => {
  commit('INCREMENT')
}
export const requestLogin = ({commit},payload) => {
  commit('REQUESTLOGIN',payload)
}
