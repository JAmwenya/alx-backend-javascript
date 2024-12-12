const request = require("request");
const { expect } = require("chai");

describe("Cart page", function () {
	it("should return a status code of 200 for a valid id", function (done) {
		request.get(
			"http://localhost:7865/cart/12",
			function (error, response, body) {
				expect(response.statusCode).to.equal(200);
				done();
			}
		);
	});

	it("should return a status code of 404 for an invalid id", function (done) {
		request.get(
			"http://localhost:7865/cart/hello",
			function (error, response, body) {
				expect(response.statusCode).to.equal(404);
				done();
			}
		);
	});
});
