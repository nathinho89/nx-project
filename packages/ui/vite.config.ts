import { defineConfig } from "vite";
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      name: "MyAppUi",
      fileName: "index",
      formats: ["es"],
    },
    sourcemap: true,
  },
});
