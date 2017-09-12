# Mirrarray
[![Build Status](https://travis-ci.org/johnwquarles/mirrarray.svg?branch=master)](https://travis-ci.org/johnwquarles/mirrarray)
[![Coverage Status](https://coveralls.io/repos/github/johnwquarles/mirrarray/badge.svg?branch=master)](https://coveralls.io/github/johnwquarles/mirrarray?branch=master)
![NPM Downloads/Week](https://img.shields.io/npm/dw/mirrarray.svg)
![Version](https://img.shields.io/npm/v/mirrarray.svg)

A very simple module for creating a keymirror object from an array of keys.

### Usage

Import & pass `mirrarray` an array full of keys.

```
import mirrarray from 'mirrarray';

const keymirror = mirrarray(['this', 'that', 'another']);
```

Now `keymirror` is an object containing key/value pairs for each element in the input array.

```
{
  this: 'this',
  that: 'that',
  another: 'another'
}
```

### Usable Key Types

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
