---
layout: "../../layouts/BlogPost.astro"
title: "How to log queries in laravel"
description: "To log Laravel 9 queries using the DB::listen method and logger() helper"
pubDate: "Mar 20 2023"
heroImage: ""
tags: ['Laravel']
--- 

To log Laravel 9 queries using the DB::listen method and logger() helper, you can follow these steps:

1. Open your Laravel application's **AppServiceProvider.php** file located at **app/Providers/AppServiceProvider.php**.

2. In the boot method, add the following code:

```php
\DB::listen(function ($query) {
    logger()->info(
        $query->sql,
        ['bindings' => $query->bindings, 'time' => $query->time]
    );
});
```

This code listens for any database query that is executed and logs it to the Laravel log files.

1. Save the file and run your Laravel application.

2. Execute some queries on your application.

3. Check the Laravel log files located at **storage/logs/laravel.log**.

4. You should see log entries for each query executed by your application, including the SQL query, bindings, and execution time.

**Note:** Make sure that your Laravel application is in debug mode, otherwise, the log entries will not be written to the log file. To enable debug mode, set the **APP_DEBUG** environment variable to **true** in your **.env** file.