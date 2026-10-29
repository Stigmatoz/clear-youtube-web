<template>
  <HeaderBlock />
  <router-view />
  <FooterBlock />
</template>

<script lang="ts" setup>
import { useHead } from '@unhead/vue';
import HeaderBlock from './components/HeaderBlock.vue';
import FooterBlock from './components/FooterBlock.vue';

useHead({
  // unhead's SSR head defaults to lang="en" and overrides index.html during vite-ssg build
  htmlAttrs: { lang: 'en' },
  title: 'Clean YouTube — Block Shorts, Hide Comments & Feeds',
});
</script>
