const state = () => ({
  count: 0,
})
const mutations = {
  increment(state) {
    state.count++
  },
  decrement(state) {
    state.count--
  },
  reset(state) {
    state.count = 0
  },
}
const actions = {}
const getters = {}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
