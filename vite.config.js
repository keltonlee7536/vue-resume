import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // publicDir: '/vue-resume',//at some point there is an extra 'vue-resume'.
  base: '/vue-resume',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {// i think './vue-resume' should be empty.
      '@': fileURLToPath(new URL('./vue-resume', import.meta.url))//switched 11/2 from './src' to './vue-resume'
    }
  }
})
