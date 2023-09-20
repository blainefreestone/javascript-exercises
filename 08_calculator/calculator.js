const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(valueArray) {
	return valueArray.reduce((total, value) => total + value, 0);
};

const multiply = function(valueArray) {
  return valueArray.reduce((total, value) => total * value, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(value) {
	if (value === 0) return 1;
  
  let product = 1;

  for (let i = value; i > 0; value--) {
    product *= value;
  }

  return product;
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
