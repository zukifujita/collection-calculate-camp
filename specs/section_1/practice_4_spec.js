'use strict';

var collect_same_elements = require("../../practices/section_1/practice_4/practice.js");

describe('practice-1-4', function() {

  var collection_a = [
    {key: "a"}, {key: "e"}, {key: "h"}, {key: "t"}, {key: "f"}, {key: "c"}, {key: "g"}, {key: "b"}, {key: "d"}
  ];
  var collection_b = {value: ["a", "d", "e", "f"]};

  it("", function() {
    var result = collect_same_elements(collection_a, collection_b);

    expect(result).toEqual(["a", "e", "f", "d"]);
  });
});
