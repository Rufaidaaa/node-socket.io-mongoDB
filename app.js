const http = require("http");
const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  res.write("<h1>hello</h1>");
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`listening on port ${port}`);
});
