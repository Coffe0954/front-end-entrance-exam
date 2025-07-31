import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'src'),
  server: {
    // Настройки для более стабильного HMR
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 3000,
      overlay: false // Убирает overlay при ошибках
    },
    watch: {
      usePolling: true, // Решает проблемы с WSL
      interval: 500 // Проверка изменений каждые 500мс
    },
    strictPort: false, // Запрещает автоматическую смену порта
    open: true // Автоматически открывает браузер
  },
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
    sourcemap: true // Для отладки
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  optimizeDeps: {
    include: ['@vue/runtime-dom'] // Ускоряет запуск в dev-режиме
  }
})