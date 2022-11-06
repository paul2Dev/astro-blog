---
layout: "../../layouts/BlogPost.astro"
title: "enums in typescript"
description: "how to define and use enums in typescript"
pubDate: "Nov 6 2022"
heroImage: ""
tags: ['TypeScript', 'JavaScript']
--- 

## enum definition

an enum is a way to organize a collection of related values.

here is an example:

```typescript
enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}

// usage
var card = CardSuit.Clubs;

// error
card = "not a member of card suit"; // Error : string is not assignable to type `CardSuit`
```

## number enums and numbers

typeScript enums are number based, this means that numbers can be assigned to an instance of the enum, and so can anything else that is compatible with number.

```typescript
enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}
var col = CardSuit.Clubs;
col = 3 // same as CardSuit.Spades
```

## number enums and strings

let's take for example the same enum:

```typescript
//.ts file
enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}
```

now let's see what javascript it's generating after we compile the .ts file:

```typescript
//.js file
var CardSuit;
(function (CardSuit) {
    CardSuit[CardSuit["Clubs"] = 0] = "Clubs";
    CardSuit[CardSuit["Diamonds"] = 1] = "Diamonds";
    CardSuit[CardSuit["Hearts"] = 2] = "Hearts";
    CardSuit[CardSuit["Spades"] = 3] = "Spades";
})(CardSuit || (CardSuit = {}));
```

this means that you can use CardSuit variable to convert a string version of enum in number or a number version of the enum into string, for example:

```typescript
enum CardSuit {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}

console.log(CardSuit[0]); // "Clubs"
console.log(CardSuit["Clubs"]); // 0
console.log(CardSuit[CardSuit.Clubs]); // "Clubs" because `Tristate.Clubs == 0`
```

## changing the number associated with a number enum

like arrays enums are 0 based by default and then each subsequent value increments by 1 automatically.

```typescript
enum CardSuit {
    Clubs, //0
    Diamonds, //1
    Hearts, //2
    Spades //3
}
```

for example if you want to start with 1 you can change the first member to be 1:

```typescript
enum CardSuit {
    Clubs = 1, //1
    Diamonds, //2
    Hearts, //3
    Spades //4
}
```

## string enums

we can have enum members with string values:

```typescript
export enum EvidenceTypeEnum {
  UNKNOWN = '',
  PASSPORT_VISA = 'passport_visa',
  PASSPORT = 'passport',
  SIGHTED_STUDENT_CARD = 'sighted_tertiary_edu_id',
  SIGHTED_KEYPASS_CARD = 'sighted_keypass_card',
  SIGHTED_PROOF_OF_AGE_CARD = 'sighted_proof_of_age_card',
}
```

for example we can use those for string comparisons:

```typescript
// where `someStringFromBackend` will be '' | 'passport_visa' | 'passport' ... etc.
const value = someStringFromBackend as EvidenceTypeEnum; 

// sample use in code
if (value === EvidenceTypeEnum.PASSPORT){
    console.log('You provided a passport');
    console.log(value); // `passport`
}
```

## enum with static functions

you can use the declaration enum + namespace merging to add static methods to an enum. The following demonstrates an example where we add a static member isBusinessDay to an enum weekday:

```typescript
enum Weekday {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
namespace Weekday {
    export function isBusinessDay(day: Weekday) {
        switch (day) {
            case Weekday.Saturday:
            case Weekday.Sunday:
                return false;
            default:
                return true;
        }
    }
}

const mon = Weekday.Monday;
const sun = Weekday.Sunday;
console.log(Weekday.isBusinessDay(mon)); // true
console.log(Weekday.isBusinessDay(sun)); // false
```

for more examples you can check out [TypeScript Deep Dive book](https://basarat.gitbook.io/typescript).

