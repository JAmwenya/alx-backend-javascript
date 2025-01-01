// 3-payment.test.js

const assert = require("assert");
const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi", function () {
	it("should call calculateNumber and return the correct total", function () {
		// Create a spy on the calculateNumber method
		const spy = sinon.spy(Utils, "calculateNumber");

		// Call the sendPaymentRequestToApi function
		sendPaymentRequestToApi(100, 20);

		// Validate that calculateNumber was called with the correct arguments
		assert(spy.calledWith("SUM", 100, 20));

		assert.strictEqual(spy.returnValues[0], 120);

		// Restore the spy
		spy.restore();
	});
});
