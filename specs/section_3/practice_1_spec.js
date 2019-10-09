'use strict';

var create_updated_collection = require("../../practices/section_3/practice_1/practice.js");

describe('practice-3-1', function() {

  var collection_a = [
    {key: "a", count: 2},
    {key: "e", count: 2},
    {key: "h", count: 2},
    {key: "t", count: 2},
    {key: "f", count: 2},
    {key: "c", count: 2},
    {key: "g", count: 2},
    {key: "b", count: 2},
    {key: "d", count: 2}
  ];

  var object_b = {value: ["a", "d", "e", "f"]};

  it("", function() {
    var result = create_updated_collection(collection_a, object_b);

    expect(result).toEqual([
      {key: "a", count: 1},
      {key: "e", count: 1},
      {key: "h", count: 2},
      {key: "t", count: 2},
      {key: "f", count: 1},
      {key: "c", count: 2},
      {key: "g", count: 2},
      {key: "b", count: 2},
      {key: "d", count: 1}
    ]);
  });
});
