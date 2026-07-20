<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const progress = ref(0)
const visible = ref(false)
const R = 20
const C = 2 * Math.PI * R

let scrollTick = 0
const onScroll = () => {
  if (scrollTick) return
  scrollTick = requestAnimationFrame(() => {
    const el = document.documentElement
    const max = el.scrollHeight - el.clientHeight
    progress.value = max > 0 ? el.scrollTop / max : 0
    visible.value = el.scrollTop > 100
    scrollTick = 0
  })
}

const toTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const dash = computed(() => `${C * progress.value} ${C}`)

onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <Transition name="bt-fade">
    <button
      v-show="visible"
      class="back-to-top"
      aria-label="回到顶部"
      @click="toTop"
    >
      <svg viewBox="0 0 48 48">
        <circle class="bt-track" cx="24" cy="24" :r="R" />
        <circle
          class="bt-bar"
          cx="24"
          cy="24"
          :r="R"
          :stroke-dasharray="dash"
        />
      </svg>
      <span class="bt-arrow">↑</span>
    </button>
  </Transition>
</template>

<style scoped>
.back-to-top {
  position: fixed;
  right: 24px;
  bottom: 32px;
  z-index: 50;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  cursor: pointer;
  background: var(--fluent-surface, rgba(255, 255, 255, 0.7));
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--fluent-border, rgba(255, 255, 255, 0.5));
  box-shadow: var(--fluent-shadow, 0 8px 24px rgba(0, 0, 0, 0.12));
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.back-to-top:hover {
  transform: translateY(-3px);
  box-shadow: var(--fluent-shadow-hover, 0 14px 44px rgba(0, 0, 0, 0.2));
}
.back-to-top svg {
  position: absolute;
  inset: 0;
  transform: rotate(-90deg);
}
.back-to-top circle {
  fill: none;
  stroke-width: 3;
  stroke-linecap: round;
}
.bt-track {
  stroke: var(--color-primary-100, #dcf3fe);
}
.dark .bt-track {
  stroke: var(--color-primary-800, #116b97);
}
.bt-bar {
  stroke: var(--color-primary-500, #29b8ff);
  transition: stroke-dasharray 0.15s linear;
}
.bt-arrow {
  color: var(--color-primary-600, #06a1ef);
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
}
.dark .bt-arrow {
  color: var(--color-primary-400, #66ccff);
}

/* Transition */
.bt-fade-enter-active,
.bt-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}
.bt-fade-enter-from,
.bt-fade-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(10px);
}

@media (prefers-reduced-motion: reduce) {
  .back-to-top {
    transition: none;
  }
  .bt-fade-enter-active,
  .bt-fade-leave-active {
    transition: opacity 0.15s ease;
  }
}
</style>
