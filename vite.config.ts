import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  // GitHub Pages needs assets served from the repo sub-path
  base: "/cv/",
  server: {
    host: "::",
    port: 8080,
    watch: {
      usePolling: true, // Helps with WSL2 file watching
    },
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: "docs",
  },
  optimizeDeps: {
    esbuildOptions: {
      // Helps with WSL2 compatibility
      target: "es2020",
    },
  },
}));
