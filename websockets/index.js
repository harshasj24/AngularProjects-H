const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, { cors: { origin: "*" } });
let u = [];
const uData = [
  { senderId: 123, reciverId: 444, message: "this.messageFiled" },
  { senderId: 444, reciverId: 123, message: "this.messageFiled" },
];
let activeId = {};
io.on("connection", (socket) => {
  socket.on("check", (data) => {
    // socket.emit("check", data);
    io.sockets.emit("check", data);
  });

  socket.on("connected", (data) => {
    activeId[data] = socket.id;
    console.log(activeId);
  });
  console.log(activeId);
  socket.emit("message", uData);
  socket.on("message", (data) => {
    console.log(activeId[data.senderId]);
    uData.push(data);
    io.sockets.emit("message", uData);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
