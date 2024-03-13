//import library
const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Transflower Store</h1>');
});
server.listen(7000, () => {
  console.log(`Server running at 7000`);
});