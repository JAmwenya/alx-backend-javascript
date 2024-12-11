const http = require('http');


const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello ALX!\n');
  } else if (req.url === '/test') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Test Endpoint\n');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found\n');
  }
});


app.listen(1245, () => {
  console.log('Server running at http://localhost:1245/');
});


module.exports = app;
