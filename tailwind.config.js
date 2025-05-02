// tailwind.config.js
import { defineConfig } from 'tailwindcss';
import twElements from 'tw-elements/js/plugin.cjs';

export default defineConfig({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
   // "./node_modules/tw-elements/dist/js/**/*.js", // ✅ Pour garder les classes de Tailwind Elements
    "./node_modules/tw-elements/js/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [twElements], // ✅ Plugin Tailwind Elements
});
