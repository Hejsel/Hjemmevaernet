const http = require("http"),
  port = 2323,
  hostname = "127.0.0.1";
const server = http.createServer();
server.on("request", callback);
server.listen(port, hostname, function () {
  console.log("server is running");
});
function callback(req, res) {
  res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
  res.write("Hello world!");
  res.end();
}
