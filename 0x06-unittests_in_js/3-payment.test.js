const { expect } = require("chai");
const sinon = require("sinon");
const { sendPaymentRequestToApi } = require("./3-payment");
const { calculateNumber } = require("./utils");

describe("sendPaymentRequestToApi", function () {
	it("should call calculateNumber with SUM", function () {
		const spy = sinon.spy(calculateNumber);
		sendPaymentRequestToApi(100, 20);
		expect(spy.calledWith("SUM", 100, 20)).to.be.true;
	});
});
