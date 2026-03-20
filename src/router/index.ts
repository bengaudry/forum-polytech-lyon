import { createRouter, createWebHistory, type RouterOptions } from 'vue-router'

const routes: RouterOptions['routes'] = [
  { path: '/', component: () => import('../views/HomeView.vue') },
  { path: '/entreprises', component: () => import('../views/CompaniesView.vue') },
  {
    path: '/planning',
    component: () => import('../views/PlanningView.vue'),
  },
  {
    path: '/plan',
    component: () => import('../views/PlanView.vue'),
  },
  {
    path: '/index.html',
    redirect: '/entreprises',
  },
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
