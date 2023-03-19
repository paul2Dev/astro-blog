---
layout: "../../layouts/BlogPost.astro"
title: "Route Model Binding in laravel 9"
description: "In Laravel 9, the Route Model Binding feature is the same as in Laravel 8."
pubDate: "Mar 19 2023"
heroImage: ""
tags: ['Laravel']
--- 

Starting from Laravel 8, Route Model Binding is more powerful than ever before. In Laravel 9, the Route Model Binding feature is the same as in Laravel 8.

To use Route Model Binding in Laravel 9, you need to define a route with a parameter that matches the name of a model's route key. For example, if you have a `Post` model with a route key of `slug`, you can define a route like this:

```php
Route::get('/posts/{post:slug}', function (Post $post) {
    return view('posts.show', ['post' => $post]);
});
```

In the example above, the `{post:slug}` segment of the route specifies that the `slug` attribute of the `Post` model should be used to look up the corresponding record from the database. The `$post` variable in the closure will be automatically populated with the `Post` instance retrieved from the database.

You can also specify custom route keys for your models by defining a `getRouteKeyName()` method on the model:

```php
class Post extends Model
{
    public function getRouteKeyName()
    {
        return 'custom_slug';
    }
}
```

With the `getRouteKeyName()` method, you can specify a custom route key for your model that will be used in place of the default `id` key.

You can find more information about Route Model Binding in the Laravel documentation: <a href="https://laravel.com/docs/9.x/routing#route-model-binding" target="_blank">here</a>

