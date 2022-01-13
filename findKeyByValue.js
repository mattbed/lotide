// assert function implemented
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// function to help find a key in an object by matching its value
const findKeyByValue = function(objectInput, keyInput) {
  for (let element of Object.keys(objectInput)) {
    if (objectInput[element] === keyInput) {
      return element;
    }
  }
};


// test cases
const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const test1 = { 
  one: "1",
  two: "2",
  three:  "3",
};

assertEqual(findKeyByValue(test1, "2"), "two");
assertEqual(findKeyByValue(test1, 2), undefined);