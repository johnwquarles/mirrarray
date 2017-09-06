const arrayToKeyMirror = arr =>
  arr.reduce((acc, key) => (acc[key] = key) && acc, {});

export default arrayToKeyMirror;