<template>
  <svg :width="size" :height="size" viewBox="0 0 24 24" aria-hidden="true">
    <rect width="24" height="24" rx="6" fill="#d83a26" />
    <path d="M9.5 7.8v8.4l7-4.2z" fill="#fff" />
  </svg>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{ size?: number }>(), { size: 22 });
</script>
