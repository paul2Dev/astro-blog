---
layout: "../../layouts/BlogPost.astro"
title: "tsconfig workflow for better project structure"
description: "you can structure your project folders using tsconfig"
pubDate: "Nov 2 2022"
heroImage: ""
tags: ['TypeScript', 'JavaScript']
--- 

you can structure your project folders using tsconfig.

## create tsconfig

first you need to create **tsconfig.json** file where we will configure our **rootDir** and **outDir** project directories:

```bash
tsc --init
```

## config tsconfig

let's say we want a default **/src** and **/public** directories for our project.

- **/src** will store our .ts files.
- **/public** will store our compiled files and other assets that will be served on the server.

for this to work we have to make de following changes in our **tsconfig.json** file:

```json
{
  "compilerOptions": {
    "rootDir": "./src",  
    "outDir": "./public",  
  },
  "include": ["src"]
}
```
## testing

to test that it works we will create a **index.ts** file in **./src** folder.

```typescript
//index.ts
console.log('it works')
```

now let's run the command tsc in terminal to compile our code.

```bash
tsc
```

or tsc --watch to recompile every time you make changes in your .ts file.

```bash
tsc --watch
```

this will compile all the .ts files from ./src into ./public folder.

the compiled file ./public/index.js should look like this:

```javascript
//index.js
"use strict";
console.log('it works');
```

And that's it, you now have your project folder structure ready to go 😉.
