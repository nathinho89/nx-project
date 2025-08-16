import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig(({ command }) => {
  const isServe = command === "serve"
  return {
    plugins: [vue()],
    root: isServe ? path.resolve(__dirname, "playground") : undefined,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src")
      }
    },
    server: { port: 5174, strictPort: true, fs: { allow: [__dirname] } },
    preview: { port: 4174, strictPort: true },
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "MyAppUI",
        formats: ["es", "cjs"],
        fileName: fmt => (fmt === "es" ? "index.js" : "index.cjs")
      },
      rollupOptions: {
        external: ["vue"],
        output: { globals: { vue: "Vue" } }
      }
    }
  }
})
