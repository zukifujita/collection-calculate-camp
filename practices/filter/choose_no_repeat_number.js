'use strict';

function choose_no_repeat_number(collection) {
  return collection.filter((element, position) => collection.indexOf(element) == position);
}

module.exports = choose_no_repeat_number;
