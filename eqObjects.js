// assert function implemented
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


//test case
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2),false);

const ef = { e: ["1"], f: ["2", 3] };
const fe = { f: ["2", 3], e: ["1"] };
assertEqual(eqObjects(ef, fe), true);

const ef2 = { e: "1", f: ["2", 3] };
assertEqual(eqObjects(ef, ef2),false);