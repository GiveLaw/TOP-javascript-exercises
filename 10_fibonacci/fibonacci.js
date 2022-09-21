const fibonacci = function(num) {
  if (num < 0) return 'OOPS';
  if (num < 2) return 1;
  let arr = [1,1]  // initial Fibonacci suction/numbers values ···
  while (arr.length < num) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
  }
  return arr.pop();  // return the last value
};

// Do not edit below this line
module.exports = fibonacci;
