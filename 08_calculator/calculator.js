const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(numbers) {
  const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return sum;
};

const multiply = function(numbers) {
  const mult = numbers.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
  }, 1);
  return mult;
};

const power = function(a,b) {
  return a**b;
};

const factorial = function(num) {
  let temp = 1;
  if (num == 0){
    return 1;
  }else{
    for(let i=num; i>0; i--){
      temp*=i;
    }
      return temp;
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
