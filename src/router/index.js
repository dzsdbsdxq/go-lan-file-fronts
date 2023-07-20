import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DownView from "@/views/DownView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/:code',
    name: 'down',
    component: DownView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
