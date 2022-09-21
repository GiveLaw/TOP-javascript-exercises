const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(args) {
    if (args.length) return args.reduce((a,b) => a+b);
    return 0;
};

const multiply = function(args) {
    if (args.length) return args.reduce((a,b) => a*b);
    return 0;
};

const power = function(base, exponent) {
    return base ** exponent;
};

const factorial = function(n) {
    if (n <= 1) return 1;
    return n * factorial(n-1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
