const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

// Handle errors gracefully
server.on('error', (err) => {
  console.error('Server error:', err);
});

// Listen for requests
server.listen(8080, () => {
  console.log('Server listening on port 8080');
});
