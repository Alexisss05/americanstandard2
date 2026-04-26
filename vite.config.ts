<<<<<<< HEAD
import path from "path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react" // O "@vitejs/plugin-react-swc" si es el que usas

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Esto le dice a Vite que cuando vea "@", busque en la carpeta "src"
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
=======
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
  },
}));
>>>>>>> 44c82827c888a260eee1a0af1c8d3abc665f8b6e
