---
layout: "../../layouts/BlogPost.astro"
title: "Shorthand for if-else statement in Javascript – Conditional (ternary) operator"
description: ""
pubDate: "Aug 23 2022"
heroImage: ""
categories: ['JavaScript']
--- 

```javascript
let number = 10;

//normal if-else statement
if(number == 10) {
  console.log('it\'s a ten')
} else {
  console.log('it\'s not a ten')
}

//shorthand if-else statement
number == 10 ? console.log('it\'s a ten') 
             : console.log('it\'s not a ten')

//console
// it's a ten
// it's a ten
```
