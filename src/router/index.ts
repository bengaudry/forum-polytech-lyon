import { createRouter, createWebHistory, type RouterOptions } from 'vue-router'

const routes: RouterOptions['routes'] = [
  { path: '/', component: () => import('../views/HomeView.vue') },
  { path: '/entreprises', component: () => import('../views/CompaniesView.vue') },
  {
    path: '/planning',
    component: () => import('../views/PlanningView.vue'),
  },
  {
    path: '/companies',
    redirect: '/entreprises',
  },
  {
    path: '/entreprises.html',
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
