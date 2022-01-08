/* app imports */
const isValidArrayValue = require("./service/is-valid-key.js");
const isOverlappingKey = require("./service/is-non-overlapping-key.js");

module.exports = (array) => {
  try {
    if (!Array.isArray(array)) {
      throw new Error("Input to mirrarray must be an array!");
    }
    else if (array.length === 0) {
      return {};
    }
    else {
      /* dont need to create another object for checking, use the accumulator as a part of 
         the 'isOverlappingKey' check */
      let mirrorObject = array.reduce((acc, value) => {
        if (!isValidArrayValue(value)) {
          throw new Error("Invalid element contained within input array; each element must Null, Boolean, String, Number or Undefined Types only!");
        }
        else if (isOverlappingKey(value, acc)) {
          throw new Error("Distinct elements in the input array are coercing to the same string!");
        }
        else {
          /* make the updates here */
          let key = String(value);
          acc[key] = value;
          return acc;
        }
      }, {});

      /* return to caller */
      return mirrorObject;
    }
  }
  catch (error) {
    throw new Error(error);
  }
};
