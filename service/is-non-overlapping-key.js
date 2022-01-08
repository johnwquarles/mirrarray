/**
  * checks to see if the value in the iteration is already existing in the result 
  * return object from the program
  **/

module.exports = (arrayValue, resultObject) => {
  /* simple check by stringifying the value like below */
  if (String(arrayValue) in resultObject) {
    return true;
  }
  else {
    return false;
  }
};
