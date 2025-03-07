const add = function(...nums) {
	let sum = 0;

  for (i = 0; i < nums.length; ++i){
    sum += nums[i];
  }

  return sum;
};

const subtract = function(...nums) {
  let sum = nums[0];

  for (i = 1; i < nums.length; ++i){
    sum -= nums[i];
  }

  return sum;
};

const sum = function(arr) {
	let sum = 0;

  for (let i = 0; i < arr.length; ++i){
    sum += arr[i];
  }

  return sum;
};

const multiply = function(arr) {
  let sum = 1;

  for (let i = 0; i < arr.length; ++i){
    sum *= arr[i];
  }

  return sum;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num) {
  if (num === 0){
    return 1;
  } else {
    return num * factorial(num - 1);
  }
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
