const state = () => ({
  user: [],
  isLoading: false,
})
const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  setLoading(state, payload) {
    state.loading = payload
  },
}
const actions = {
  async fetchUser({ commit }) {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await response.json()
      if ({ isLoading: false }) {
        commit('setUser', data)
      }
    } catch (error) {
      console.error('Error fetching user:', error)
    }
  },
}
const getters = {
  getUser(state) {
    return state.user
  },
  getUserCount(state) {
    return state.user.length
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
