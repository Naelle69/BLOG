import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// ✅ Configuration principale
export default defineConfig({
  plugins: [
    tailwindcss(), // Plugin Tailwind CSS
    react(),       // Support React (JSX, hooks)
    svgr({         // Import des SVG comme composants React
      svgrOptions: {
        icon: true, // Redimensionne automatiquement les SVG
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Optionnel : alias @ pour src/
    },
  },
});