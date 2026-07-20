<script setup>
defineProps({
  time: { type: String, default: '' },
  title: { type: String, default: '' },
})
</script>

<template>
  <div class="md-timeline-item">
    <div class="md-ti-dot" />
    <div v-if="time" class="md-ti-time">{{ time }}</div>
    <div v-if="title" class="md-ti-title">{{ title }}</div>
    <div class="md-ti-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.md-timeline-item {
  position: relative;
  padding-bottom: 1.5rem;
  padding-left: 1.5rem;
}
.md-timeline-item:last-child {
  padding-bottom: 0;
}
.md-ti-dot {
  position: absolute;
  left: -1.55rem;
  top: 0.35rem;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--color-primary-400);
  border: 2px solid var(--fluent-surface, #fff);
  box-shadow: 0 0 0 3px var(--color-primary-200);
  z-index: 1;
}
.dark .md-ti-dot {
  border-color: var(--fluent-surface, #1c1e22);
  box-shadow: 0 0 0 3px var(--color-primary-800);
}
.md-ti-time {
  font-size: 0.8rem;
  color: var(--color-primary-500);
  font-weight: 600;
  margin-bottom: 0.25rem;
}
.dark .md-ti-time {
  color: var(--color-primary-400);
}
.md-ti-title {
  font-size: 1.05rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.md-ti-body {
  color: inherit;
  font-size: 0.95rem;
  line-height: 1.7;
}
</style>
