const repeatString = function(str, num) {
  if (num < 0) return 'ERROR'
  let outcome = '';
  for (let i = 0; i < num; i++) outcome += str;
  return outcome;
};

// Do not edit below this line
module.exports = repeatString;
