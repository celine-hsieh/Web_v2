const http = require('http');
const fs = require('fs');

const port = 8080;

const server = http.createServer((req, res) => {
  fs.readFile('./squit_game/index.html', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
