function MirrarrayError() {}
MirrarrayError.prototype = Object.create(Error.prototype);

const isValidKey = element =>
  ['string', 'number', 'boolean', 'undefined'].includes(typeof element) || element === null;

const arrayToKeyMirror = arr => {
  if (!Array.isArray(arr)) {
    throw new MirrarrayError('Input to mirrarray must be an array!');
  }
  return arr.reduce((acc, key) => {
    if (!isValidKey(key)) {
      throw new MirrarrayError('Invalid key contained within input array; each element must be either a string or number!');
    }
    acc[key] = key;
    return acc;
  }, {});
};

export default arrayToKeyMirror;