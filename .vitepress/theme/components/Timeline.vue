<template>
  <div class="md-timeline">
    <slot />
  </div>
</template>

<style scoped>
.md-timeline {
  position: relative;
  padding-left: 2rem;
  margin: 1.5rem 0;
}
.md-timeline::before {
  content: '';
  position: absolute;
  left: 0.5rem;
  top: 0.5rem;
  bottom: 0.5rem;
  width: 2px;
  background: linear-gradient(
    to bottom,
    var(--color-primary-400),
    var(--color-primary-200)
  );
  border-radius: 1px;
}
.dark .md-timeline::before {
  background: linear-gradient(
    to bottom,
    var(--color-primary-500),
    var(--color-primary-800)
  );
}
</style>
