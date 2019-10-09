'use strict';

var collect_same_elements = require("../../practices/section_1/practice_3/practice.js");

describe('practice-1-3', function() {

  var collection_a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
  var collection_b = {value: ["a", "d", "e", "f"]};

  it("", function() {
    var result = collect_same_elements(collection_a, collection_b);

    expect(result).toEqual(["a", "e", "f", "d"]);
  });
});
