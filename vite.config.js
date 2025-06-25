import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  //dev server to port 8080
  server: {
    port: 8080,
    strictPort: true,
  },
});
