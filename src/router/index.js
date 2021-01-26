import Vue from 'vue'
import VueRouter from 'vue-router'
import Hem from '../views/Hem.vue'
import Stats from '../views/Stats.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Hem',
    component: Hem,
  },
  {
    path: '/om',
    name: 'Om',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Om.vue'),
  },
  {
    path: '/stats',
    name: 'Stats',
    component: Stats,
  },
]

const router = new VueRouter({
  routes,
})

export default router
