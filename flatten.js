const eqArrays = require('./eqArrays.js');
const assertArraysEqual = require('./assertArraysEqual.js');

// set up using recursion to facilitate nested arrays
const flatten = function(array) {
  const output = [];
  const sortArray = function(array, output) {
    for (let element of array) {
      (Array.isArray(element) ? sortArray(element, output) : output.push(element))
    }
  }
  sortArray(array, output);
  return output;
};

//test cases

const results1 = flatten([1, 2, [3, 4 ], 5, [6,[7,8]]]);
assertArraysEqual(results1, [1,2,3,4,5,6,7,8]);

const results2 = flatten([1,2,3,[4,5,6],7,[8,[9,[10]]],[[11]]]);
assertArraysEqual(results2, [1,2,3,4,5,6,7,8,9,10,11]);