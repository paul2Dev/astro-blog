---
layout: "../../layouts/BlogPost.astro"
title: "How to remove first element of array in JavaScript"
description: "pop() will remove the last element of an array."
pubDate: "Aug 17 2022"
heroImage: ""
tags: ['JavaScript']
--- 

```javascript
const array = [1, 2, 3, 4, 5];

array.pop();

console.log(array);
```

this will print in console the array without last element

```bash
// [object Array] (4)
[1,2,3,4]
```