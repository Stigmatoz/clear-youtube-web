<template>
  <section class="container">
    <div class="cta">
      <h2>Take back your YouTube.</h2>
      <p>Join {{ stats.users }} people who open YouTube on purpose — and close it on time.</p>
      <a :href="CHROME_STORE_URL" target="_blank" rel="noopener" class="btn btn-white btn-lg">
        <span aria-hidden="true">+</span> Add to Chrome
      </a>
      <a :href="CHROME_STORE_REVIEWS_URL" target="_blank" rel="noopener" class="rating">
        ★ {{ stats.rating }} · {{ stats.ratingsCount }} ratings on the Chrome Web Store
      </a>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { CHROME_STORE_REVIEWS_URL, CHROME_STORE_URL, stats } from '../utils/links';
</script>

<style scoped>
.cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 88px 24px 72px;
  border-radius: 20px;
  background: var(--red);
  color: #fff;
  text-align: center;
}
h2 {
  font-size: clamp(36px, 6vw, 64px);
  letter-spacing: -0.045em;
}
p {
  max-width: 340px;
  margin-top: 24px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.88);
}
.btn {
  margin-top: 28px;
}
.rating {
  margin-top: 24px;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
}
.rating:hover {
  color: #fff;
}
</style>
