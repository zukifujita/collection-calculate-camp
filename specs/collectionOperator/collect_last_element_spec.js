'use strict';

var collect_last_element = require('../../practices/collectionOperator/collect_last_element.js');

describe('collect_last_element', function () {

  var collection = [1, 2, 3, 4, 5];

  it('collect_last_element', function() {

    var result = collect_last_element(collection);
    expect(result).toEqual(5);
  });
});


