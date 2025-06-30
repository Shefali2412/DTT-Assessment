import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';   

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  // path aliases
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // allows "@/..." imports
    },
  },

  // dev server
  server: {
    port: 8080,
    strictPort: true,
  },
});
