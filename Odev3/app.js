const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Merhaba, Docker!\n');
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Sunucu ${PORT} portunda çalişiyor`);
});
