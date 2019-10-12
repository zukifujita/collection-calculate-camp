'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.reduce((a, b) => collection_b.includes(b));
}

module.exports = compare_collections;


