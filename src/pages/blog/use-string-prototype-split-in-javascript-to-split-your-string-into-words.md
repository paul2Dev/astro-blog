---
layout: "../../layouts/BlogPost.astro"
title: "Use string prototype split() in JavaScript to split your string into words"
description: "an easy way to split your string into words is to use split() on your string"
pubDate: "Aug 15 2022"
heroImage: ""
categories: ['JavaScript']
--- 

an easy way to split your string into words is to use split() on your string

```javascript
const yourString = "This is a test string to split";
const words = yourString.split(" ");
console.log(words);
```

results printed in console

```bash
["This", "is", "a", "test", "string", "to", "split"]
```