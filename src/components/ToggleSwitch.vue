<template>
  <button
    type="button"
    role="switch"
    class="toggle"
    :class="{ on: modelValue }"
    :aria-checked="modelValue"
    :aria-label="label"
    @click="emit('update:modelValue', !modelValue)"
  >
    <span class="knob" />
  </button>
</template>

<script lang="ts" setup>
defineProps<{ modelValue: boolean; label: string }>();
const emit = defineEmits<{ 'update:modelValue': [value: boolean] }>();
</script>

<style scoped>
.toggle {
  position: relative;
  flex: none;
  width: 30px;
  height: 17px;
  padding: 0;
  border: none;
  border-radius: 999px;
  background: #dcdad3;
  transition: background-color 0.2s;
}
.toggle.on {
  background: var(--red);
}
.knob {
  position: absolute;
  top: 2px;
  left: 2px;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s;
}
.toggle.on .knob {
  transform: translateX(13px);
}
</style>
