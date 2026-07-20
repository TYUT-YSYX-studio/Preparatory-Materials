import { createApp, h } from 'vue'
import Theme from '@duxweb/vitepress-theme'
import '@duxweb/vitepress-theme/dist/index.css'
import './custom.css'
import './style.css'

import BackToTop from './components/BackToTop.vue'
import ScrollReveal from './components/ScrollReveal.vue'
import ThemeColorPicker from './components/ThemeColorPicker.vue'
import FocusToggle from './components/FocusToggle.vue'

import Card from './components/Card.vue'
import CardGroup from './components/CardGroup.vue'
import Timeline from './components/Timeline.vue'
import TimelineItem from './components/TimelineItem.vue'

import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'

function mount(id, component) {
  const el = document.createElement('div')
  el.id = id
  document.body.appendChild(el)
  createApp({ render: () => h(component) }).mount(el)
}

export default {
  extends: Theme,

  enhanceApp({ app }) {
    app.component('Card', Card)
    app.component('CardGroup', CardGroup)
    app.component('Timeline', Timeline)
    app.component('TimelineItem', TimelineItem)
    enhanceAppWithTabs(app)
  },

  setup() {
    if (typeof document === 'undefined') return

    document.addEventListener('click', (e) => {
      const toggle = e.target.closest('.theme-toggle')
      if (!toggle) return
      const root = document.documentElement
      root.style.setProperty('--vt-x', e.clientX + 'px')
      root.style.setProperty('--vt-y', e.clientY + 'px')
    })

    mount('bt-container', BackToTop)
    mount('sr-container', ScrollReveal)
    mount('cp-container', ThemeColorPicker)
    mount('ft-container', FocusToggle)

    // 二级分组默认折叠
    initNestedCollapse()
  }
}

/* ── 侧边栏二级分组折叠 ── */
function initNestedCollapse() {
  const KEY = 'sidebar-nested'
  const openSet = new Set(JSON.parse(localStorage.getItem(KEY) || '[]'))

  function apply() {
    document.querySelectorAll('.sidebar-group-items .ml-2').forEach((el) => {
      const h4 = el.querySelector('h4')
      if (!h4) return
      const id = h4.textContent.trim()
      el.classList.toggle('sg-nested-open', openSet.has(id))
    })
  }

  apply()

  document.addEventListener('click', (e) => {
    const h4 = e.target.closest('.sidebar-group-items .ml-2 h4')
    if (!h4) return
    const group = h4.closest('.ml-2')
    const id = h4.textContent.trim()
    if (openSet.has(id)) { openSet.delete(id) }
    else { openSet.add(id) }
    group.classList.toggle('sg-nested-open', openSet.has(id))
    localStorage.setItem(KEY, JSON.stringify([...openSet]))
  })

  new MutationObserver(() => {
    if (document.querySelector('.sidebar-group-items .ml-2')) apply()
  }).observe(document.body, { childList: true, subtree: true })
}
