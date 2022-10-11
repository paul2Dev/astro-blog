---
layout: "../../layouts/BlogPost.astro"
title: "Try console.table() when you debug your JavaScript app"
description: "next time you’re debugging your application in javascript using console.log() try an alternative function like console.table()."
pubDate: "Aug 11 2022"
heroImage: ""
tags: ['JavaScript']
--- 

Next time you’re debugging your application in javascript using console.log() try an alternative function like console.table() for a different data representation in your console or browser.

Example

```javascript
const user =  {
    id: 123123123,
    name: 'Paul',
    email: 'contact@paul2d.dev',
    phone: '123456789',
    address: []
};
```

console.log(user)

```javascript
{
  id: 123123123,
  name: 'Paul',
  email: 'contact@paul2d.dev',
  phone: '123456789',
  address: []
}
```

console.table(user)

```javascript
┌─────────┬──────────────────────┐
│ (index) │        Values        │
├─────────┼──────────────────────┤
│   id    │      123123123       │
│  name   │        'Paul'        │
│  email  │ 'contact@paul2d.dev' │
│  phone  │     '123456789'      │
│ address │                      │
└─────────┴──────────────────────┘
```