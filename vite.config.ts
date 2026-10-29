import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages serves a project site from /<repo>/; the deploy workflow passes that path in.
  base: process.env.BASE_PATH || '/',
  plugins: [vue()],
  build: {
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
  },
});
