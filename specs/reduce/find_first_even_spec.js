'use strict';

var find_first_even = require('../../practices/reduce/find_first_even.js');

describe('find_first_even', function() {

  var collection = [1,11,27,20,4,9,15];

  it('', function() {
    var result = find_first_even(collection);

    expect(result).toEqual(20);
  });
});
