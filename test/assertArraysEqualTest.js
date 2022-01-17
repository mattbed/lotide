const assertArraysEqual = require('../assertArraysEqual');

// test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => should FAIL
assertArraysEqual([1], [1]); // => should PASS
assertArraysEqual([1,"2",3], [1,2,3]); // => should FAIL
assertArraysEqual([1,2,3,4], [1,2,3]); // => should FAIL