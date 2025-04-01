import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: './',              // ensure relative paths, e.g. in index.html
build: {
    outDir: 'dist',      // gets deployed to github pages
    assetsDir: 'assets', // static assets (images, js, css, etc.)
   },
});
