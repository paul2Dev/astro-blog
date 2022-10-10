---
layout: "../../layouts/BlogPost.astro"
title: "How to setup tailwind in vue3 with vite"
description: "the easy way yo setup tailwind in VueJs project."
pubDate: "Sept 30 2022"
heroImage: ""
categories: ['JavaScript']
--- 

## Install vue with vite

```bash
npm init vite
//enter project_name and select vue
cd project_name
npm install
```

## Install tailwind

```bash
npm install -d tailwindcss postcss@latest autoprefixer@latest
```

## Create tailwind config files

```bash
npx tailwindcss init -p
```

open **tailwind.config.css** and add **index.html** and any related vue files from **/src** directory, to content property

```javascript
// tailwind.config.css
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

open **/src/style.css** and add tailwind 

```css
// src/style.css

@tailwind base;
@tailwind components;
@tailwind utilities;
```

open **main.js** and import **style.css**

```javascript
// main.js

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
```

and that is all, you can now use tailwind inside your project, enjoy :D.
