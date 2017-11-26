export const loginState = ({ commit }, payload) => {
    commit('LOGINSTATE', payload)
    commit('COUNT')
}
export const count = ({ commit }, payload) => {
    commit('COUNT', payload)
}