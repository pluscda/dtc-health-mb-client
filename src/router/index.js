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
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/Login.vue"),
  },
  {
    path: '/canceratab',
    name: 'canceratab',
    component: () => import("../components/CancerAtAb.vue"),
  },
  {
    path: '/cancerathead',
    name: 'cancerathead',
    component: () => import("../components/CancerAtHead.vue"),
  },
  {
    path: '/canceratlower',
    name: 'canceratlower',
    component: () => import("../components/CancerAtLower.vue"),
  },
  {
    path: '/canceratlung',
    name: 'canceratlung',
    component: () => import("../components/CancerAtLung.vue"),
  },
  {
    path: '/canceratother',
    name: 'canceratother',
    component: () => import("../components/CancerAtOther.vue"),
  },
  {
    path: '/myorderlist',
    name: 'myorderlist',
    component: () => import("../views/MyOrderList.vue"),
  },
  {
    path: '/dtc/login',
    name: 'login',
    component: () => import("../views/Login.vue"),
  },
  {
    path: '/doclist',
    name: 'doclist',
    component: () => import("../views/DocList.vue"),
  },
  {
    path: '/file',
    name: 'file',
    component: () => import("../views/FileList.vue"),
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
      return { x: 0, y: 0 }
  }
})

export default router
