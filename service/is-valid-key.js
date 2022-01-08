/**
  * checks to see if the value in the array is valid or not 
  * Null, Undefined, Boolean, String and Number are acceptable array values
  **/

module.exports = (arrayValue) => {
  const isNull = arrayValue === null;
  return ['string', 'number', 'boolean', 'undefined'].includes(typeof arrayValue) || isNull;
};

