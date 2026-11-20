import { defineConfig } from "vite";
export default defineConfig({
  base: "./",
  build: {
    copyPublicDir: false,
    license: { fileName: "THIRD-PARTY-LICENSES.md" },
  },
  server: { proxy: { "/api": "http://127.0.0.1:8041" } },
});
