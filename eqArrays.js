// compares two arrays
const eqArrays = function(array1, array2) {
// first check if the arrays are the same length
  if (array1.length === array2.length) {
    // for statement to compare each individual element, flagging any mismatch
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    // if the code passes up to this point, length will be equal and no elements will have mismatched
    return true;
    // if the arrays were different length, it would skip to the following return statement
  }
  return false;
};

module.exports = eqArrays;