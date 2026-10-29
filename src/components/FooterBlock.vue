<template>
  <footer class="footer">
    <div class="container inner">
      <p class="brand">
        <Logo :size="14" />
        Clean YouTube · made by Alex · v{{ EXTENSION_VERSION }}
      </p>
      <nav>
        <a :href="`mailto:${CONTACT_EMAIL}`">Contact</a>
        <a :href="CHROME_STORE_URL" target="_blank" rel="noopener">Chrome Web Store</a>
        <span>YouTube is a trademark of Google LLC.</span>
      </nav>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import Logo from './Logo.vue';
import { CHROME_STORE_URL, CONTACT_EMAIL, EXTENSION_VERSION } from '../utils/links';
</script>

<style scoped>
.footer {
  margin-top: 96px;
  border-top: 1px solid var(--line);
  font-size: 12px;
  color: var(--muted);
}
.inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px 24px;
  padding-top: 24px;
  padding-bottom: 32px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 8px;
}
nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 20px;
}
nav a {
  text-decoration: underline;
  text-underline-offset: 3px;
}
nav a:hover {
  color: var(--ink);
}
</style>
