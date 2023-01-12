---
layout: "../../layouts/BlogPost.astro"
title: "javascript reduce() function explained"
description: "how to use reduce() function in javascript"
pubDate: "Jan 12 2023"
heroImage: ""
tags: ['JavaScript']
--- 

## what does it do?

The reduce() function in JavaScript is a method on the Array object that allows you to iterate over an array, and cumulatively reduce the array to a single value. 

It takes two arguments: a callback function and an initial value. 

The callback function is called on each element of the array, and takes two arguments: an accumulator, which is the cumulative value returned by the previous call to the callback, and the current value of the array. 

The initial value is used as the starting value for the accumulator.


## example 1 

Here's an example of using reduce() to add up all the numbers in an array:

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(sum); // 15
```

The reduce() function can also be used with the arrow function syntax:

```javascript
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
```

## example 2 

It can also be used to manipulate an array of objects by returning an object.

```javascript
let data = [
  { name: "Paul", age: 25 },
  { name: "Dan", age: 30 },
  { name: "Adrian", age: 35 }
];
let avgAge = data.reduce((acc, curr) => {
  acc.count++;
  acc.total += curr.age;
  return acc;
}, { count: 0, total: 0 });
console.log(avgAge.total / avgAge.count); // 30
```

It can be used in many ways, so it's a very powerful function.