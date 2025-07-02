const add = function(addend_1, addend_2) {
	return addend_1 + addend_2;
};

const subtract = function(addend_1, addend_2) {
	return add(addend_1, -addend_2)
};

const sum = function(array) {
	return array.reduce((accum, curr) => accum + curr, 0)
};

const multiply = function(array) {
  return array.reduce((accum, curr) => accum * curr, 1)
};

const power = function(num_1, pow) {
	return num_1 ** pow
};

const factorial = function(num) {
  if (num <= 1) {
    return 1
  }
  res = 1
	for (let i = num; i > 1; i--) {
    res *= i
  }
  return res
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
