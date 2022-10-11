---
layout: "../../layouts/BlogPost.astro"
title: "How to wait for all javascript promises in forEach loop to be done before you execute your code"
description: "Let’s say that you’ve got an array with some url elements that you want to fetch some data from, and want to execute some code after all those promises are done."
pubDate: "Sept 2 2022"
heroImage: ""
tags: ['JavaScript']
--- 

Let’s say that you’ve got an array with some url elements that you want to fetch some data from, and want to execute some code after all those promises are done

```javascript
const promises = [];
const array = [
  'http://localhost:3000/categories',
  'http://localhost:3000/types'
]

array.forEach(element => {
    promises.push(
        fetch(element)
        .then(response => {
          console.log('Fetch data from element')
        })
        .catch(error => {
          console.log(error)
        })
    )
})

Promise.all(promises).then(() => 
    console.log('Execute final code after all proimises are done')
);
```

first we declare an array variable where we will push our promises.

we loop through array of elements.

for every element, we push into promises array, the promise resulted from fetch(element).

we use Promise.all(promises) to wait for all promises from fetch to be done.

Promise.all(promises) returns also a final promise where we put out final code that we want to execute.