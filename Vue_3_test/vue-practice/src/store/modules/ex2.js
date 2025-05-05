const state = () => ({
  count: 0,
})
const mutations = {
  setCount(state, payload) {
    state.count = payload
  },
}
const actions = {}
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
