const state = () => ({
  tasks: [
    { id: 1, name: 'Task 1', completed: false },
    { id: 2, name: 'Task 2', completed: false },
  ],
})
const mutations = {
  addTask(state, payload) {
    state.tasks.push(payload)
  },
  removeTask(state, payload) {
    state.tasks.splice(payload, 1)
  },
  clearTasks(state) {
    state.tasks = []
  },
}
const actions = {}
const getters = {
  getTasks(state) {
    return state.tasks
  },
  getTasksCount(state) {
    return state.tasks
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
