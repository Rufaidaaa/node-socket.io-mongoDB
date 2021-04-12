const http = require("http");
const fs = require("fs");
const port = 3000;
const hostname = "localhost";

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  fs.readFile("./view/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`listening on port ${port}`);
});
