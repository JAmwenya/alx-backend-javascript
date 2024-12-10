const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello ALX!');
});

app.get('/students', (req, res) => {
    const database = process.argv[2];
    countStudents(database)
        .then(() => {
            res.write('This is the list of our students\n');
            res.end();
        })
        .catch((err) => {
            res.status(500).send(err.message);
        });
});

app.listen(1245, () => {
    console.log('Express server is running on port 1245');
});

module.exports = app;
