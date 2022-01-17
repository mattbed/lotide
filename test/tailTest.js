const assertEqual = require('../assertEqual');
const tail = require('../tail.js');

// Test Code to ensure the array is not mutated
const numbers = [1, 2, 3];
tail(numbers);
assertEqual(numbers.length, 3);

// Test codes 1 through 4 testing various possible inputs
const test1 = tail([5,6,7]);
assertEqual(test1.length, 2);
assertEqual(test1[0], 6);
assertEqual(test1[1], 7);

const test2 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(test2.length, 2);
assertEqual(test2[0], "Lighthouse");
assertEqual(test2[1], "Labs");

const test3 = tail([]);
assertEqual(test3.length, 0);
assertEqual(test3[0], undefined);

const test4 = tail([1]);
assertEqual(test4.length, 0);
assertEqual(test4[0], undefined);