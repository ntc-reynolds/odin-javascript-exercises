const convertToCelsius = function(tempFahrenheit) {
  let celsius = (tempFahrenheit-32)*5/9
  return parseFloat(celsius.toFixed(1))
};

const convertToFahrenheit = function(tempCelsius) {
  let fahrenheit = (tempCelsius*9/5) + 32
  return parseFloat(fahrenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
