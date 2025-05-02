import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()], // ✅ Gardez uniquement le plugin React (ou Vue si applicable)
});