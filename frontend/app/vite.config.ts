// frontend/app/vite.config.ts
import { defineConfig } from "vite";

export default defineConfig({
  base: "/client-side-video-editor/",
  assetsInclude: ["**/*.wasm"],
  optimizeDeps: {
    // IMPORTANT: let Vite skip pre-bundling @ffmpeg/ffmpeg
    exclude: ["@ffmpeg/ffmpeg"],
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    commonjsOptions: { transformMixedEsModules: true },
  },
});
