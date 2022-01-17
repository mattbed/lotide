const assertEqual = require('./assertEqual');

// head function (to isolate the first item in an array)
const head = function(arrayInput) {
  return arrayInput[0];
};

module.exports = head;