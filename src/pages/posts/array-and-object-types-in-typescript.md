---
layout: "../../layouts/BlogPost.astro"
title: "Array and Object types in TypeScript"
description: "there are multiple ways to create an array or object in typescript."
pubDate: "Nov 1 2022"
heroImage: ""
tags: ['TypeScript', 'JavaScript']
--- 

there are multiple ways to create arrays or objects in typescript.

## Arrays

```typescript
//arrays

let names: string[] = ['John', 'Jane', 'Mary'];
names.push('Bob');
names.push(1); // error

let numbers: number[] = [1, 2, 3];
numbers.push(4);
numbers.push('Bob'); // error
```

first array will accept only strings.

second array will accept only numbers.

## Union types

also you can create an array that accepts all primitives: string, number and boolean:

```typescript
//union types

let mixedArray1: (string | number)[] = [];
mixedArray1.push('Bob');
mixedArray1.push(1);
mixedArray1.push(true); // error

let mixedArray2: (string | number | boolean)[] = [];
mixedArray2.push('Bob');
mixedArray2.push(1);
mixedArray2.push(true);
```

first array will accept only string and numbers.

second array will accept all three primitives.

## Objects

```typescript
//objects

let mixedObject1: object;
mixedObject1 = { name: 'paul', age: 30 };
mixedObject1 = []; // error

let mixedObject2: {
    name: string;
    age: number;
    isAdmin?: boolean;
};
mixedObject2 = { name: 'paul', age: 30, isAdmin: true };
mixedObject2 = { name: 'paul', age: 30 }; 
mixedObject2 = { name: 'paul', age: 30, isAdmin: 'yes' }; // error
```

first object will accept **name** attribute as string and **age** attribute as number.

second object will accept **name** attribute as string, **age** attribute as number, and **isAdmin** as boolean (in this case isAdmin is not mandatory but if exists it must be boolean).

there are multiple combinations that you can create and experiment yourself. 

feel free to try 😉.



