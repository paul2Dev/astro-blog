---
layout: "../../layouts/BlogPost.astro"
title: "How to remove duplicates from array in JavaScript"
description: "using Set() you can eliminate duplicates from and array."
pubDate: "Aug 17 2022"
heroImage: ""
categories: ['JavaScript']
--- 

```javascript
const array = [1, 2, 3, 4, 4, 2, 3];

const unique_array = [...new Set(array)]

console.log(unique_array)
```

this will print in console the new array without duplicates

```bash
// [object Array] (4)
[1,2,3,4]
```