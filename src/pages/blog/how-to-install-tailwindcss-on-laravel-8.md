---
layout: "../../layouts/BlogPost.astro"
title: "How to install TailwindCSS on Laravel 8"
description: "let’s install TailwindCSS so you can use it in your Laravel project."
pubDate: "Aug 09 2021"
heroImage: ""
categories: ['TailwindCss', 'Laravel']
--- 

let’s install TailwindCSS so you can use it in your Laravel project.

## Install Laravel via composer

```bash
composer create-project laravel/laravel project-name

cd project-name

npm install

php artisan serve
```

you’ve got laravel installed, now let’s install and configure TailwindCSS.

## Install TailwindCSS

```bash
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p
```

in your **tailwind.config.js** add your paths to the template files.

```javascript
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

add tailwind directives to your **/resources/css/app.css** file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Include app.css in your layout blade and test tailwindcss in your **/resources/views/welcome.blade.php** file.

```html
<!-- inside head include your css file -->
        
<link rel="stylesheet" href="/css/app.css">

<!-- inside body test tailwind classes -->

<h1 class="text-sm font-bold underline bg-orange-200">
    tailwind test
</h1>
```

great job you did it 😀 , now you are ready to use tailwindcss in your laravel app.

enjoy 🙂
