import { Server, Socket } from "socket.io";
const port = Number(process.env.PORT) || 6001;
const io = new Server();

// const MESSAGES = [];

io.on("connection", (socket: Socket) => {
  console.log(`socket ${socket.id} connected`);
  socket.emit("connected", "bar");

  socket.on("send-message", (message) => {
    console.log(message);
    // MESSAGES.push(message);
    socket.broadcast.emit("message-received", message);
  });

  socket.on("disconnect", (reason) => {
    console.log(`socket ${socket.id} disconnected due to ${reason}`);
  });
});

io.listen(port);
console.log(`Server listening on port ${port}`);
