---
layout: "../layouts/BlogPost.astro"
title: "How to remove first element of array in JavaScript"
description: "shift() will remove the first element of an array."
pubDate: "Aug 17 2022"
heroImage: ""
categories: ['JavaScript']
--- 

```javascript
const array = [1, 2, 3, 4, 5];

array.shift();

console.log(array);
```

this will print in console the array without first element

```bash
// [object Array] (4)
[2,3,4,5]
```