// assert function implemented
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🎉 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⛔ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// counts the occurence of each individual letter in a given string

const countLetters = function(inputString) {
  const letterCount = {};
  // removes spaces using the replace method, \s for whitespace and g as a global flag (to remove all spaces)
  const noSpace = inputString.replace(/\s/g, '');
  for (let i = 0; i < noSpace.length; i++) {
  // if this returns truthy due to being a property within the letterCount object already, it iterates with +=
  // otherwise it goes to the else statement and creates the property in the first place, giving it a default value of 1
    if (letterCount[noSpace[i]]) {
      letterCount[noSpace[i]] += 1;
    } else {
      letterCount[noSpace[i]] = 1;
    }
  }
  return letterCount;
};

// test case
console.log(countLetters("the quick brown fox jumps over the lazy dog"));
console.log(countLetters("This is just a TEST"));
console.log(countLetters("                  "));
console.log(countLetters("abcdefghijklmnopqrstuvwxyz"));