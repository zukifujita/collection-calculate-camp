'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(element => element % 2 == 0 ? element : element % 3 == 0 ? element : element % 5 == 0);
}

module.exports = choose_divisible_integer;
