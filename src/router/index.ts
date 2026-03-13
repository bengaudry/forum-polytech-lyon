import { createRouter, createWebHistory } from 'vue-router'

import CompaniesView from '../views/CompaniesView.vue'

const routes = [
  { path: '/', component: CompaniesView },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
