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


// map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results
}

// test cases
const words = ["Aint", "that", "just", "the", "way"];
const results1 = map(words, word => word[0]);
console.log(results1);

const test2 = [1,2,3,4,5];
const results2 = map(test2, num => num + 5);
console.log(results2);

const results3 = map(words, word => word + "😀")
console.log(results3);