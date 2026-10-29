<template>
  <section id="faq" class="section">
    <div class="container narrow">
      <h2>Questions</h2>
      <div class="list">
        <details v-for="item in faq" :key="item.question">
          <summary>
            {{ item.question }}
            <span class="plus" aria-hidden="true" />
          </summary>
          <p>{{ item.answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { faq } from '../utils/faq';
</script>

<style scoped>
.section {
  padding: 64px 0 96px;
}
.narrow {
  max-width: 760px;
}
h2 {
  font-size: clamp(28px, 3.4vw, 34px);
  letter-spacing: -0.03em;
}
.list {
  margin-top: 28px;
  border-top: 1px solid var(--line);
}
details {
  border-bottom: 1px solid var(--line);
}
summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 18px 0;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  list-style: none;
}
summary::-webkit-details-marker {
  display: none;
}
.plus {
  position: relative;
  flex: none;
  width: 10px;
  height: 10px;
  transition: transform 0.2s;
}
.plus::before,
.plus::after {
  content: '';
  position: absolute;
  background: var(--muted);
}
.plus::before {
  top: 4.5px;
  left: 0;
  width: 10px;
  height: 1px;
}
.plus::after {
  top: 0;
  left: 4.5px;
  width: 1px;
  height: 10px;
}
details[open] .plus {
  transform: rotate(45deg);
}
details p {
  max-width: 620px;
  padding: 0 0 20px;
  font-size: 14px;
  color: var(--muted);
}
</style>
