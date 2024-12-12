const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Welcome to the payment system");
});

app.get("/available_payments", (req, res) => {
	res.json({ payment_methods: { credit_cards: true, paypal: false } });
});

app.get("/cart/:id", (req, res) => {
  const { id } = req.params;
  // Ensure that id is a valid number
  if (isNaN(id)) {
    return res.status(400).send("id must be a number");
  }
  res.send(`Payment methods for cart ${id}`);
});

app.post("/login", (req, res) => {
	const { userName } = req.body;
	res.send(`Welcome ${userName}`);
});

app.listen(7865, () => {
	console.log("API available on localhost port 7865");
});
