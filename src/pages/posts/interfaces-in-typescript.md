---
layout: "../../layouts/BlogPost.astro"
title: "interfaces in typescript"
description: "how to define and use interfaces in typescript"
pubDate: "Nov 5 2022"
heroImage: ""
tags: ['TypeScript', 'JavaScript']
--- 

interfaces in TypeScript have a lot of functionality by declaring the structure of variables.

## basic interface

let's take two examples:

- first will use inline annotation 
- second will use an interface

```typescript
//inline annotation
declare var Person: {name: string, age: number}

//using interface
interface Person {
    name: string
    age: number
}
declare var person: Person
```

interfaces in TypeScript are open ended, you can build up new members in existing interface if someone decide to use it in other library.

for example:

```typescript
//library1.ts
interface Person {
    name: string
    age: number
}
declare var person: Person;

//library2.ts
interface Person {
    isAdmin: boolean
}

// this will be allowed
var person.isAdmin
```

## classes can implement interfaces

if you want to use classes that has same object structure that someone else declared for you in an interface you can use the implements keyword to ensure compatibility:

```typescript
interface Person {
    name: string; 
    age: number;
}

class Employee implements Person {
    name: string; age: number; // same as person
}
```

basically if you are implement an interafce, any changes in that external Person interface will result in a compile error in your code base so you can easily keep it in sync:

```typescript
interface Person {
    name: string
    age: number
    isAdmin: boolean // New member
}

class Employee implements Person { // ERROR : missing member `isAdmin`
    name: string
    age: number
}
```

implements restricts the structure of the class instances:

```typescript
var foo: Person = new Employee();
```

is not the same thing as:

```typescript
var foo: Person = Employee
```

those are just some examples to show what you can do with interfaces in typescript.


