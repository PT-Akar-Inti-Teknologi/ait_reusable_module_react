import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from 'tailwindcss';
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 2403,
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
})
