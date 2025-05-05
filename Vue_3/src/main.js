import './assets/styles/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { createStore } from 'vuex'
import storeBase from './store'

const store = createStore(storeBase)

const app = createApp(App)

// app.use(createPinia())
app.use(router)

app.use(store)

app.mount('#app')
