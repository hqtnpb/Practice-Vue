import { createStore } from 'vuex'
import ex1 from './modules/ex1'
import ex2 from './modules/ex2'
import ex3 from './modules/ex3'
import ex4 from './modules/ex4'
import ex5 from './modules/ex5'

const store = createStore({
  modules: {
    ex1,
    ex2,
    ex3,
    ex4,
    ex5,
  },
})

export default store
