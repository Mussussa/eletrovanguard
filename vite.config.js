import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'oxc', // 🎯 Voltamos para o padrão ultra-rápido do Vite 8
    chunkSizeWarningLimit: 3000, // 🚀 Aumenta o limite para 3MB para aceitar as tuas imagens
  }
})