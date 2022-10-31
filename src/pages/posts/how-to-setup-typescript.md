---
layout: "../../layouts/BlogPost.astro"
title: "How to setup TypeScript with npm"
description: "basic steps to setup TypeScript on your project using npm"
pubDate: "Oct 31 2022"
heroImage: ""
tags: ['TypeScript', 'JavaScript']
--- 

Here are the basic steps to setup **TypeScript** on your project using npm.

## install TypeScript globally

```bash
npm install -g typescript

tsc -v
```

this will install TypeScript globally, and check your current version using `tsc -v`.

## create your first .ts file 

create a file .ts for example **index.ts** and let's add some code.

```typescript
//index.ts
let firstName: string 
let age: number

firstName = 'John'
age = 23
```

we created a string and a number variable for our example.

**firstName** will accept only **strings**.

**age** will accept only **numbers**.

## compile your .ts file

now let's compile our code using **tsc** command.

```bash
tsc index
```

OR

```bash
tsc --watch index
```

the **--watch** flag will look for any changes made in **.ts** file and will compile it automatically.

a file named **index.js** will be created and it will look like this:

```javascript
//index.js
var firstName;
var age;
firstName = 'John';
age = 23;
```

## setup config file

```bash
tsc --init
```

it will create a **tsconfig.json** file with a lot of settings.

here you can change the **target** function in the **compilerOption** to **es6** for example:

```json
{
  "compilerOptions": {
    "target": "es6", 
    //...
  }
}
```

recompile .ts, you can use only **tsc** command to compile all your .ts files from your project folder.

```bash
tsc
```

the compiled .ts file with the target: "es6" will look like this:

```javascript
//index.js
"use strict";
let firstName;
let age;
firstName = 'John';
age = 23;
```

And that's it, you are ready to use TypeScript in your project. Enjoy 😉.