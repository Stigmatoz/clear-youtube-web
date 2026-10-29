<template>
  <section id="how-it-works" class="section">
    <div class="container inner">
      <div class="text">
        <p class="eyebrow">How it works</p>
        <h2>Every distraction<br />has its own switch.</h2>
        <p class="lead">
          Click the icon in your toolbar and flip what you don't want to see. Your YouTube, set up
          exactly the way you want it.
        </p>
        <ol>
          <li><span>01</span> Add Clean YouTube to Chrome</li>
          <li><span>02</span> Open the popup and choose what to hide</li>
          <li><span>03</span> Watch what you came for — then close the tab</li>
        </ol>
      </div>

      <div class="demo">
        <ExtensionPopup v-model="state" :items="items" :counter="counter" size="lg" />
        <p class="hint">Try it — the switches work.</p>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import ExtensionPopup from './ExtensionPopup.vue';
import { stats } from '../utils/links';

const items = [
  { key: 'cleanMode', label: 'Clean Mode' },
  { key: 'hideShorts', label: 'Hide Shorts' },
  { key: 'hideRelated', label: 'Hide recommended videos' },
  { key: 'hideComments', label: 'Hide comments' },
  { key: 'hideHome', label: 'Hide home feed' },
  { key: 'blurThumbnails', label: 'Blur thumbnails' },
  { key: 'blackWhite', label: 'Black & white mode' },
  { key: 'disableAutoplay', label: 'Disable autoplay' },
];

const state = ref<Record<string, boolean>>({
  cleanMode: false,
  hideShorts: true,
  hideRelated: true,
  hideComments: true,
  hideHome: false,
  blurThumbnails: false,
  blackWhite: false,
  disableAutoplay: true,
});

const counter = computed(() => {
  const on = Object.values(state.value).filter(Boolean).length;
  return `${on} of ${stats.switches} on`;
});
</script>

<style scoped>
.section {
  padding: 120px 0;
  background: var(--dark);
  color: #fff;
}
.inner {
  display: grid;
  grid-template-columns: 1fr 380px;
  align-items: center;
  gap: 64px;
}
.eyebrow {
  color: #8d8b84;
}
h2 {
  margin-top: 12px;
  font-size: clamp(32px, 4.2vw, 46px);
}
.lead {
  max-width: 420px;
  margin-top: 20px;
  color: #a5a39c;
  font-size: 14px;
}
ol {
  margin: 32px 0 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
}
li {
  display: flex;
  gap: 16px;
  padding: 6px 0;
}
li span {
  font-family: var(--mono);
  font-size: 12px;
  color: #6f6d67;
  line-height: 1.9;
}
.hint {
  margin-top: 16px;
  text-align: center;
  font-size: 12px;
  color: #8d8b84;
}
@media (max-width: 860px) {
  .section {
    padding: 80px 0;
  }
  .inner {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .demo {
    max-width: 400px;
  }
}
</style>
