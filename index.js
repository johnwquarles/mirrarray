function MirrarrayError() {}
MirrarrayError.prototype = Object.create(Error.prototype);

const isValidKey = element => {
  const isNull = element === null;
  return ['string', 'number', 'boolean', 'undefined'].includes(typeof element) || isNull;
}

const nonOverlappingKey = element => {
  /**
   * Ensure we don't have distinct elements that coerce to the same key, leading to unexpected results.
   * For example, input of [true, 'true'] would return a keymirror of {true: 'true'} despite containing two distinct elements
   * if we didn't make this check.
   */
  const isNull = element === null;
  const typeSeenBefore = keysSeen['' + element];
  const thisType = isNull ? 'null' : typeof element;
  if (typeSeenBefore) {
    return typeSeenBefore === thisType;
  } else {
    keysSeen['' + element] = thisType;
    return true;
  }
}

let keysSeen;

const arrayToKeyMirror = arr => {
  keysSeen = {};
  if (!Array.isArray(arr)) {
    throw new MirrarrayError('Input to mirrarray must be an array!');
  }
  return arr.reduce((acc, key) => {
    if (!isValidKey(key)) {
      throw new MirrarrayError('Invalid element contained within input array; each element must be either a string or number!');
    }
    if (!nonOverlappingKey(key)) {
      throw new MirrarrayError('Distinct elements in the input array are coercing to the same string!');
    }
    acc[key] = key;
    return acc;
  }, {});
};

export default arrayToKeyMirror;