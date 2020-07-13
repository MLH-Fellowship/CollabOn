import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:org',
    name: 'Org',
    // Route for organizations
    component: () => import(/* webpackChunkName: "feed" */ '../views/Feed.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
