// 0-calcul.test.js

const assert = require('assert');
const calculateNumber = require('./0-calcul'); 

describe('calculateNumber function tests', function () {

  it('should round 1 and 3 to 4', function () {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round 1 and 3.7 to 5', function () {
    assert.strictEqual(calculateNumber(1, 3.7), 5); 
  });

  it('should round 1.2 and 3.7 to 5', function () {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round 1.5 and 3.7 to 6', function () {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
