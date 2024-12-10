const http = require("http"),
  port = 2323,
  hostname = "127.0.0.1";
const fs = require("fs");
const path = require("path");

const server = http.createServer();
server.on("request", callback);
server.listen(port, hostname, function () {
  console.log("server is running");
});

function callback(req, res) {
  // Mime types,
  const mimeTypes = {
    ".html": "text/html",
    ".js": "text/javascript",
    ".css": "text/css",
    ".json": "application/json",
    ".png": "image/png",
    ".jpg": "image/jpg",
    ".gif": "image/gif",
    ".svg": "image/svg+xml",
    ".pdf": "application/pdf",
  };

  // Standard filsti
  let filePath = "." + req.url;

  // Hvis root-anmodning (/) skal servere index.html
  if (filePath === "./") {
    filePath = "./index.html";
  }

  // Find filens udvidelse (fx .html)
  const extname = path.extname(filePath).toLowerCase();

  // Find Content-Type fra MIME-typen
  const contentType = mimeTypes[extname] || "application/octet-stream";

  console.log("Request received:", req.url);
  console.log("Serving file:", filePath);
  console.log("Content-Type:", contentType);

  // Læs filen
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === "ENOENT") {
        // Hvis filen ikke findes, returner 404
        console.error("File not found:", filePath);
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>404 - File Not Found</h1>", "utf-8");
      } else {
        // Hvis der opstår andre fejl
        console.error("Server error:", err);
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Returner filen med korrekt Content-Type
      res.writeHead(200, { "Content-Type": contentType });
      res.end(content, "utf-8");
    }
  });
}
