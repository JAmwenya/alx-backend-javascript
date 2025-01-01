// 1-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./1-calcul'); // Import the function from 1-calcul.js

describe('calculateNumber function tests', function () {

  // Test for SUM operation
  describe('SUM operation', function () {
    it('should round and add 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);  // 1.4 rounds to 1, 4.5 rounds to 5 -> 1 + 5 = 6
    });

    it('should round and add 1.2 and 3.7', function () {
      assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);  // 1 + 4 = 5
    });
  });

  // Test for SUBTRACT operation
  describe('SUBTRACT operation', function () {
    it('should round and subtract 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);  // 1 - 5 = -4
    });

    it('should round and subtract 1.2 and 3.7', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.2, 3.7), -3);  // 1 - 4 = -3
    });
  });

  // Test for DIVIDE operation
  describe('DIVIDE operation', function () {
    it('should round and divide 1.4 by 4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);  // 1 / 5 = 0.2
    });

    it('should round and divide 1.2 by 3.7', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.2, 3.7), 0.3);  // 1 / 4 = 0.25 (rounded)
    });

    it('should return "Error" when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');  // Dividing by 0 should return "Error"
    });
  });

});
