import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  base: '/front-end-entrance-exam-1/',
  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3000,
      overlay: false
    },
    watch: {
      usePolling: true,
      interval: 500
    },
    strictPort: false,
    open: true
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    sourcemap: true,
    assetsDir: 'assets' // Все ресурсы будут в папке assets
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimizeDeps: {
    include: ['@vue/runtime-dom']
  }
})