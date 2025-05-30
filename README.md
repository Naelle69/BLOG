# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# COLORS
# EAC6C6
# A8C4A2
# D8CDEA
# E6B87A

# https://javascript.info/import-export

# https://react.dev/learn

# https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export

# https://react.dev/learn/installation

# https://www.typescriptlang.org/tsconfig/#jsx

# https://www.typescriptlang.org/docs/handbook/

# useState Le useStatehook réutilisera la valeur transmise comme état initial pour déterminer le type de valeur. Par exemple :

# useReducer Le useReducerHook est un Hook plus complexe qui utilise une fonction de réduction et un état initial. Les types de la fonction de réduction sont déduits de l'état initial. 

# Les useMemohooks créent/réaccèdent à une valeur mémorisée à partir d'un appel de fonction, et ne réexécutent la fonction que lorsque les dépendances passées en second paramètre sont modifiées. Le résultat de l'appel du hook est déduit de la valeur de retour de la fonction en premier paramètre. Vous pouvez être plus explicite en fournissant un argument de type au hook.

# Les useCallback fournissent une référence stable à une fonction tant que les dépendances passées au second paramètre sont identiques. Comme pour useMemo, le type de la fonction est déduit de la valeur de retour de la fonction dans le premier paramètre. Vous pouvez être plus explicite en fournissant un argument de type au hook.

# Le useContextHook est une technique permettant de transmettre des données à l'arborescence des composants sans avoir à passer des propriétés entre les composants. Il est utilisé en créant un composant fournisseur et souvent en créant un Hook pour consommer la valeur d'un composant enfant.-

# CUSTOM PADDING p-[5px] p-(--my-padding)

# Vérifier l'état
git status

# Ajouter les modifications
git add .

# Commiter les modifications
git commit -m "Ajout du logo responsive avec Tailwind CSS"

# Récupérer les dernières mises à jour (si nécessaire)
git pull origin feature/responsive-logo

# Pousser les modifications
git push origin feature/responsive-logo


@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
  font-family: 'Birthstone';
  src: url('./assets/fonts/Birthstone-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

:root {
  font-family: Birthstone;
  line-height: 1.5;
  font-weight: 400;
}


body {
  font-family: Arial, Helvetica, sans-serif, serif;
  min-width: 320px;
  min-height: 100vh;
  color: #4B715F;
}
