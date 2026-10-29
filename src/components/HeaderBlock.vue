<template>
  <header class="header">
    <div class="container inner">
      <a href="#top" class="brand">
        <Logo />
        <span>Clean YouTube</span>
      </a>
      <nav class="nav">
        <a href="#features">Features</a>
        <a href="#how-it-works">How it works</a>
        <a href="#privacy">Privacy</a>
        <a href="#faq">FAQ</a>
      </nav>
      <a :href="CHROME_STORE_URL" target="_blank" rel="noopener" class="btn btn-dark">
        Add to Chrome
      </a>
    </div>
  </header>
</template>

<script lang="ts" setup>
import Logo from './Logo.vue';
import { CHROME_STORE_URL } from '../utils/links';
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(245, 244, 240, 0.85);
  backdrop-filter: saturate(1.4) blur(12px);
  -webkit-backdrop-filter: saturate(1.4) blur(12px);
  border-bottom: 1px solid var(--line);
}
.inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  gap: 16px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 600;
  font-size: 15px;
}
.nav {
  display: flex;
  gap: 32px;
  font-size: 14px;
  color: var(--ink-2);
}
.nav a:hover {
  color: var(--ink);
}
.btn {
  height: 36px;
  font-size: 13px;
}
@media (max-width: 760px) {
  .nav {
    display: none;
  }
}
</style>
