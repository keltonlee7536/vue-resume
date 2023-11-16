import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // publicDir: 'assets',
  base: '/vue-resume',
  plugins: [
    vue(),
  ],
  // build: {
  //   assetsDir: 'assets',
  //   outdir: 'dist'
  // },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./vue-resume', import.meta.url))
    }
  }
})
