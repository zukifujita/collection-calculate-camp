'use strict';
var rank_asc = function(collection){
  return collection.map(element => element).sort().reverse();
};

module.exports = rank_asc;
