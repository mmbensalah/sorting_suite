const assert = require('chai').assert;
const bubbleSort = require('../bubble_sort');

describe("Bubble Sort", function(){
  it("can sort an array", function() {
    var array = [23, 2, 0, 8, 43, 87, 45, 3, 34];
    var sorted_array = [0, 2, 3, 8, 23, 34, 43, 45, 87];

    actual = bubbleSort(array);
    assert.deepEqual(sorted_array, actual);
  });
});
