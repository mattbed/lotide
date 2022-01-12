// assert function implemented
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
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

// test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1], [1]), true);
assertEqual(eqArrays([1,"2",3], [1,2,3]), false);
assertEqual(eqArrays([1,2,3,4], [1,2,3]), false);