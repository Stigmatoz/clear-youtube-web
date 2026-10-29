<template>
  <section id="privacy" class="section">
    <div class="container">
      <div class="card">
        <div class="text">
          <span class="icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 3l8 3v6c0 4.5-3.4 8.2-8 9-4.6-.8-8-4.5-8-9V6z" />
              <path d="M8.5 12l2.5 2.5 4.5-5" />
            </svg>
          </span>
          <h2>Zero tracking.<br />Nothing leaves your<br />browser.</h2>
          <p>
            Clean YouTube doesn't collect anything about you and doesn't send data anywhere. It
            just hides elements on the page.
          </p>
        </div>
        <ul>
          <li v-for="item in points" :key="item">
            <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" stroke-width="3"
                stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { stats } from '../utils/links';

const points = [
  'Developer declares no collection or use of your data',
  "Follows Chrome's recommended practices for extensions",
  `Tiny footprint — about ${stats.sizeKb} KB`,
  `Available in ${stats.languages} languages`,
];
</script>

<style scoped>
.section {
  padding: 120px 0 64px;
}
.card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  padding: 48px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: var(--surface);
}
.icon {
  display: inline-grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: #f1efea;
  color: var(--ink-2);
}
h2 {
  margin-top: 24px;
  font-size: clamp(28px, 3.4vw, 36px);
}
.text p {
  max-width: 380px;
  margin-top: 20px;
  font-size: 13px;
  color: var(--muted);
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 13px;
  color: var(--ink-2);
}
li {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
}
li svg {
  flex: none;
  color: var(--red);
}
@media (max-width: 760px) {
  .section {
    padding: 80px 0 48px;
  }
  .card {
    grid-template-columns: 1fr;
    gap: 24px;
    padding: 28px 24px;
  }
}
</style>
