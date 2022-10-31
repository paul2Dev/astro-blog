---
layout: "../../layouts/BlogPost.astro"
title: "Primitive types in TypeScript"
description: "there are three main primitives in JavaScript and TypeScript."
pubDate: "Oct 31 2022"
heroImage: ""
tags: ['TypeScript', 'JavaScript']
--- 

There are three main primitives in JavaScript and TypeScript.

*   **number** - whole numbers and floating point values.
*   **string** - text values
*   **boolean** - true or false values.

let's take some examples:

```typescript
let firstName: string 
let age: number
let isAdmin: boolean

//or

let firstName = 'firstname goes here' 
let age = 23
let isAdmin = true

firstName = 'John'
age = 32
isAdmin = false
```

both declarations are valid, in second example, typescript will know what type to associate for each variable based on the value it takes.

here are some bad examples that will generate errors:

```typescript
let firstName: string 
let age: number
let isAdmin: boolean

firstName = 32
age = 'this should be a number to be valid'
isAdmin = 'true here is not a boolean'
```

in case you are using **vscode** you will be prompt with errors in code editor. 