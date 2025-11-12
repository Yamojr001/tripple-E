import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import inspect from "vite-plugin-inspect";

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), inspect()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});