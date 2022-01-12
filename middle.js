// assert function implemented
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🎉 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`⛔ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

// compares two arrays
const eqArrays = function(array1, array2) {
// first check if the arrays are the same length
  if (array1.length === array2.length) {
// for statement to compare each individual element, flagging any mismatch    
    for (i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
// if the code passes up to this point, length will be equal and no elements will have mismatched    
    return true;
// if the arrays were different length, it would skip to the following return statement
  } else {
    return false;
  }
}

// find the middle of an array

// function to find the middle value
const middleFunction = function(arrayInput) {
  return Math.floor(arrayInput.length / 2);
}
const middle = function(arrayInput) {
  // if length is less than or equal to 2, return nothing
  if (arrayInput.length <= 2) {
    return [];
    // if length is an even number, return the two middle values using slice (above function with -1 adjustments for 0-index)
  } else if (arrayInput.length % 2 === 0) {
    return arrayInput.slice((middleFunction(arrayInput) - 1), (middleFunction(arrayInput) + 1));
    // if length is an odd number, return the middle value using slice (above function with no adjustments due to rounding down)
  } else {
    return arrayInput.slice(middleFunction(arrayInput), (middleFunction(arrayInput) + 1));
  }
}

// test cases
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
