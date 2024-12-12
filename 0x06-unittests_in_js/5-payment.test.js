const { expect } = require("chai");
const sinon = require("sinon");
const { sendPaymentRequestToApi } = require("./5-payment");

describe("sendPaymentRequestToApi", function () {
	let spy;

	beforeEach(() => {
		spy = sinon.spy(console, "log");
	});

	afterEach(() => {
		spy.restore();
	});

	it("should log the total 120 when called with 100 and 20", function () {
		sendPaymentRequestToApi(100, 20);
		expect(spy.calledWith("The total is: 120")).to.be.true;
	});

	it("should log the total 20 when called with 10 and 10", function () {
		sendPaymentRequestToApi(10, 10);
		expect(spy.calledWith("The total is: 20")).to.be.true;
	});
});
