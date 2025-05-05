const state = () => ({
  count: 1,
})
const mutations = {
  increment(state) {
    state.count++
  },
}
const actions = {
  incrementAsync({ commit }) {
    setTimeout(() => commit('increment'), 1000)
  },
}
const getters = {
  getCount(state) {
    return state.count
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
