import { cp } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = resolve(__dirname, '..')
const distDir = resolve(rootDir, '.vitepress', 'dist')

const copyTasks = [
  { src: 'v2409/resources', dest: 'v2409/resources' },
  { src: 'v2509/resourses', dest: 'v2509/resourses' },
  { src: 'v2509/intern_trainees/resources', dest: 'v2509/intern_trainees/resources' },
  { src: 'v2509/pre_trainees/resources', dest: 'v2509/pre_trainees/resources' },
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
