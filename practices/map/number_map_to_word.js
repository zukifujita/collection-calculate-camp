'use strict';
var number_map_to_word = function(collection){
  return collection.map(element => element + 96)
  .map(toChar => String.fromCharCode(toChar))
};

module.exports = number_map_to_word;
