// Postinstall: patch duxweb DocFooter to use withBase() for prev/next links
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

const target = resolve(
  import.meta.dirname,
  '..',
  'node_modules/@duxweb/vitepress-theme/dist/esm/components/docs/DocFooter.vue.js'
)

let content = readFileSync(target, 'utf-8')

// Only apply if not already patched
if (!content.includes('withBase as wb')) {
  // 1. Add withBase import
  content = content.replace(
    'import { useData as D } from "vitepress";',
    'import { useData as D, withBase as wb } from "vitepress";'
  )
  // 2. Patch prev link
  content = content.replace(
    'href: n.value.prev.link,',
    'href: wb(n.value.prev.link),'
  )
  // 3. Patch next link
  content = content.replace(
    'href: n.value.next.link,',
    'href: wb(n.value.next.link),'
  )

  writeFileSync(target, content)
  console.log('[postinstall] Patched duxweb DocFooter withBase fix')
} else {
  console.log('[postinstall] duxweb DocFooter already patched, skipping')
}
