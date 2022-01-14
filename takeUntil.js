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
    for (let i = 0; i < array1.length; i++) {
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
};

// takeUntil function to return an array up to a point defined by a callback
const takeUntil = function(array, callback) {
  for (let index = 0; index < array.length; index++)
    if (callback(array[index])) {
      return array.splice(0,index);
    }
};

// test case
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);