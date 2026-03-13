import { createRouter, createWebHistory } from 'vue-router'

import CompaniesView from '../views/CompaniesView.vue'

const routes = [
  { path: '/', component: CompaniesView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
