<template>
  <div class="popup" :class="size">
    <div class="popup-head">
      <Logo :size="size === 'lg' ? 18 : 14" />
      <span class="name">Clean YouTube</span>
      <span v-if="counter" class="counter">{{ counter }}</span>
    </div>
    <ul>
      <li v-for="item in items" :key="item.key">
        <span>{{ item.label }}</span>
        <ToggleSwitch v-model="model[item.key]" :label="item.label" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import Logo from './Logo.vue';
import ToggleSwitch from './ToggleSwitch.vue';

withDefaults(
  defineProps<{
    items: { key: string; label: string }[];
    counter?: string;
    size?: 'sm' | 'lg';
  }>(),
  { size: 'sm' },
);
const model = defineModel<Record<string, boolean>>({ required: true });
</script>

<style scoped>
.popup {
  background: var(--surface);
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: 12px;
  box-shadow: var(--shadow-pop);
  font-size: 11px;
}
.popup-head {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 10px 12px;
  border-bottom: 1px solid var(--line);
  font-weight: 600;
}
.counter {
  margin-left: auto;
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 400;
  color: var(--muted);
}
ul {
  list-style: none;
  margin: 0;
  padding: 4px 12px 8px;
}
li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 5px 0;
}

.lg {
  font-size: 13px;
  border-radius: 16px;
}
.lg .popup-head {
  padding: 14px 18px;
  gap: 9px;
}
.lg .counter {
  font-size: 11px;
}
.lg ul {
  padding: 6px 18px 12px;
}
.lg li {
  padding: 8px 0;
}
.lg li + li {
  border-top: 1px solid #f0eee9;
}
</style>
