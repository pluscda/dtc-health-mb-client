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
    name: 'Home2',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/Login.vue"),
  },
  {
    path: '/doctordetails',
    name: 'doctordetails',
    component: () => import("../views/DoctorDetails.vue"),
  },
  {
    path: '/gis',
    name: 'gis',
    component: () => import("../views/Gis.vue"),
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
    path: '/heart',
    name: 'heart',
    component: () => import("../components/Heart.vue"),
  },
  {
    path: '/Stroke',
    name: 'stroke',
    component: () => import("../components/Stroke.vue"),
  },
  {
    path: '/myorderlist',
    name: 'myorderlist',
    component: () => import("../views/MyOrderList.vue"),
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
  {
    path: '/about',
    name: 'about',
    component: () => import("../views/About.vue"),
  },

]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
