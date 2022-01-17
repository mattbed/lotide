// tail function (to isolate the entire array beyond the first element)
const tail = function(arrayInput) {
  return arrayInput.slice(1);
};

console.log(tail([5,6,7,8,9,10]));
console.log(tail([1]));
module.exports = tail;