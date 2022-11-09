---
layout: "../../layouts/BlogPost.astro"
title: "Event Listeners in Javascript"
description: "how to create events in javascript"
pubDate: "Nov 9 2022"
heroImage: ""
tags: ['JavaScript', 'DOM']
--- 

Event Listeners in javascript allow to add functionality to html elements by listen to different events that happened on the page like: pressing a key, clicking a button, when elements load, etc.

let's take some examples:

```html
<button class="btn-1">Click here</button>
<button class="btn-2">Clicke here</button>
```

## addEventListener()

now let's define the events:

```javascript
//select first button
const buttonOne = document.querySelector('.btn-1') 

function alertBtn() {
    alert('You clicked the button')
}

//add click event on buttonOne element
buttonOne.addEventListener('click', alertBtn())

//select second button
const buttonTwo = document.querySelector('.btn-2') 

//add mouseover event on buttonTwo element
buttonTwo.addEventListener('mouseover', alertBtn())

```

the addEventListener() method can:

- attach an event handler to the specified element.
- attach an event handler to an element without overwriting existing event handlers.
- add many event handlers to one element.
- add event listeners to any DOM object not only HTML elements. i.e the window object.
- makes it easier to control how the event reacts to bubbling.
- is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.
- you can easily remove an event listener by using the removeEventListener() method.

## add many events to the same element

```javascript
//select first button
const buttonOne = document.querySelector('.btn-1') 

function alertBtn1() {
    alert('Alert text 1')
}

function alertBtn2() {
    alert('Alert text 2')
}

//add multiple events on buttonOne element
buttonOne.addEventListener('mouseover', alertBtn1())
buttonOne.addEventListener('click', alertBtn2())
buttonOne.addEventListener('mouseout', alertBtn1())

```

## event bubbling and event campturing

there are two ways of event propagation in the HTML DOM, bubbling and capturing.

event propagation is a way of defining the element order when an event occurs. If you have a `<p>` element inside a `<div>` element, and the user clicks on the `<p>` element, which element's "click" event should be handled first?

in **bubbling** the inner most element's event is handled first and then the outer: the `<p>` element's click event is handled first, then the `<div>` element's click event.

in **capturing** the outer most element's event is handled first and then the inner: the `<div>` element's click event will be handled first, then the `<p>` element's click event.

addEventListener() has a 3rd parameter that can specify the propagation type:

the default value is false and will use the bubbling propagation.

when the value is set to true, the event uses the capturing propagation.

```javascript
document.getElementById("pTag").addEventListener("click", customFunction, true);
document.getElementById("divTag").addEventListener("click", customFunction, true);
```

## removeEventListener()

removeEventListener() method removes event handlers that have been attached with the addEventListener() method:

```javascript
element.removeEventListener("mousemove", myFunction); 
```

