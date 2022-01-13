// compare two arrays

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


// Returns true if both objects have identical keys with identical values
// Otherwise you get false
const eqObjects = function(object1, object2) {
  // first check length of the objects, return false if mismatched
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  // create a loop to cycle through one of the objects
  for (let keys of Object.keys(object1)) {
    // check to see if both are arrays, if true run eqArrays to compare them and return the outcome
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      return eqArrays(object1[keys], object2[keys]);
    // check two properties against each other - if they do not match, return false.
    // since we are cycling through an entire object, that has the same length as the other object
    // it will check all possible key matches, if there is a single key that is mismatched it will be flagged
    // if no keys mismatch, then all keys must be matching and it defaults to return true.
    } else if (object1[keys] !== object2[keys]) {
      return false;
    }
  }
  return true;
};


// function to assert functions that return objects
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
   if (eqObjects(actual, expected)) {
    console.log(`🎉 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`⛔ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

// test case
const test1 = {a: 1, b: 2, c: 3,};
const test2 = {b: 2, a: 1, c: 3,};

assertObjectsEqual(test1, test2);

const test3 = {a: [1,2,3], b: [2], c: 3,};
const test4 = {a: 1, b: [2], c: 3,};

assertObjectsEqual(test3, test4);
assertObjectsEqual(test1, test4);