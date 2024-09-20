const convertToCelsius = function(fahrentheit) {

  return Math.round(((fahrentheit-32)*(5/9))*10)/10

};

//x-32*5/9

const convertToFahrenheit = function(celcius) {

  return Math.round((celcius*(9/5)+32)*10)/10

};

//X*9/5+32

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
