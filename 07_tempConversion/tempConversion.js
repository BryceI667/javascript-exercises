const convertToCelsius = function(temperature) {
  return Math.round((temperature - 32) * 5 / 9 * 10) / 10;
};

const convertToFahrenheit = function(temperature) {
  return Math.round(temperature * 9 / 5 * 10) / 10 + 32;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
