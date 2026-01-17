import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
<<<<<<< HEAD
=======
import { componentTagger } from "lovable-tagger";
>>>>>>> 60d4dfb783a5b22e37f11b9b9f4195113a978a96

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
<<<<<<< HEAD
  plugins: [react()],
=======
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
>>>>>>> 60d4dfb783a5b22e37f11b9b9f4195113a978a96
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
