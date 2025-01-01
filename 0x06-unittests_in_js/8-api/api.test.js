// api.test.js

const { expect } = require("chai");
const supertest = require("supertest");
const request = supertest("http://localhost:7865");

describe("Index page", function () {
	it("should return a status code of 200", function (done) {
		request.get("/").end((err, res) => {
			expect(res.status).to.equal(200);
			done();
		});
	});

	it("should return correct message", function (done) {
		request.get("/").end((err, res) => {
			expect(res.text).to.equal("Welcome to the payment system");
			done();
		});
	});

	it("should return a content-type header of text/html", function (done) {
		request.get("/").end((err, res) => {
			expect(res.headers["content-type"]).to.include("text/html");
			done();
		});
	});
});
