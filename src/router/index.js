import Vue from 'vue'
import VueRouter from 'vue-router'

import CheckForUpdate from '../views/CheckForUpdates'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CheckForUpdate',
    component: CheckForUpdate
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
]

const router = new VueRouter({ routes })

export default router
