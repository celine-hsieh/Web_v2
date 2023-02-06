const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  fs.readFile('./squit_game/models/index.html', (err, data) => {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
});

// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });

server.listen(port, () => { console.log(`Server listening on port ${port}`); });
//module.exports = app