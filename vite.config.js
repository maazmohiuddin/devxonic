import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
  },
  build: {
    assetsInlineLimit: 0,
    rollupOptions: {
      output: {
        mimeTypes: {
          js: ["application/javascript"],
        },
      },
    },
  },
});
