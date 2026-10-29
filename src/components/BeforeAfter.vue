<template>
  <section class="section">
    <div class="container">
      <div class="head">
        <h2>Same video.<br />Two very different<br />afternoons.</h2>
        <p>
          YouTube is built to keep you scrolling. Clean YouTube strips out everything that isn't
          the video you chose.
        </p>
      </div>

      <div class="compare">
        <figure>
          <div class="frame">
            <div class="bar"><i /><i /><i /></div>
            <div class="screen before">
              <div class="col">
                <div class="player" />
                <div class="line" />
                <div class="block">
                  <span class="tag">Shorts</span>
                  <div class="shorts"><i /><i /><i /><i /></div>
                </div>
                <div class="block comments">
                  <span class="tag">Comments</span>
                  <span class="cline" /><span class="cline short" />
                </div>
              </div>
              <div class="recs">
                <span class="tag">Recommended</span>
                <div v-for="n in 6" :key="n" class="rec"><i /><span /></div>
              </div>
            </div>
          </div>
          <figcaption>
            <span class="label">Before</span> Three rabbit holes before the video even starts.
          </figcaption>
        </figure>

        <figure>
          <div class="frame">
            <div class="bar"><i /><i /><i /></div>
            <div class="screen after">
              <div class="player">
                <span class="play" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 24 24">
                    <path d="M7 5v14l12-7z" fill="currentColor" />
                  </svg>
                </span>
              </div>
              <div class="line" />
            </div>
          </div>
          <figcaption>
            <span class="label red">After</span> Just the video. Nothing pulling you sideways.
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section {
  padding: 48px 0 72px;
}
.head {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 32px;
}
h2 {
  font-size: clamp(32px, 4.2vw, 46px);
}
.head p {
  max-width: 330px;
  color: var(--muted);
  font-size: 14px;
}
.compare {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-top: 40px;
}
figure {
  margin: 0;
}
.frame {
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--surface);
}
.bar {
  display: flex;
  gap: 4px;
  padding: 8px 10px;
  background: #efede7;
}
.bar i {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #cfccc3;
}
.screen {
  aspect-ratio: 16 / 11;
  padding: 14px;
}
.player {
  aspect-ratio: 16 / 7.5;
  border-radius: 5px;
  background: #262626;
}
.line {
  width: 55%;
  height: 5px;
  margin-top: 8px;
  border-radius: 3px;
  background: #e6e3dc;
}
.tag {
  display: inline-block;
  padding: 1px 5px;
  border-radius: 3px;
  background: var(--red);
  color: #fff;
  font-size: 8px;
  font-weight: 600;
  line-height: 1.5;
}

.before {
  display: flex;
  gap: 12px;
}
.col {
  flex: 1;
  min-width: 0;
}
.block {
  margin-top: 10px;
}
.shorts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 6px;
  margin-top: 4px;
  padding: 6px;
  border: 1px solid #f1c9c2;
  border-radius: 5px;
}
.shorts i {
  aspect-ratio: 3 / 4;
  border-radius: 4px;
}
.shorts i:nth-child(1) {
  background: #efe0d8;
}
.shorts i:nth-child(2) {
  background: #dbe3ee;
}
.shorts i:nth-child(3) {
  background: #e7def0;
}
.shorts i:nth-child(4) {
  background: #dcebdc;
}
.comments {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 6px;
  border: 1px solid #f1c9c2;
  border-radius: 5px;
}
.comments .tag {
  align-self: flex-start;
  margin: -12px 0 2px;
}
.cline {
  height: 4px;
  width: 80%;
  border-radius: 2px;
  background: #ebe8e1;
}
.cline.short {
  width: 50%;
}
.recs {
  width: 36%;
  flex: none;
  padding: 6px;
  border: 1px solid #f1c9c2;
  border-radius: 5px;
}
.recs .tag {
  margin: -12px 0 6px;
}
.rec {
  display: flex;
  gap: 5px;
  margin-bottom: 6px;
}
.rec i {
  width: 48%;
  aspect-ratio: 16 / 10;
  border-radius: 3px;
  background: #ece6dc;
}
.rec:nth-child(3n) i {
  background: #dfe6e9;
}
.rec:nth-child(3n + 1) i {
  background: #e6e0ec;
}
.rec span {
  flex: 1;
  height: 4px;
  margin-top: 2px;
  border-radius: 2px;
  background: #ebe8e1;
}

.after {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 14px 8%;
}
.after .player {
  display: grid;
  place-items: center;
}
.play {
  display: grid;
  place-items: center;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
}
.after .line {
  width: 100%;
  background: #eeece6;
}

figcaption {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  font-size: 12px;
  color: var(--muted);
}
.label {
  padding: 2px 6px;
  border-radius: 4px;
  background: #e8e6df;
  color: var(--ink-2);
  font-family: var(--mono);
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.label.red {
  background: var(--red);
  color: #fff;
}

@media (max-width: 760px) {
  .head {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .compare {
    grid-template-columns: 1fr;
  }
}
</style>
