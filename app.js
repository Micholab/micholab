const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("you re on page 1");
  } else if (req.url == "/about") {
    res.end("ýou are on the about page");
  } else {
    res.end("Get the fuck off");
  }
});

server.listen(2500, () => {
  console.log("server has started");
});
