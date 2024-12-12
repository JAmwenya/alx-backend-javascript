const assert = require("assert");
const calculateNumber = require("./1-calcul");

describe("calculateNumber", function () {
	it("should add 1.4 and 4.5", function () {
		assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
	});

	it("should subtract 1.4 from 4.5", function () {
		assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
	});

	it("should divide 1.4 by 4.5", function () {
		assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
	});

	it('should return "Error" for division by 0', function () {
		assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
	});
});
