const http = require("http");

const routes = {
  "/": () => "🚀 Welcome to My Hello Server",
  "/hello": () => "👋 Hello Developer!",
  "/motivation": () => "🔥 Keep coding. You're doing great!",
  "/time": () => `⏰ ${new Date().toLocaleTimeString()}`,
  "/date": () => `📅 ${new Date().toDateString()}`,
  "/random": () => {
    const msgs = [
      "💡 Think different",
      "⚡ Build something cool",
      "🎯 Stay focused",
      "🚀 Ship your project"
    ];
    return msgs[Math.floor(Math.random() * msgs.length)];
  }
};

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/plain");

  const route = routes[req.url];

  if (route) {
    res.end(route());
  } else {
    res.statusCode = 404;
    res.end("❌ Route not found");
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});