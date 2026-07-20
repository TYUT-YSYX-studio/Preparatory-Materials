<script setup>
import { onMounted, onUnmounted } from 'vue'

const REVEAL_INIT = 'reveal-init'
const REVEALED = 'revealed'

let observer = null
let domObserver = null

function observe() {
  requestAnimationFrame(() => {
    const targets = document.querySelectorAll(
      '.prose-content h2, .prose-content table, .prose-content .custom-block'
    )
    targets.forEach((el) => {
      if (!el.classList.contains(REVEALED)) {
        el.classList.add(REVEAL_INIT)
      }
    })
    if (observer) {
      targets.forEach((el) => observer.observe(el))
    }
  })
}

onMounted(() => {
  if (typeof IntersectionObserver === 'undefined') return

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(REVEALED)
          entry.target.classList.remove(REVEAL_INIT)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  observe()

  // SPA 导航后 .prose-content 会重建，用 MutationObserver 捕捉
  domObserver = new MutationObserver(() => {
    // 有新的 .prose-content 内容加入时重新扫描
    if (document.querySelector('.prose-content')) {
      observe()
    }
  })
  domObserver.observe(document.body, {
    childList: true,
    subtree: true
  })
})

onUnmounted(() => {
  if (observer) { observer.disconnect(); observer = null }
  if (domObserver) { domObserver.disconnect(); domObserver = null }
})
</script>

<template>
  <div style="display:none" aria-hidden="true" data-scroll-reveal />
</template>
