import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'oxc', // Mantém o padrão rápido
    chunkSizeWarningLimit: 5000, // Força o limite para 5MB para engolir as tuas imagens
    
    // 🎯 CONFIGURAÇÃO ANTI-QUEBRA PARA A VERCEL:
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignora os avisos de blocos grandes que fazem o Rolldown/Vite 8 crashar na Vercel
        if (warning.code === 'CYCLIC_CROSS_CHUNK_REFS' || warning.code === 'LARGE_BUNDLE') return;
        
        // Deixa passar outros avisos normais sem quebrar o processo
        warn(warning);
      }
    }
  }
})