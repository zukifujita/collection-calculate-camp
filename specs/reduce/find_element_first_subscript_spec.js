'use strict';

var find_element_first_subscript = require('../../practices/reduce/find_element_first_subscript.js');

describe('find_element_first_subscript', function() {

  var collection = [1,11,27,20,4,9,15,4,1,11];
  var element = 4;

  it('', function() {
    var result = find_element_first_subscript(collection, element);

    expect(result).toEqual(4);
  });
});
