---
layout: "../../layouts/BlogPost.astro"
title: "classes in typescript"
description: "how to define classes in typescript"
pubDate: "Nov 4 2022"
heroImage: ""
tags: ['TypeScript', 'JavaScript']
--- 

TypeScript adds type annotations and other syntax to allow you to express relationships between classes and other types.

## class members

let's create a Member class that takes 3 properties:
- **name** as string type
- **age** as number type
- **isAdmin** as boolean type

a constructor function that assignes the values to class properties.

and a member object of Member class.

```typescript
class Member {
    name: string
    age: number
    isAdmin: boolean

    constructor(name: string, age: number, isAdmin: boolean) {
        this.name = name
        this.age = age
        this.isAdmin = isAdmin
    }
}

const member = new Member('John', 30, true);
```

## member visibility

by default our Member class has all 3 properties public, this means you can accesed them outside the class.

we can use TypeScript to control whether certain methods or properties are visible to code outside the class.

let's change the visibility members in Member class


```typescript
class Member {
    public name: string
    private age: number
    protected isAdmin: boolean

    constructor(name: string, age: number, isAdmin: boolean) {
        this.name = name
        this.age = age
        this.isAdmin = isAdmin
    }
}

const member = new Member('John', 30, true);
```

- **public** - is the default visibility, public member can be accessed anywhere.
- **protected** - members are only visible to subclasses of the class they’re declared in.
- **private** - private is like protected, but doesn’t allow access to the member even from subclasses.
- **readonly** - this prevents assignments to the field outside of the constructor.


## methods

methods are functions of a class. 

let's add a render method to Member class and then call it on member object:

```typescript
class Member {
    public name: string
    private age: number
    protected isAdmin: boolean
    readonly type: string = 'person'

    constructor(name: string, age: number, isAdmin: boolean) {
        this.name = name
        this.age = age
        this.isAdmin = isAdmin
    }

    render(): void {
        console.log(`${this.name} is ${this.age} years old`)
    }
}

const member = new Member('John', 30, true);
member.render();
```

this will display in console

```bash
John is 30 years old
```

## static members

static members aren’t associated with a particular instance of the class. they can be accessed through the class constructor object itself:

```typescript
class Member {
    static name = 'John'
    static displayName() {
        console.log(Member.name)
    }
}
console.log(Member.name)
Member.displayName()
```

we can acces both static member and method from **Member** class.

## arrow functions

if you have a function that will often be called in a way that loses its **this** context, it can make sense to use an arrow function property instead of a method definition, for example:

```typescript
class Person {
    name = "John"
    getName = () => {
        return this.name
    };
}
const person = new Person()
const personName = person.getName
console.log(personName())
```

this will be valid and will display "John" in console.

## parameter properties

TypeScript offers special syntax for turning a constructor parameter into a class property with the same name and value. These are called parameter properties and are created by prefixing a constructor argument with one of the visibility modifiers **public**, **private**, **protected**, or **readonly**. The resulting field gets those modifier(s):

```typescript
class Person {
    constructor(
        public readonly name: string,
        protected age: number,
        private isAdmin: boolean
    ) {
      // no content necessary
    }
  }
const member = new Person('John', 30, true)
console.log(member.name) //will display John
console.log(member.isAdmin) //error Property 'isAdmin' is private and only accessible within class 'Person'
```

## class expressions

Class expressions are very similar to class declarations. The only real difference is that class expressions don’t need a name, though we can refer to them via whatever identifier they ended up bound to:

```typescript
const Member = class<Type> {
    content: Type
    constructor(value: Type) {
        this.content = value
    }
};
 
const person = new Member("My name is John")
```

And those are some simple concepts of classes in TypeScript, for more details on those topics you can check the [official typescript documentation](https://www.typescriptlang.org/docs/handbook/2/classes.html).

