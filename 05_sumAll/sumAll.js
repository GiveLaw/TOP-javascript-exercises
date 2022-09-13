const sumAll = function(start, end) {
  // ERROR with non-number parameters:
  // ERROR with negative numbers:
  if (!Number.isInteger(start) ||
      !Number.isInteger(end) ||
      start < 0 ||
      end < 0)
    {return 'ERROR';}

  // larger number first:
  if (start > end) [start, end] = [end, start];

  let result = 0;
  for (; start <= end; start++) {
    result += start;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
