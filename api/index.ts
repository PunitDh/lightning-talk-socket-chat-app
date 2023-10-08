import { Server } from "socket.io";

const io = new Server();
const port = 5000;

io.on("connection", (socket) => {
  console.log(`socket ${socket.id} connected`);
  socket.emit("connected", socket.id);
  // console.log(io.sockets.adapter.sids);

  socket.on("send-message", (message) => {
    // an event was received from the client
    // socket.emit('message-received', message);
    io.emit("message-received", message);
  });

  // upon disconnection
  socket.on("disconnect", (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });
});

io.listen(port);
console.log("Server listening on port", port);
