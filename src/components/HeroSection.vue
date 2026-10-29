<template>
  <section id="top" class="hero">
    <div class="container">
      <div class="intro">
        <p class="badge">
          <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2" />
            <circle cx="12" cy="12" r="4" fill="currentColor" />
          </svg>
          Featured on the Chrome Web Store
        </p>
        <h1>YouTube, minus<br />the noise.</h1>
        <p class="lead">
          Block Shorts, hide recommendations, comments and feeds. Open YouTube, watch what you came
          for — and get back to your day.
        </p>
        <div class="actions">
          <a :href="CHROME_STORE_URL" target="_blank" rel="noopener" class="btn btn-red btn-lg">
            <span aria-hidden="true">+</span> Add to Chrome
          </a>
          <a href="#features" class="btn btn-outline btn-lg">
            See all {{ stats.switches }} switches
          </a>
        </div>
        <ul class="proof">
          <li>
            <span class="stars" aria-hidden="true">★★★★★</span>
            <b>{{ stats.rating }}</b> · {{ stats.ratingsCount }} ratings
          </li>
          <li><b>{{ stats.users }}</b> users</li>
          <li><b>0</b> data collected</li>
        </ul>
      </div>

      <div class="demo">
        <div class="browser">
          <div class="bar">
            <span class="dots"><i /><i /><i /></span>
            <span class="url">youtube.com/watch?v=…</span>
            <Logo :size="16" />
          </div>
          <div class="page" :class="{ bw: state.blackWhite, clean: state.cleanMode }">
            <div class="main">
              <div class="player">
                <span class="play" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24">
                    <path d="M7 5v14l12-7z" fill="currentColor" />
                  </svg>
                </span>
                <span class="time">12:48 / 33:30</span>
                <span class="progress"><span /></span>
              </div>
              <div class="title-line" />
              <Transition name="fade">
                <div v-if="!state.cleanMode && !state.hideShorts" class="shorts">
                  <span class="tag">Shorts</span>
                  <div class="shorts-row"><i /><i /><i /><i /><i /></div>
                </div>
              </Transition>
              <Transition name="fade">
                <div v-if="!state.cleanMode && !state.hideComments" class="comments">
                  <div v-for="n in 3" :key="n" class="comment"><i /><span /></div>
                </div>
              </Transition>
            </div>
            <Transition name="fade">
              <aside v-if="!state.cleanMode" class="side">
                <div v-for="n in 5" :key="n" class="rec"><i /><span /></div>
              </aside>
            </Transition>
          </div>
        </div>
        <ExtensionPopup v-model="state" :items="heroSwitches" class="hero-popup" />
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Logo from './Logo.vue';
import ExtensionPopup from './ExtensionPopup.vue';
import { CHROME_STORE_URL, stats } from '../utils/links';

const heroSwitches = [
  { key: 'cleanMode', label: 'Clean Mode' },
  { key: 'hideShorts', label: 'Hide Shorts' },
  { key: 'hideComments', label: 'Hide comments' },
  { key: 'blackWhite', label: 'Black & white' },
];

const state = ref<Record<string, boolean>>({
  cleanMode: true,
  hideShorts: true,
  hideComments: true,
  blackWhite: false,
});
</script>

<style scoped>
.hero {
  padding: 72px 0 96px;
}
.intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.badge {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 5px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  font-family: var(--mono);
  font-size: 11px;
  color: var(--ink-2);
}
.badge svg {
  color: var(--red);
}
h1 {
  margin-top: 24px;
  font-size: clamp(44px, 7.4vw, 84px);
  letter-spacing: -0.045em;
  line-height: 1;
}
.lead {
  max-width: 470px;
  margin-top: 24px;
  font-size: 16px;
  color: var(--muted);
}
.actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin-top: 32px;
}
.proof {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px 28px;
  margin: 24px 0 0;
  padding: 0;
  list-style: none;
  font-size: 13px;
  color: var(--muted);
}
.proof b {
  color: var(--ink);
  font-weight: 600;
}
.stars {
  color: #f2a91e;
  letter-spacing: 1px;
  margin-right: 4px;
}

/* demo */
.demo {
  position: relative;
  max-width: 940px;
  margin: 64px auto 0;
}
.browser {
  overflow: hidden;
  border-radius: 12px;
  background: #0e0e0e;
  box-shadow: 0 40px 80px -30px rgba(20, 20, 20, 0.45);
}
.bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  height: 30px;
  padding: 0 10px;
  background: #ebe9e3;
}
.dots {
  display: flex;
  gap: 5px;
}
.dots i {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #c9c6bd;
}
.url {
  flex: 0 1 300px;
  padding: 2px 10px;
  border-radius: 6px;
  background: #fff;
  font-family: var(--mono);
  font-size: 10px;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
}
.page {
  display: flex;
  gap: 18px;
  min-height: 420px;
  padding: 32px 64px 40px;
  transition:
    filter 0.4s,
    padding 0.3s;
}
.page.bw {
  filter: grayscale(1);
}
.main {
  flex: 1;
  min-width: 0;
}
.player {
  position: relative;
  aspect-ratio: 16 / 7.6;
  border-radius: 6px;
  background: #2a2a2a;
  display: grid;
  place-items: center;
}
.play {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.12);
  color: #fff;
}
.time {
  position: absolute;
  left: 14px;
  bottom: 18px;
  font-family: var(--mono);
  font-size: 9px;
  color: rgba(255, 255, 255, 0.6);
}
.progress {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 10px;
  height: 2px;
  background: rgba(255, 255, 255, 0.15);
}
.progress span {
  display: block;
  width: 38%;
  height: 100%;
  background: var(--red);
}
.title-line {
  width: 46%;
  height: 8px;
  margin-top: 14px;
  border-radius: 4px;
  background: #3a3a3a;
}
.tag {
  display: inline-block;
  padding: 1px 6px;
  border-radius: 3px;
  background: var(--red);
  color: #fff;
  font-size: 9px;
  font-weight: 600;
}
.shorts {
  margin-top: 18px;
}
.shorts-row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 8px;
  margin-top: 6px;
}
.shorts-row i {
  aspect-ratio: 9 / 13;
  border-radius: 5px;
}
.shorts-row i:nth-child(1) {
  background: #8c4b3e;
}
.shorts-row i:nth-child(2) {
  background: #3e5b8c;
}
.shorts-row i:nth-child(3) {
  background: #7b3e8c;
}
.shorts-row i:nth-child(4) {
  background: #3e8c6a;
}
.shorts-row i:nth-child(5) {
  background: #8c7a3e;
}
.comments {
  margin-top: 18px;
}
.comment {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
}
.comment i {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #444;
}
.comment span {
  height: 6px;
  width: 55%;
  border-radius: 3px;
  background: #333;
}
.side {
  width: 27%;
  flex: none;
}
.rec {
  display: flex;
  gap: 8px;
  margin-bottom: 10px;
}
.rec i {
  width: 46%;
  aspect-ratio: 16 / 9;
  border-radius: 4px;
  flex: none;
}
.rec:nth-child(odd) i {
  background: #6a3b33;
}
.rec:nth-child(even) i {
  background: #33506a;
}
.rec:nth-child(3) i {
  background: #5d3a6a;
}
.rec span {
  flex: 1;
  height: 6px;
  margin-top: 3px;
  border-radius: 3px;
  background: #333;
}

.hero-popup {
  position: absolute;
  right: -28px;
  bottom: -40px;
  width: 200px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 1000px) {
  .hero-popup {
    right: 12px;
  }
}
@media (max-width: 640px) {
  .hero {
    padding: 48px 0 64px;
  }
  .page {
    min-height: 0;
    padding: 16px;
  }
  .side {
    display: none;
  }
  .hero-popup {
    position: relative;
    right: auto;
    bottom: auto;
    width: auto;
    max-width: 260px;
    margin: -24px 16px 0 auto;
  }
}
</style>
