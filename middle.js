const assertArraysEqual = require('/vagrant/w1/lotide/assertArraysEqual.js');

// find the middle of an array

// function to find the middle value
const middleFunction = function(arrayInput) {
  return Math.floor(arrayInput.length / 2);
};

const middle = function(arrayInput) {
  // if length is less than or equal to 2, return nothing
  if (arrayInput.length <= 2) {
    return [];
  }
  // if length is an even number, return the two middle values using slice (above function with -1 adjustments for 0-index)
  if (arrayInput.length % 2 === 0) {
    return arrayInput.slice((middleFunction(arrayInput) - 1), (middleFunction(arrayInput) + 1));
  }
  // if length is an odd number, return the middle value using slice (above function with no adjustments due to rounding down)
  return arrayInput.slice(middleFunction(arrayInput), (middleFunction(arrayInput) + 1));
};

module.exports = middle;
