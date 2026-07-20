<script setup>
defineProps({
  cols: { type: Number, default: 2 },
})
</script>

<template>
  <div class="md-card-group" :style="{ '--cg-cols': cols }">
    <slot />
  </div>
</template>

<style scoped>
.md-card-group {
  display: grid;
  grid-template-columns: repeat(var(--cg-cols, 2), 1fr);
  gap: 1.25rem;
  margin: 1.5rem 0;
}
@media (max-width: 768px) {
  .md-card-group {
    grid-template-columns: 1fr;
  }
}
</style>
