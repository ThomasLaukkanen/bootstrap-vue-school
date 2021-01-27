import Vue from 'vue'
import VueRouter from 'vue-router'
import Hem from '../views/Hem.vue'
import Stats from '../views/Stats.vue'
import Politik from '../views/Politik.vue'
import Polisen from '../views/Polisen.vue'
import Jobb from '../views/Jobb.vue'

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
  {
    path: '/politik',
    name: 'Politik',
    component: Politik,
  },
  {
    path: '/polisen',
    name: 'Polisen',
    component: Polisen,
  },
  {
    path: '/Jobb',
    name: 'Jobb',
    component: Jobb,
  },
]

const router = new VueRouter({
  routes,
})

export default router
