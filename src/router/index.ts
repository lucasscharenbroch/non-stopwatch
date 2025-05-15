import { createMemoryHistory, createRouter } from 'vue-router';

import TimerView from '../views/TimerView.vue';
import AboutView from '@/views/AboutView.vue';
import DataView from '@/views/DataView.vue';
import ConfigView from '@/views/ConfigView.vue';

const routes = [
  { path: '/', meta: { title: 'Timer' }, component: TimerView },
  { path: '/data', meta: { title: 'Data' }, component: DataView },
  { path: '/config', meta: { title: 'Config' }, component: ConfigView },
  { path: '/about', meta: { title: 'About' }, component: AboutView },
];

export const router = createRouter({
  history: createMemoryHistory('non-stopwatch'),
  routes,
});
