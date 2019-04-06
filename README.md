# WebComponents-POC

> is an experiment using Web Components, native ES6 modules, Redux, no transpiler, no framework... future is now!

## Dependencies

### Redux

Redux was downloaded from [its dist/ folder](https://unpkg.com/redux/dist/) and imported with a good old `script` tag.
It is available as global variable: `Redux`.

### load-html

At the time of this writing *HTML imports* are not widely supported. I am using [load-html](http://g14n.info/load-html) to import `template` nodes.

## Components

Every component has an idenfifier that is lowercase and must contain a dash character, for example `my-component`.

It is implemented by two files, for instance:

* my-component.html
* my-component.js

File *my-component.html* contains a `template` tag, which **id** must correspond with component identifier.
It defines component markup that will be mounted into element's *Shadow DOM*.
It can have a `style` tag which will define styling that will be scoped into element's *Shadow DOM*.

```html
<template id="my-component">
  <style>
    p {
      background-color: #333;
      color: #eee;
    }
  </style>

  <p>
    This is my component.
  </p>
</template>
```
