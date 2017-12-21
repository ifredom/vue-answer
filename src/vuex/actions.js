export const loginState = ({ commit }, payload) => {
    commit('LOGINSTATE', payload)
    commit('COUNT')
}
export const count = ({ commit }, payload) => {
    commit('COUNT', payload)
}
export const setShowSidebar = ({ commit }, payload) => {
  commit('COM_SHOW_SIDE_BAR', payload)
}
