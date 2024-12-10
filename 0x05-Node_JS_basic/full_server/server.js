const express = require('express');
const router = require('./routes/index');

const app = express();
const database = process.argv[2];

app.locals.database = database;
app.use('/', router);

app.listen(1245, () => {
  console.log('Full server is running on port 1245');
});

module.exports = app;
