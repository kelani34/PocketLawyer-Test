const http = require("http");
const server = http.createServer();
const io = require("socket.io")(server);
io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });

  socket.on("message", (message) => {
    console.log("message: " + message);
    io.emit("message", message);
  });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
