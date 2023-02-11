const convertToCelsius = function(fahrenheit) {
  let converted = ((fahrenheit - 32) * 5/9);

  convertedInt = Number(converted.toFixed(1));

  return convertedInt;

};

const convertToFahrenheit = function(celsius) {
  let converted = (celsius * 9/5 + 32);

  convertedInt = Number(converted.toFixed(1));

  return convertedInt;

};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
