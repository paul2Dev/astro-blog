---
layout: "../layouts/BlogPost.astro"
title: "How to install VueJS and TailwindCSS with npm using vue cli"
description: "the easy way to setup your VueJS project with TailwindCSS. the easy way to setup your VueJS project with TailwindCSS. the easy way to setup your VueJS project with TailwindCSS."
pubDate: "Aug 08 2021"
heroImage: ""
categories: 
    - Tailwindcss
    - VueJS
---

here is an easy way to setup your VueJS project with TailwindCSS.

## Step 1 – install VueJS

first you need to install vue cli using npm, if you don’t have it already.

```bash
npm install -g @vue/cli
```

after installation has finished you can check your version with this command:

```bash
vue --version
```

now let’s create your vue project:

```bash
vue create project-name
```

the terminal will display some options, in this exemple i’ve selected Vue 2

```bash
? Please pick a preset: (Use arrow keys)
  Default ([Vue 3] babel, eslint)
> Default ([Vue 2] babel, eslint)
  Manually select features
```

after installation has finished go to your project folder:

```bash
cd project-name
```

and then run server with npm command:

```bash
npm run serve
```

this will generate your local server on port 8080, you should see the link in your terminal. click on the link to view you VueJS app in browser.

## Step 2 -Install TailwindCSS

now let’s install TailwindCSS to use it in your VueJS app. open your terminal in your VueJS app folder and run this command:

```bash
vue add tailwind
```

the terminal will display some options, in this exemple i’ve selected minimal:

```bash
Successfully installed plugin: vue-cli-plugin-tailwind

? Generate tailwind.config.js 
  none
> minimal
  full
```

and that is it, tailwind is now ready to be used in your project.

## Step 3 – import TailwindCSS in your VueJS app component

the last thing you have to do is to import tailwind in your app component:

open file ./src/App.vue and add this line in your <script>, your file should be look like this:

```javascript
<script>
import HelloWorld from './components/HelloWorld.vue'
import './assets/tailwind.css'; //import tailwind css

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
```

let’s test it out by adding a html tag in our ./scr/App.vue file:

```html
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <div class="bg-blue-500 text-white">
      test example tailwind
    </div>
  </div>
</template>
```

now run server again with npm run serve and you should see something like this:

![This is a placeholder image description](/vue_tailwind_cli.png)

and that’s it, now go have fun creating you VueJS and TailwindCSS app 😀



