import Main from './pages/Main.vue';

export const Pages = {
  Main: 'Main',
};

export const routes = [
  {
    path: '/',
    name: Pages.Main,
    component: Main,
  },
  {
    // single-page site: /index.html and any stray path still show the landing instead of a blank page
    path: '/:pathMatch(.*)*',
    component: Main,
  },
];
