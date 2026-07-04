import { cp } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const distDir = resolve(rootDir, '.vitepress', 'dist')

const copyTasks = [
  { src: 'v2409/first_batch/PDF', dest: 'v2409/first_batch/PDF' },
]

for (const { src, dest } of copyTasks) {
  const srcPath = resolve(rootDir, src)
  const destPath = resolve(distDir, dest)
  if (existsSync(srcPath)) {
    await cp(srcPath, destPath, { recursive: true })
    console.log(`  Copied: ${src} → dist/${dest}`)
  } else {
    console.log(`  Skipped (not found): ${src}`)
  }
}

console.log('Post-build copy complete.')
