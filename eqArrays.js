// compares two arrays
const eqArrays = function(array1, array2) {
// first check if the arrays are the same length
  if (array1.length !== array2.length) return false;
      // loop to compare each individual element, flagging any mismatch
  for (let i = 0; i < array1.length; i++) {
    // check if both are arrays, recurse if yes
    if (Array.isArray(array1[i]) && (Array.isArray(array2[i]))) {
      if (!eqArrays(array1[i], array2[i])) return false;
      // check if only one is array, signalling a mismatch thus flag as false
    } else if (Array.isArray(array1[i]) || (Array.isArray(array2[i]))) {
      return false;
      // lastly compare the two non-array values, flagging as false if they do not match
    } else if (array1[i] !== array2[i]) {
      return false;
    };
  }
  // if nothing was flagged as false, return true
  return true;
};

// console.log("true = ", eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
// console.log("false = ", eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
// console.log("false = ", eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false
// console.log("false = ", eqArrays([[2, 3], 5], [[2, 3], 4])) // => false
// console.log("true = ", eqArrays([[2, 3, [5]], [4]], [[2, 3, [5]], [4]])) // => true

module.exports = eqArrays;