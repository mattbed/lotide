// tail function (to isolate the entire array beyond the first element)
const tail = function(arrayInput) {
  return arrayInput.slice(1);
};

module.exports = tail;