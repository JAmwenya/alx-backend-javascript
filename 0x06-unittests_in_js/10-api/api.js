const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware to parse JSON
app.use(bodyParser.json());

// Route for testing if the API is working (GET /)
app.get('/', function (request, response) {
  response.send('Welcome to the payment system');
});

// Route for cart ID (GET /cart/:id) - ensures cartId is a valid number
app.get('/cart/:id', function (request, response) {
  const cartId = request.params.id;

  // Ensure that cartId is a valid number
  if (isNaN(cartId)) {
    return response.status(400).send('id not a number');
  }

  response.send(`Payment methods for cart ${cartId}`);
});

// Route for available payments (GET /available_payments)
app.get('/available_payments', function (request, response) {
  response.json({
    payment_methods: {
      credit_cards: true,
      paypal: false,
    }
  });
});

// Route for login (POST /login)
app.post('/login', function (request, response) {
  const { userName } = request.body;
  if (!userName) {
    return response.status(400).send('userName is required');
  }
  response.send(`Welcome ${userName}`);
});

// Start the server
const server = app.listen(7865, function () {
  console.log('API available on localhost port 7865');
});

// Shutdown server after tests
function closeServer() {
  server.close(() => {
    console.log('Server closed');
  });
}

module.exports = { closeServer };
