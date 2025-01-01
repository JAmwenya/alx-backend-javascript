// 6-payment_token.test.js

const assert = require("assert");
const getPaymentTokenFromAPI = require("./6-payment_token");

describe("getPaymentTokenFromAPI", function () {
	it("should return a successful response when success is true", function (done) {
		getPaymentTokenFromAPI(true)
			.then((response) => {
				assert.deepStrictEqual(response, {
					data: "Successful response from the API",
				});
				done();
			})
			.catch(done); 
	});

	it("should not return anything when success is false", function (done) {
		getPaymentTokenFromAPI(false)
			.then((response) => {
				// Ensure that no response is received
				assert.strictEqual(response, undefined);
				done();
			})
			.catch(done);
	});
});
