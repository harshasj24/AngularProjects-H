const express = require("express");
const app = express();
const server = require("http").createServer(app);
const { Server } = require("socket.io");
const chatSchema = require("./models/chats");
const usersSchema = require("./models/users");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

io.use((socket, next) => {
  if (socket.handshake.query && socket.handshake.query.token) {
    try {
      jwt.verify(socket.handshake.query.token, process.env.SCRECT_KEY);
      next();
    } catch (error) {
      next(new Error("Authenticsation required"));
    }
  } else {
    next(new Error("key required"));
  }
});
let connectedUsers = [];
io.on("connection", (socket) => {
  socket.on("connected", async (data) => {
    connectedUsers[data] = socket.id;
    await usersSchema.updateOne(
      { email: data },
      { $set: { status: "online" } }
    );
  });

  socket.on("get message", async (data) => {
    let chats = await chatSchema
      .find({
        $or: [{ fromEmail: { $eq: data } }, { toEmail: { $eq: data } }],
      })
      .lean();
    socket.emit("get message", chats);
  });

  socket.on("send message", async (data) => {
    console.log(data);

    let { toEmail, fromEmail, message } = data;
    console.log(toEmail);
    io.to(connectedUsers[toEmail]).emit("get message", [data]);
    await chatSchema.insertMany([
      {
        fromEmail,
        toEmail,
        message,
        time: new Date(),
      },
    ]);
  });
  socket.on("status", (data) => {
    console.log(data);
    if (data.isTyping) {
      return io.to(connectedUsers[data.toEmail]).emit("status", true);
    }
    return io.to(connectedUsers[data.toEmail]).emit("status", false);
  });
  socket.on("disconnect", async (data) => {
    socket.on("disconnection", (daa) => {
      // console.log(daa, "  l");
    });
    // console.log(data);
    await usersSchema.updateOne(
      { email: data },
      { $set: { status: "offline" } }
    );
  });
});

module.exports = { app, server };
