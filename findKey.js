// assert function implemented
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// findKey function to find a value of a key in an object using a callback
const findKey = function(object, callback) {
  for (let element of Object.keys(object)) {
    if (callback(object[element])) {
      return element;
    }
  }
};

// test case

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");

assertEqual(findKey({
  "first": 1,
  "second": 2,
  "third": 3,
}, x => x === 3), "third");