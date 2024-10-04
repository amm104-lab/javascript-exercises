const add = function(a,b) {
  return a+b;	
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {

  let result = array.reduce((total, current) => {
    return total+=current;
  },0);

  return result;
  };

const multiply = function(array) {
  let solution = array.reduce((total, current)=>{
    return total*current;
  },1)

  return solution;
};

const power = function(a,b) {
	return a**b
};

const factorial = function(num) {
  if(num<0){
    return -1;
  }

  else if(num==0){
    return 1
  }

  else{
    return (num*factorial(num-1));
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
