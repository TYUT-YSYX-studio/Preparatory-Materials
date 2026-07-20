<script setup>
defineProps({
  title: { type: String, required: true },
  icon: { type: String, default: '' },
})
</script>

<template>
  <div class="md-card">
    <div v-if="icon" class="md-card-icon" v-html="icon" />
    <div class="md-card-title">{{ title }}</div>
    <div class="md-card-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.md-card {
  background: var(--fluent-surface, rgba(255,255,255,.62));
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--fluent-border, rgba(255,255,255,.55));
  border-radius: var(--fluent-radius, 14px);
  padding: 1.5rem;
  transition: box-shadow 0.3s ease, transform 0.3s ease, border-color 0.3s ease;
  position: relative;
  overflow: hidden;
}
.md-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  border-top: 1px solid var(--fluent-edge, rgba(255,255,255,.85));
  pointer-events: none;
}
.md-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--fluent-shadow-hover, 0 14px 44px rgba(0,0,0,.2));
  border-color: var(--color-primary-300);
}
.md-card-icon {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: var(--color-primary-100);
  color: var(--color-primary-600);
}
.dark .md-card-icon {
  background: var(--color-primary-900);
  color: var(--color-primary-400);
}
.md-card-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--color-primary-700);
}
.dark .md-card-title {
  color: var(--color-primary-300);
}
.md-card-body {
  color: inherit;
  font-size: 0.95rem;
  line-height: 1.7;
}
</style>
