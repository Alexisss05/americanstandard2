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