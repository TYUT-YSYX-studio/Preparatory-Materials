<script setup>
import { ref, onMounted } from 'vue'

const THEMES = {
  blue:    { label: '天蓝',   color: '#66CCFF', colors: { '--color-primary-50':'#F0FAFE','--color-primary-100':'#DCF3FE','--color-primary-200':'#B8E7FF','--color-primary-300':'#8FDAFF','--color-primary-400':'#66CCFF','--color-primary-500':'#29B8FF','--color-primary-600':'#06A1EF','--color-primary-700':'#0A85C2','--color-primary-800':'#116B97','--color-primary-900':'#135272','--color-primary-950':'#0C3245' }},
  emerald: { label: '翡翠',   color: '#34D399', colors: { '--color-primary-50':'#ECFDF5','--color-primary-100':'#D1FAE5','--color-primary-200':'#A7F3D0','--color-primary-300':'#6EE7B7','--color-primary-400':'#34D399','--color-primary-500':'#10B981','--color-primary-600':'#059669','--color-primary-700':'#047857','--color-primary-800':'#065F46','--color-primary-900':'#064E3B','--color-primary-950':'#022C22' }},
  violet:  { label: '紫罗兰', color: '#A78BFA', colors: { '--color-primary-50':'#F5F3FF','--color-primary-100':'#EDE9FE','--color-primary-200':'#DDD6FE','--color-primary-300':'#C4B5FD','--color-primary-400':'#A78BFA','--color-primary-500':'#8B5CF6','--color-primary-600':'#7C3AED','--color-primary-700':'#6D28D9','--color-primary-800':'#5B21B6','--color-primary-900':'#4C1D95','--color-primary-950':'#2E1065' }},
  rose:    { label: '玫瑰',   color: '#FB7185', colors: { '--color-primary-50':'#FFF1F2','--color-primary-100':'#FFE4E6','--color-primary-200':'#FECDD3','--color-primary-300':'#FDA4AF','--color-primary-400':'#FB7185','--color-primary-500':'#F43F5E','--color-primary-600':'#E11D48','--color-primary-700':'#BE123C','--color-primary-800':'#9F1239','--color-primary-900':'#881337','--color-primary-950':'#4C0519' }},
  amber:   { label: '琥珀',   color: '#FBBF24', colors: { '--color-primary-50':'#FFFBEB','--color-primary-100':'#FEF3C7','--color-primary-200':'#FDE68A','--color-primary-300':'#FCD34D','--color-primary-400':'#FBBF24','--color-primary-500':'#F59E0B','--color-primary-600':'#D97706','--color-primary-700':'#B45309','--color-primary-800':'#92400E','--color-primary-900':'#78350F','--color-primary-950':'#451A03' }},
  cyan:    { label: '青碧',   color: '#22D3EE', colors: { '--color-primary-50':'#ECFEFF','--color-primary-100':'#CFFAFE','--color-primary-200':'#A5F3FC','--color-primary-300':'#67E8F9','--color-primary-400':'#22D3EE','--color-primary-500':'#06B6D4','--color-primary-600':'#0891B2','--color-primary-700':'#0E7490','--color-primary-800':'#155E75','--color-primary-900':'#164E63','--color-primary-950':'#083344' }},
}

const STORAGE_KEY = 'dux-primary-color'
const active = ref('blue')
const open = ref(false)

function applyTheme(key) {
  const t = THEMES[key]
  if (!t) return
  const root = document.documentElement
  Object.entries(t.colors).forEach(([prop, val]) => root.style.setProperty(prop, val))
}

function switchTo(key) {
  active.value = key
  applyTheme(key)
  localStorage.setItem(STORAGE_KEY, key)
  open.value = false
}

onMounted(() => {
  const saved = localStorage.getItem(STORAGE_KEY)
  if (saved && THEMES[saved]) { active.value = saved; applyTheme(saved) }
})
</script>

<template>
  <div class="cp-root" :class="{ open }">
    <button class="cp-btn" aria-label="切换主题色" @click="open = !open">
      <span class="cp-dot" :style="{ background: THEMES[active].color }" />
      <span class="cp-btn-label">主题色</span>
    </button>
    <Transition name="cp-pop">
      <div v-show="open" class="cp-panel">
        <button
          v-for="(t, key) in THEMES" :key="key"
          class="cp-opt" :class="{ active: active === key }"
          :title="t.label" @click="switchTo(key)"
        >
          <span class="cp-swatch" :style="{ background: t.color }" />
          <span class="cp-lbl">{{ t.label }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.cp-root { position: fixed; left: 16px; bottom: 32px; z-index: 30; }
.cp-btn {
  display: flex; align-items: center; justify-content: center; gap: 0;
  width: 36px; height: 36px; padding: 0;
  border-radius: 50%; cursor: pointer;
  background: var(--fluent-surface, rgba(255,255,255,.7));
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--fluent-border, rgba(255,255,255,.5));
  box-shadow: var(--fluent-shadow, 0 8px 24px rgba(0,0,0,.12));
  transition: width .25s ease, padding .25s ease, border-radius .25s ease, gap .25s ease, transform .25s ease, box-shadow .25s ease;
  white-space: nowrap;
}
.cp-btn:hover, .cp-root.open .cp-btn {
  width: 85px; padding: 0 12px 0 8px; border-radius: 20px; gap: 8px;
}
.cp-btn:hover { transform: scale(1.05); box-shadow: var(--fluent-shadow-hover); }
.cp-dot { width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0; }
.cp-btn-label { font-size: 12px; font-weight: 600; color: var(--color-gray-600); max-width: 0; overflow: hidden; white-space: nowrap; transition: max-width .25s ease; }
.cp-btn:hover .cp-btn-label, .cp-root.open .cp-btn-label { max-width: 60px; }
.dark .cp-btn-label { color: var(--color-gray-300); }

/* 面板：向右弹出 */
.cp-panel {
  position: absolute; left: 48px; bottom: 0;
  display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px;
  padding: 8px;
  background: var(--fluent-surface, rgba(255,255,255,.7));
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1px solid var(--fluent-border, rgba(255,255,255,.5));
  border-radius: 14px;
  box-shadow: var(--fluent-shadow, 0 8px 24px rgba(0,0,0,.12));
}
.cp-opt {
  display: flex; flex-direction: column; align-items: center; gap: 3px;
  padding: 5px 8px; border-radius: 8px; cursor: pointer;
  background: transparent; border: none; color: inherit;
  font-size: 10px; white-space: nowrap; min-width: 48px;
  transition: background .2s ease;
}
.cp-opt:hover { background: rgba(128,128,128,.1); }
.cp-opt.active { background: var(--color-primary-100); }
.dark .cp-opt.active { background: var(--color-primary-900); }
.cp-swatch {
  width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0;
  border: 2px solid transparent; transition: border-color .2s ease;
}
.cp-opt.active .cp-swatch { border-color: var(--fluent-border); box-shadow: 0 0 0 2px var(--fluent-surface); }
.cp-lbl { color: var(--color-gray-600); line-height: 1.2; }
.dark .cp-lbl { color: var(--color-gray-300); }

.cp-pop-enter-active, .cp-pop-leave-active { transition: opacity .2s ease, transform .2s cubic-bezier(.22,1,.36,1); }
.cp-pop-enter-from, .cp-pop-leave-to { opacity: 0; transform: translateX(-8px) scale(.95); }
</style>
