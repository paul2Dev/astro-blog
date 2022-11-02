---
layout: "../../layouts/BlogPost.astro"
title: "functions in typescript"
description: "how to define functions in typescript"
pubDate: "Nov 2 2022"
heroImage: ""
tags: ['TypeScript', 'JavaScript']
--- 
in typescript there are multiple ways to define function types based on parameters and what the function returns.

## functions

let's take this example:

```typescript
//basic example
let log: Function

log = () => {
    console.log('this is a function')
}
```

now let's create a function with parameters:

- a: number
- b: string
- c: boolean (and it's optional)

```typescript
//add parameters with types
const log2 = (a: number, b: string, c?: boolean) => {
    console.log(`${a} and ${b} with optional ${c}`)
}
```

we can also specify what type the function must return, else the function will inherit the type from what is returning.

in this case the function does not have a return statement and will return type void.

```typescript
//add function return type
const log2 = (a: number, b: string, c?: boolean): void => {
    console.log(`${a} and ${b} with optional ${c}`)
}
```

or you can create a function with optional and default value

```typescript
//add function return type
const log2 = (a: number, b: string, c: boolean = true): void => {
    console.log(`${a} and ${b} with optional ${c}`)
}

//another example 
const add = (a: number, b: number): number => {
    return a + b
}
```

## aliases type

let's say we have two functions that takes the same object as parameter and the attributes of that object can be a string and a number:

```typescript
const logUser = (user: {firstName: string, age: number}): void => {
    console.log(`user ${user.firstName} is ${user.age} years old`)
}

const getUserAge = (user: {firstName: string, age: number}): number => {
    return user.age
}
```

aliases will help us to not duplicate code, like in our example we can declare a custom type or alias for function parameter like this:


```typescript
//add alias type

type User = {firstName: string, age: number}

const logUser = (user: User): void => {
    console.log(`user ${user.firstName} is ${user.age} years old`)
}

const getUserAge = (user: User): number => {
    return user.age
}
```

## function signature

a function signuture is a definition of a function where you know exactly what type of parameters the function should have and what type must return.

for example:

```typescript
let math: (a: number, b: number, c: string) => number;

math = (numOne: number, numTwo: number, action: string) => {
return action === 'add' ? numOne + numTwo : 0;
}
```

- first we declare the signature function that should take 2 numbers and one string as parameters and the type the function must return is a number.
- then we declare the function:
    - if the action (string) is 'add' we return the sum of the numOne and numTwo (numbers). 
    - else we return a default value like 0 that is also a number.

and those are just some basic examples of functions in typescript.

feel free to experiment yourself 😉.
