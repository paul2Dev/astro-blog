---
layout: "../layouts/BlogPost.astro"
title: "How to easily clone an array in Javascript"
description: "slice() will clone an array."
pubDate: "Aug 23 2022"
heroImage: ""
categories: 
    - JavaScript
--- 

```javascript
const array = [1, 2, 3, 4, 5]
const clone = [...array]
console.log(clone)

//[1, 2, 3, 4, 5]
```

or you can use slice() function

```bash
const array = [1, 2, 3, 4, 5]
const clone = array.slice()
console.log(clone)

//[1, 2, 3, 4, 5]
```