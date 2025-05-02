import { createRouter, createWebHistory } from 'vue-router'

import TimerView from '../views/TimerView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  { path: '/', meta: {title: 'Timer'}, component: TimerView },
  { path: '/about', meta: {title: 'About'}, component: AboutView },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})