import { ViteSSG } from 'vite-ssg';
import App from './App.vue';

import '@fontsource-variable/inter/wght.css';
import './global.css';
import { routes } from './router';

export const createApp = ViteSSG(App, {
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' };
    return { top: 0, behavior: 'smooth' };
  },
});
