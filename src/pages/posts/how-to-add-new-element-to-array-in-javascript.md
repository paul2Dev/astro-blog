---
layout: "../../layouts/BlogPost.astro"
title: "How to add new element to array in JavaScript"
description: "push() will add a new element of an array."
pubDate: "Aug 17 2022"
heroImage: ""
tags: ['JavaScript']
--- 

```javascript
const array = [1, 2, 3, 4, 5];

array.push(10);

console.log(array);
```

this will add new value 10 to array

```bash
// [object Array] (6)
[1,2,3,4,5,10]
```