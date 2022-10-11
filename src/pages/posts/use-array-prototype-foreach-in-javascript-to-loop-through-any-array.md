---
layout: "../../layouts/BlogPost.astro"
title: "Use array prototype forEach() in JavaScript to loop through any array"
description: "an easy alternative of a for loop in JavaScript is to use forEach() on your array every time you have to do some logic on some elements"
pubDate: "Aug 11 2022"
heroImage: ""
tags: ['JavaScript']
--- 

an easy alternative of a for loop in JavaScript is to use forEach() on your array every time you have to do some logic on some elements

```javascript
const fruits = ["apple", "mango", "peach", "cherry"];
fruits.forEach((fruit) => {
    //your logic here
    console.log('Fruit ' + fruit);
});
```

results printed in console:

```bash
Fruit apple
Fruit mango
Fruit peach
Fruit cherry
```