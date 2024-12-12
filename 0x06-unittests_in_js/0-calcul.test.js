// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe("Test suite for calculateNumber function", function () {

  // Test for first number rounded using Math.ceil()
  it("should round and add the first number using Math.ceil()", function () {
    assert.strictEqual(calculateNumber(1.4, 4.5), 7);
    assert.strictEqual(calculateNumber(2.1, 3.3), 6);
    assert.strictEqual(calculateNumber(0.7, 2.2), 3);
  });

  // Test for second number rounded using Math.round()
  it("should round and add the second number using Math.round()", function () {
    assert.strictEqual(calculateNumber(1.4, 4.5), 7);
    assert.strictEqual(calculateNumber(2.1, 3.7), 7);
    assert.strictEqual(calculateNumber(5.4, 2.2), 8);
  });

  // Test for both numbers rounded
  it("should round and add both numbers", function () {
    assert.strictEqual(calculateNumber(1.4, 4.5), 7);
    assert.strictEqual(calculateNumber(2.1, 3.7), 7);
    assert.strictEqual(calculateNumber(5.5, 2.2), 8);
  });
});
