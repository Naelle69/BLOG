// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()], // ✅ Plus besoin de tailwindcss() ici
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ Alias pour simplifier les imports
    },
  },
});