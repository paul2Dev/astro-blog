---
layout: "../../layouts/BlogPost.astro"
title: "5 ways to select DOM elements in javascript"
description: "how to select elements from DOM in javascript"
pubDate: "Nov 7 2022"
heroImage: ""
tags: ['JavaScript', 'DOM']
--- 

there are multiple ways to select DOM elements in javascript but here are 5 ways i consider most used:

first let's take a html example where we will apply the selectors:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>5 ways to select DOM elements</title>
</head>
<body>
    <div class="container">
        <h1 id="heading">Title section</h1>
        <ul>
            <li class="list-item"> Item 1</li>
            <li class="list-item"> Item 2</li>
            <li class="list-item"> Item 3</li>
        </ul>
    </div>
</body>
</html>
```

## getElementById()

as the function says it will select the element with the specific id:

```javascript
const title = document.getElementById('heading')
```

it will select the h1 element with the id of heading:

```html
<h1 id="heading">Title section</h1>
```

## getElementByClassName()

as the function says it will select the element with the specific class name:

```javascript
const listItem = document.getElementByClassName('list-item')
```

it will return an array with all li elements from the DOM, with the class name of list-item:

```html
<li class="list-item"> Item 1</li>
<li class="list-item"> Item 2</li>
<li class="list-item"> Item 3</li>
```

## getElementsByTagName()

as the function says it will select the element with the specific tag name:

```javascript
const listItems = document.getElementsByTagName('li')
```

it will return an array with all li elements from the DOM, with the class name of list-item:

```html
<li class="list-item"> Item 1</li>
<li class="list-item"> Item 2</li>
<li class="list-item"> Item 3</li>
```

## querySelector()

this function is used to select one elements or the first element from the DOM (in case there are more), that matches the selector it's given, and will accept all css selectors:

```javascript
const container = document.querySelector('.container')
```

this will grab the first element from the DOM with with class of container:

```html
<div class="container">
    <h1 id="heading">Title section</h1>
    <ul>
        <li class="list-item"> Item 1</li>
        <li class="list-item"> Item 2</li>
        <li class="list-item"> Item 3</li>
    </ul>
</div>
```

## querySelectorAll()

this function is used to select all elements from the DOM, that matches the selector it's given, and will accept all css selectors:

```javascript
const liItems = document.querySelectorAll('.list-item')
```

this will grab all elements from the DOM with with class of list-item:

```html
<li class="list-item"> Item 1</li>
<li class="list-item"> Item 2</li>
<li class="list-item"> Item 3</li>
```

And there you have it, 5 ways to select DOM elements.

