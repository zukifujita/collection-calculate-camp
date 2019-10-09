'use strict';

var collect_min_number = require('../../practices/reduce/collect_min_number.js');

describe('collect_min_number', function () {

  var collection = [1, 8, 9, 21, 5];

  it('', function() {

    var result = collect_min_number(collection);
    expect(result).toEqual(1);
  });
});
