const request = require("request");
const { expect } = require("chai");

describe("API Routes", function () {
  it("should return the correct payment methods", function (done) {
    request.get(
      "http://localhost:7865/available_payments",
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(JSON.parse(body)).to.deep.equal({
          payment_methods: { credit_cards: true, paypal: false },
        });
        done();
      }
    );
  });

  it("should return a welcome message for login", function (done) {
    const options = {
      url: "http://localhost:7865/login",
      method: "POST",
      json: { userName: "Betty" },
    };
    request(options, function (error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal("Welcome Betty");
      done();
    });
  });

  it("should return 'Payment methods for cart 123' when given a valid cart ID", function (done) {
    request.get(
      "http://localhost:7865/cart/123",
      function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal("Payment methods for cart 123");
        done();
      }
    );
  });

  it("should return 'id must be a number' when cart ID is not a number", function (done) {
    request.get(
      "http://localhost:7865/cart/abc",
      function (error, response, body) {
        expect(response.statusCode).to.equal(400);
        expect(body).to.equal("id must be a number");
        done();
      }
    );
  });
});
