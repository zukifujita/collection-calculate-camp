'use strict';

var create_updated_collection = require("../../practices/section_3/practice_2/practice.js");

describe('practice-3-2', function() {

  var collection_a = [
    {key: "a", count: 3},
    {key: "e", count: 7},
    {key: "h", count: 11},
    {key: "t", count: 20},
    {key: "f", count: 9},
    {key: "c", count: 8},
    {key: "g", count: 7},
    {key: "b", count: 6},
    {key: "d", count: 5}
  ];

  var object_b = {value: ["a", "d", "e", "f"]};

  it("", function() {
    var result = create_updated_collection(collection_a, object_b);

    expect(result).toEqual([
      {key: "a", count: 2},
      {key: "e", count: 5},
      {key: "h", count: 11},
      {key: "t", count: 20},
      {key: "f", count: 6},
      {key: "c", count: 8},
      {key: "g", count: 7},
      {key: "b", count: 6},
      {key: "d", count: 4}
    ]);
  });
});
