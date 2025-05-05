import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomeView.vue'
import CreatePage from '@/views/CreateView.vue'
import todoDetailView from '@/views/TodoDetailView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePage,
    },
    {
      path: '/todo/:id',
      name: 'todoDetail',
      component: todoDetailView,
    },
  ],
})

export default router
