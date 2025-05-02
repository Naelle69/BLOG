// postcss.config.js
export default {
  plugins: {
    '@tailwindcss/postcss': {}, // ✅ Plugin officiel PostCSS pour Tailwind v4
    autoprefixer: {},           // ✅ Optionnel (si vous avez besoin de prefixes)
  },
};
