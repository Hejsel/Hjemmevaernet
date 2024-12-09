const http = require("http"),
  port = 2323,
  hostname = "127.0.0.1";
const fs = requrie("fs");
const path = require("path");
const server = http.createServer();
server.on("request", callback);
server.listen(port, hostname, function () {
  console.log("server is running");
});
function callback(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  let filepath;
  if (req.url === "/") filePath = "./index.html";
  else {
    filePath = `./src/pages${req.url}.html`;
  }
  console.log(filepath);
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
  };
  const contentType = mimeTypes[extname] || "application/octet-stream";
}
