<template>
  <section class="container">
    <dl class="stats">
      <div>
        <dt>{{ stats.users }}</dt>
        <dd>people have it installed</dd>
      </div>
      <div>
        <dt>{{ stats.rating }}<small>/5</small></dt>
        <dd>from {{ stats.ratingsCount }} Chrome Web Store ratings</dd>
      </div>
      <div>
        <dt>{{ stats.switches }}</dt>
        <dd>independent switches</dd>
      </div>
      <div>
        <dt>{{ stats.sizeKb }}<small>KB</small></dt>
        <dd>total install size</dd>
      </div>
    </dl>
  </section>
</template>

<script lang="ts" setup>
import { stats } from '../utils/links';
</script>

<style scoped>
.stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 0;
  padding: 32px 0 40px;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
}
.stats div {
  padding-left: 6px;
}
dt {
  font-size: clamp(32px, 4vw, 44px);
  font-weight: 600;
  letter-spacing: -0.04em;
  line-height: 1.1;
}
small {
  margin-left: 4px;
  font-size: 0.5em;
  font-weight: 500;
  color: var(--muted);
  letter-spacing: 0;
}
dd {
  margin: 6px 0 0;
  font-size: 12px;
  color: var(--muted);
}
@media (max-width: 760px) {
  .stats {
    grid-template-columns: 1fr 1fr;
    row-gap: 28px;
  }
}
</style>
