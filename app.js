const http = require("http");
const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  console.log(req.method);
});

server.listen(port, hostname, () => {
  console.log(`listening on port ${port}`);
});
