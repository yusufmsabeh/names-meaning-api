const http = require("http");

const HOST = "localhost";
const PORT = 3000;

const server = http.createServer();

server.listen(PORT, HOST, () => {
  console.log(`Server is running on http://${HOST}:${PORT}`);
});
