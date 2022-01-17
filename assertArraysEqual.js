const eqArrays = require('./eqArrays.js');

// assert function implemented
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`🎉 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`⛔ Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

module.exports = assertArraysEqual;