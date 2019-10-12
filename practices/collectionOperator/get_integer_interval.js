'use strict';

function get_integer_interval(number_a, number_b) {
  var minValue = Math.min(number_a, number_b);
  var maxValue = Math.max(number_a, number_b);
  var result = [];

  for(minValue; minValue <= maxValue; minValue++){
    result.push(minValue);
  }

  if (number_a > number_b) {
    result.reverse();
  }

  return result
}

module.exports = get_integer_interval;

