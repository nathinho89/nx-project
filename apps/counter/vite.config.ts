import { fileURLToPath, URL } from 'node:url'
import vueDevTools from 'vite-plugin-vue-devtools'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tsconfigPaths from 'vite-tsconfig-paths'
import fs from 'node:fs'
import path from 'node:path'

function workspacePackageNames(rootDir = path.resolve(__dirname, '../..')) {
  const pkgsDir = path.join(rootDir, 'packages')
  const names: string[] = []
  for (const dir of fs.readdirSync(pkgsDir)) {
    const pkgJsonPath = path.join(pkgsDir, dir, 'package.json')
    if (!fs.existsSync(pkgJsonPath)) continue
    const pkg = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf8'))
    if (pkg.name) names.push(pkg.name)
  }
  return names
}

export default defineConfig({
  server: { port: 5173, strictPort: true },
  preview: { port: 4173, strictPort: true },
  plugins: [vue(), tsconfigPaths({ projects: ['../../tsconfig.base.json'] }), vueDevTools()],
  optimizeDeps: { exclude: workspacePackageNames() },
  resolve: {
    conditions: ['development', 'module', 'import'],
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },
  build: {
    outDir: path.resolve(__dirname, '../../dist/apps/counter'),
    emptyOutDir: true,
  },
})
