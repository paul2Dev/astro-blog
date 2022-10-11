---
layout: "../../layouts/BlogPost.astro"
title: "How to install VueJS on Laravel 8"
description: "let’s install VueJS so you can use it in your Laravel project. we will install VueJS using laravel/ui package, it is easy this way, and laravel/ui will do all the configuration behind the scene."
pubDate: "Aug 10 2021"
heroImage: ""
tags: ['VueJS', 'Laravel']
--- 

let’s install VueJS so you can use it in your Laravel project. we will install VueJS using laravel/ui package, it is easy this way, and laravel/ui will do all the configuration behind the scene.

## Install Laravel via composer

```bash
composer create-project laravel/laravel project-name

cd project-name

npm install

php artisan serve
```

you’ve got laravel installed, now let’s install and configure VueJS via laravel/ui package.

## Install VueJS via laravel/ui package

```bash
#install laravel/ui via composer
composer require laravel/ui

#run artisan command to scaffold out everything you need for 
#VueJS configuration
php artisan ui vue

#compile the new files added
npm install && npm run dev
```

Include app.js in your layout blade and test VueJS example component

in your **/resources/views/welcome.blade.php** file add **app.js** and **example-component** tag to test that VueJS is working.

```html
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">

        <link rel="stylesheet" href="/css/app.css">

    </head>
    <body>
        <div id="app">
            <example-component></example-component>
        </div>
        <script src="{{ mix('/js/app.js') }}"></script>
    </body>
</html>
```

and that’s it 😀 run **php artisan serve** command in your terminal and check it in your browser.

