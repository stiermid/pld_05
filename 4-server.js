const http = require('http');

const PORT = 1245;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('BiletAZ API işləyir!');
});

server.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} unvaninda isleyir...`);
});
