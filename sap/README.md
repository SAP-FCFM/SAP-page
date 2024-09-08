# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
 Before you start have installed:
 - [NVM](https://github.com/nvm-sh/nvm) or failing that [node v22.4.0](https://nodejs.org/en/blog/release/v22.4.0)
 ```bash
       nvm install 22.4.0 node
       nvm use 22.4.0
 ```
 - [Visual Studio Community 2022](https://apps.microsoft.com/store/detail/XPDCFJDKLZJLP8?ocid=pdpshare) or choose a code editor of your choice we recommend [Visual Code](https://apps.microsoft.com/store/detail/XP9KHM4BK9FZ7Q?ocid=pdpshare)
  If you're using Visual Studio Community
  Be sure to install the node.js package 
 
 How to get started with other code editors:
 First on your terminal make sure you are in the SAP folder
 ```bash
       cd ./sap
       npm install
       npm run dev
 ```
Currently, two official plugins are available:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
