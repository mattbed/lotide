const assert = require('chai').assert;
const tail = require('../tail.js');

describe("#tail", () => {
  it("checks to ensure the original array is not mutated", () => {
    let numbers = [1, 2, 3];
    tail(numbers);
    assert.deepEqual(numbers, [1, 2, 3]);
  });

  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });

  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns [] for []", () => {
    assert.deepEqual(tail([]), []);
  });

  it("returns [] for [1]", () => {
    assert.deepEqual(tail([1]), []);
  });

});