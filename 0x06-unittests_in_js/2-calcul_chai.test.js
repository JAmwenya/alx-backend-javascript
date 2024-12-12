const { expect } = require("chai");
const calculateNumber = require("./2-calcul_chai");

describe("calculateNumber", function () {
	it("should add 1.4 and 4.5", function () {
		expect(calculateNumber("SUM", 1.4, 4.5)).to.equal(6);
	});

	it("should subtract 1.4 from 4.5", function () {
		expect(calculateNumber("SUBTRACT", 1.4, 4.5)).to.equal(-4);
	});

	it("should divide 1.4 by 4.5", function () {
		expect(calculateNumber("DIVIDE", 1.4, 4.5)).to.equal(0.2);
	});

	it('should return "Error" for division by 0', function () {
		expect(calculateNumber("DIVIDE", 1.4, 0)).to.equal("Error");
	});
});
