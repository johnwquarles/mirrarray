import mirrarray, { MirrarrayError } from './index';

test('Returns empty object for empty array input', () => {
  expect(mirrarray([])).toEqual({});
});

test('Returns key mirror object as expected for an array of strings', () => {
  const input = ['this', 'that', 'another', 'again'];
  const output = {
    this: 'this',
    that: 'that',
    another: 'another',
    again: 'again',
  };
  expect(mirrarray(input)).toEqual(output);
});

test('Returns key mirror object as expected for an array of numbers', () => {
  const input = [1, 2, 3, 4];
  const output = {
    // Writing keys explicitly as strings to emphasize that the keys will have been (necessarily) coerced into strings,
    // while the values will remain numbers.
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
  };
  expect(mirrarray(input)).toEqual(output);
});

test('Throws error if input type is not Array', () => {
  const invalidInputs = [{}, 'a_string', 1234, true, undefined, null];
  invalidInputs.forEach(invalidInput =>
    expect(mirrarray.bind(null, invalidInput)).toThrowError(MirrarrayError));
});

const validInputs = ['a', 'b', 'c'];

test('Throws error if input array contains element of a type that cannot be (intuitively) coerced into a string', () => {
  // "Intuitively" because you could JSON.stringify an object to use as a key, but this wouldn't be a particularly sensible use case.
  // Double-empty array here so that Array.prototype.concat doesn't flatten it. Technically it's an object anyway, but just to be thorough.
  const invalidInputs = [{}, [[]]]
  invalidInputs.forEach(invalidInput => {
    const input = validInputs.concat(invalidInput);
    expect(mirrarray.bind(null, input)).toThrowError(MirrarrayError);
  });
});

test('Will coerce null, undefined & booleans to strings for use as keys', () => {
  [null, undefined, false, true].forEach(val => {
    expect(mirrarray(validInputs.concat(val))).toEqual({
      a: 'a',
      b: 'b',
      c: 'c',
      [val]: val,
    });
  });
});

test('Will allow for multiples of the same key as long as they\'re the same type', () => {
  expect(mirrarray(['a', 'a', 'a'])).toEqual({a: 'a'});
  expect(mirrarray([1, 1, 1])).toEqual({1: 1});
});

test('Will not allow for distinct elements to coerce to the same string', () => {
  expect(mirrarray.bind(null, validInputs.concat(['true', true]))).toThrowError(MirrarrayError);
  expect(mirrarray.bind(null, validInputs.concat(['undefined', undefined]))).toThrowError(MirrarrayError);
  expect(mirrarray.bind(null, validInputs.concat(['null', null]))).toThrowError(MirrarrayError);
  expect(mirrarray.bind(null, validInputs.concat(['1234', 1234]))).toThrowError(MirrarrayError);
});