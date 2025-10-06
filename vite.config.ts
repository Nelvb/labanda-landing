import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    postcss: './postcss.config.js',
  },
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-i18n'],
          swiper: ['swiper']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['swiper/css', 'swiper/css/navigation', 'swiper/css/pagination', 'swiper/css/effect-fade'],
  },
})