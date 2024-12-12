const { expect } = require("chai");
const { getPaymentTokenFromAPI } = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
	it("should return a successful response when success is true", function (done) {
		getPaymentTokenFromAPI(true)
			.then((response) => {
				expect(response).to.deep.equal({
					data: "Successful response from the API",
				});
				done();
			})
			.catch(done);
	});

	it("should return an error when success is false", function (done) {
		getPaymentTokenFromAPI(false).catch((error) => {
			expect(error).to.equal("Error");
			done();
		});
	});
});
