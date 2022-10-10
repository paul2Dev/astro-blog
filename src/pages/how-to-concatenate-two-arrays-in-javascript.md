---
layout: "../layouts/BlogPost.astro"
title: "How to concatenate two arrays in JavaScript"
description: "use concat() in JavaScript to easily concatenate two arrays."
pubDate: "Aug 11 2021"
heroImage: ""
categories: ['JavaScript']
--- 

use **concat()** in JavaScript to easily concatenate two arrays

```javascript
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

const array3 = array1.concat(array2);

console.log(array3);
```

this will print in console:

```javascript
[ 1, 2, 3, 4, 5, 6 ]
```