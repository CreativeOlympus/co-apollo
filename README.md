# [Co Apollo Design System (WIP)](https://tailwindcss.com/docs/guides/vite)

A design system based on tailwindcss for Vue3.

## How to install

With npm:

```
npm install co-apollo-ds
```
With yarn:

```
yarn add co-apollo-ds
```

Add [tailwindcss](https://tailwindcss.com/docs/guides/vite) dependencies to your dev dependencies:

```javascript
// package.json

...
devDependencies: {
    ...
    "tailwindcss": "npm:@tailwindcss/postcss7-compat",
    "postcss": "^7",
    "autoprefixer": "^9"
    ...
}
...
```
Install dependencies with your package manager:
```
npm install
```
```
yarn install
```
Run tailwindcss init command:

```
npx tailwindcss init -p
```
Write tailwindcss config:

```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Create a main css file to add tailwindcss directives:

```css
/* ./src/main.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import in your main file:
```typescript
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import CoApollo
import CoApollo from "co-apollo-ds";
import "./main.css";

createApp(App)
    .use(store)
    .use(router)
    .use(CoApollo) // add CoApollo
    .mount("#app");

```

I hope you enjoyed!
