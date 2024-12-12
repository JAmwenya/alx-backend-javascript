// 8-api/api.test.js

const request = require("request");
const { expect } = require("chai");
const http = require("http");

describe("Index page", () => {
	let server;

	// Start the server before running the tests
	before((done) => {
		// Import the express app from api.js and start the server
		server = require("./api.js");
		done();
	});

	// Close the server after the tests complete
	after((done) => {
		if (server) {
			server.close(() => {
				done(); 
			});
		} else {
			done();
		}
	});

	it("should return status code 200", (done) => {
		request("http://localhost:7865", (error, response, body) => {
			expect(response.statusCode).to.equal(200); 
			done();
		});
	});

	it('should return "Welcome to the payment system"', (done) => {
		request("http://localhost:7865", (error, response, body) => {
			expect(body).to.equal("Welcome to the payment system");
			done();
		});
	});
});

describe("GET /test", () => {
	it("should return Welcome to the payment system", async () => {
		const response = await request(app).get("/test");
		expect(response.status).toBe(200);
		expect(response.text).toBe("Welcome to the payment system");
	});
});

describe("GET /", () => {
	it("should return Hello", async () => {
		const response = await request(app).get("/");
		expect(response.status).toBe(200);
		expect(response.text).toBe("Hello");
	});
});
