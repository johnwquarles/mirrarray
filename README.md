# Mirrarray
[![Build Status](https://travis-ci.org/johnwquarles/mirrarray.svg?branch=master)](https://travis-ci.org/johnwquarles/mirrarray)
![Coverage Status](https://coveralls.io/repos/github/johnwquarles/mirrarray/badge.svg?branch=master)
![CodeClimate GPA](https://img.shields.io/codeclimate/github/johnwquarles/mirrarray.svg)
![NPM Downloads/Week](https://img.shields.io/npm/dw/mirrarray.svg)
![NPM Downloads All Versions](https://img.shields.io/npm/dt/mirrarray.svg)
![Version](https://img.shields.io/npm/v/mirrarray.svg)

A very simple module for creating a keymirror object from an array of keys.

## Installation

```bash
yarn add mirrarray
```

If you don't yet have Yarn installed, please see the documentation here:
https://yarnpkg.com/lang/en/docs/install/

## Usage

Import & pass `mirrarray` an array full of keys.


es6 module syntax:
```javascript
import mirrarray from 'mirrarray';

const keymirror = mirrarray(['this', 'that', 'another']);
```

or commonjs:
```javascript
var mirrarray = require("mirrarray");

var keymirror = mirrarray(['this', 'that', 'another']);
```

_Please note_ that the commonjs example above is current to version 2.0.0. Earlier versions would have required you to enter `require("mirrarray").default`, but this was undocumented. Usage via es6 module syntax has not been changed.

Now `keymirror` is an object containing key/value pairs for each element in the input array.

```javascript
{
  this: 'this',
  that: 'that',
  another: 'another'
}
```

## Usable Key Types

- string
- number
- undefined
- null
- boolean

Non-strings will be coerced into a string for use as a key in the keymirror object in exactly the manner you'd expect. The corresponding value will still be of the original type.

So,

```
mirrarray([null]);
```

evaluates to

```
{
  'null': null
}
```

However, in order to avoid unexpected results, mirrarray will throw an error if the input array contains distinct elements that coerce into the same string, like `'true'` and `true`.
