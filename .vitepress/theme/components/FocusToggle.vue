<script setup>
import { ref, onMounted, watch } from 'vue'

const STORAGE_KEY = 'dux-focus-mode'
const enabled = ref(false)

function toggle() { enabled.value = !enabled.value }
function apply(val) {
  document.documentElement.classList.toggle('focus-mode', val)
  localStorage.setItem(STORAGE_KEY, val ? '1' : '0')
}
watch(enabled, apply)

onMounted(() => {
  if (localStorage.getItem(STORAGE_KEY) === '1') { enabled.value = true; apply(true) }
})
</script>

<template>
  <button
    class="ft-btn"
    :class="{ active: enabled }"
    :aria-label="enabled ? '退出专注模式' : '专注模式'"
    @click="toggle"
  >
    <span class="ft-icon" />
    <span class="ft-label">{{ enabled ? '已专注' : '专注' }}</span>
  </button>
</template>

<style scoped>
.ft-btn {
  position: fixed;
  left: 16px;
  bottom: 80px;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0;
  width: 36px; height: 36px;
  padding: 0;
  border-radius: 50%;
  cursor: pointer;
  background: var(--fluent-surface, rgba(255,255,255,.7));
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--fluent-border, rgba(255,255,255,.5));
  box-shadow: var(--fluent-shadow, 0 8px 24px rgba(0,0,0,.12));
  transition: width .25s ease, padding .25s ease, border-radius .25s ease, gap .25s ease, transform .25s ease;
  white-space: nowrap;
}

.ft-btn:hover { transform: scale(1.05); }

.ft-btn:hover,
.ft-btn.active {
  width: 85px;
  padding: 0 12px 0 8px;
  border-radius: 20px;
  gap: 8px;
}

.ft-btn.active { box-shadow: 0 0 14px 3px color-mix(in srgb, var(--color-primary-400) 33%, transparent); }

.ft-icon {
  width: 18px; height: 18px; display: block; flex-shrink: 0;
  background: currentColor;
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z'/%3E%3Ccircle cx='12' cy='12' r='3'/%3E%3C/svg%3E");
  mask-size: contain; -webkit-mask-size: contain;
  mask-repeat: no-repeat; -webkit-mask-repeat: no-repeat;
  mask-position: center; -webkit-mask-position: center;
  color: var(--color-gray-500);
}

.ft-label {
  font-size: 12px; font-weight: 600;
  color: var(--color-gray-500);
  max-width: 0; overflow: hidden;
  transition: max-width .25s ease;
}
.ft-btn:hover .ft-label,
.ft-btn.active .ft-label { max-width: 60px; }
.dark .ft-label { color: var(--color-gray-400); }
</style>
