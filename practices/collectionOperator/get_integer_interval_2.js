'use strict';

function get_integer_interval_2(number_a, number_b) {
  return number_a, number_b.filter(element => number_a % 2 ? number_a++ : number_b++);
}

module.exports = get_integer_interval_2;