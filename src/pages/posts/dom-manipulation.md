---
layout: "../../layouts/BlogPost.astro"
title: "DOM manipulation"
description: "how to change elements from DOM in javascript"
pubDate: "Nov 8 2022"
heroImage: ""
tags: ['JavaScript', 'DOM']
--- 

here are some example of changing DOM elements in javascript.

first we will take the same html example from the [5 ways to select DOM elements in javascript](/posts/5-ways-to-select-dom-elements-in-javascript) blog post:

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

## change css properties

let's start by changing the css properties of the title element:

```javascript
const title = document.querySelector('#heading')

title.style.color = 'red'
title.style.fontSize = '2rem'
```

this will make the title color red with a font size of 2rem.

note that the style properties are called using camel case.

## create new elements

```javascript
const ul = document.querySelector('ul')
const li = document.createElement('li')

li.innerText = 'Item 4'

ul.append(li)

```

this will create a new li element with 'Item 4' text that will be added to the list.

## modifying attributes and classes

let's add a paragraph to our container div:

```javascript
const container = document.querySelector('.container')
const p = document.createElement('p')

p.innerText = 'this will be added to div container'
p.style.color = 'white';
p.style.backgroundColor = 'black';
p.style.padding = '10px';
p.style.width = '250px';
p.style.textAlign = 'center';

//attributes
p.setAttribute('id', 'text-paragraph') //add id attribute to p tag
p.getAttribute('id') // will get the id attribute of p tag
p.removeAttribute('id') //remove id attribute from p tag

//classes
p.classList.add('text-item') //will add class text-item to p tag
p.classList.contains('text-item') //will check if p tag has text-item class and will return true or false
p.classList.remove('text-item') //will remove class text-item to p tag

container.append(p) // will add p tag to container div
p.remove() // will remove p tag 
```

those are some basic examples of DOM manipulation, for more examples you can check out the [MDN page](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents) for manipulating document.