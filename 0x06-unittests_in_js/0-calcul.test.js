// 0-calcul.test.js

const assert = require("assert");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", function () {
	it("should round and add 1.4 and 4.5", function () {
		assert.strictEqual(calculateNumber(1.4, 4.5), 6);
	});

	it("should round and add 1.2 and 3.7", function () {
		assert.strictEqual(calculateNumber(1.2, 3.7), 5);
	});

	it("should round and add 1.5 and 3.7", function () {
		assert.strictEqual(calculateNumber(1.5, 3.7), 6);
	});
});
