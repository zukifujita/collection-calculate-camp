'use strict';

function get_integer_interval_2(number_a, number_b) {
  var minValue = Math.min(number_a, number_b);
  var maxValue = Math.max(number_a, number_b);
  var result = [];

  for(minValue; minValue <= maxValue; minValue++){
    if (minValue % 2 == 0){
      result.push(minValue);
    }
  }

  if (number_a > number_b) {
    result.reverse();
  }

  return result
}

module.exports = get_integer_interval_2;