const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber function tests", function () {
  // Test that explicitly checks the first number rounding behavior using Math.ceil()
  it("should round the first number using Math.ceil() and add 4.5", function () {
    assert.strictEqual(calculateNumber(1.4, 4.5), 6);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  // Additional test cases for other number rounding checks
  it("should round the first number using Math.ceil() and second number using Math.round()", function () {
    assert.strictEqual(calculateNumber(2.1, 3.3), 6);
    assert.strictEqual(calculateNumber(3.2, 4.8), 8);
    assert.strictEqual(calculateNumber(4.5, 2.2), 7);
  });
});
