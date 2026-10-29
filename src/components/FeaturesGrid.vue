<template>
  <section id="features" class="section">
    <div class="container">
      <p class="eyebrow">Features</p>
      <h2>Remove what distracts.<br />Keep what you came for.</h2>

      <div class="grid">
        <article v-for="(f, i) in features" :key="f.title" class="card" :class="{ dark: i === 0 }">
          <span class="icon" aria-hidden="true">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" v-html="f.icon" />
          </span>
          <h3>{{ f.title }}</h3>
          <p>{{ f.text }}</p>
        </article>
      </div>

      <h4>And {{ more.length }} more switches</h4>
      <ul class="chips">
        <li v-for="m in more" :key="m">
          <svg width="10" height="10" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M4 12.5l5 5L20 6.5" fill="none" stroke="currentColor" stroke-width="3"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          {{ m }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts" setup>
const features = [
  {
    title: 'Clean Mode',
    text: 'One switch, and the page is just the video player. No sidebar, no feed, no comments.',
    icon: '<rect x="3" y="5" width="18" height="14" rx="3"/><path d="M10 9.5v5l4-2.5z" fill="currentColor"/>',
  },
  {
    title: 'Block Shorts',
    text: 'The infinite vertical scroll disappears from the feed, search and sidebar.',
    icon: '<rect x="7" y="3" width="10" height="18" rx="2.5"/><path d="M4 4l16 16"/>',
  },
  {
    title: 'Hide recommendations',
    text: 'No “up next” rabbit hole beside the player, no suggestions at the end.',
    icon: '<rect x="3" y="4" width="7" height="5" rx="1"/><rect x="3" y="13" width="7" height="5" rx="1"/><path d="M14 6h7M14 15h7M14 9h4M14 18h4"/>',
  },
  {
    title: 'Hide comments',
    text: 'Watch without the arguments underneath. Live chat can go too.',
    icon: '<path d="M4 5h16v11H9l-5 4z"/><path d="M8 9.5h8M8 12.5h5"/>',
  },
  {
    title: 'Hide or blur thumbnails',
    text: 'Choose by title, not by the loudest face in the grid.',
    icon: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.6"/><path d="M21 16l-5-5-8 8"/>',
  },
  {
    title: 'Black & white mode',
    text: 'Drain the color from YouTube and it quietly loses its pull.',
    icon: '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor"/>',
  },
];

const more = [
  'Hide home feed',
  'Hide Explore & Trending',
  'Hide subscribe button',
  'Hide likes',
  'Hide views',
  'Hide Playables',
  'Hide live chat',
  'Hide top header bar',
  'Hide top bar & search',
  'Hide subscriptions',
  'Disable autoplay',
  'Disable end screen cards',
];
</script>

<style scoped>
.section {
  padding: 112px 0 120px;
}
h2 {
  margin-top: 12px;
  font-size: clamp(32px, 4.2vw, 46px);
}
.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-top: 40px;
}
.card {
  min-height: 160px;
  padding: 24px;
  border: 1px solid var(--line);
  border-radius: var(--radius);
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
h3 {
  margin-top: 20px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
}
.card p {
  margin-top: 8px;
  max-width: 400px;
  font-size: 13px;
  color: var(--muted);
}
.card.dark {
  background: var(--dark);
  border-color: var(--dark);
  color: #fff;
}
.card.dark .icon {
  background: var(--red);
  color: #fff;
}
.card.dark p {
  color: #a5a39c;
}

h4 {
  margin: 40px 0 0;
  font-size: 13px;
  font-weight: 600;
}
.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0 0;
  padding: 0;
  list-style: none;
}
.chips li {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid var(--line);
  border-radius: 999px;
  background: var(--surface);
  font-size: 12px;
  color: var(--ink-2);
}
.chips svg {
  color: var(--red);
}

@media (max-width: 760px) {
  .section {
    padding: 80px 0;
  }
  .grid {
    grid-template-columns: 1fr;
  }
  .card {
    min-height: 0;
  }
}
</style>
