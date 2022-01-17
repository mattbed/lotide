const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays.js');

// test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([1], [1]), true);
assertEqual(eqArrays([1,"2",3], [1,2,3]), false);
assertEqual(eqArrays([1,2,3,4], [1,2,3]), false);