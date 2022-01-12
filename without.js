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

// without function
const without = function(source, itemToRemove) {
// new array so as not to overwrite the source
  let modifiedSource = [];
// loop through each element in source array
  for (let i = 0; i < source.length; i++) {
// compare each element of the itemsToRemove array against the source array
      if (!itemToRemove.includes(source[i])) {
// push unmatched source element to a new array
        modifiedSource.push(source[i]);
    }
  }
// return modified source array copy
  return modifiedSource;
}

// test case to ensure the original array is not modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// test cases
assertArraysEqual(without([1,2,3,4,5], [4,5]), [1,2,3]);
assertArraysEqual(without([1,2,"3",4,5], [3,4,5]), [1,2,"3"]);
assertArraysEqual(without([1,2,3,4,5], [6,7]), [1,2,3,4,5]);