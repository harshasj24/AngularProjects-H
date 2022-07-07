const express = require("express");

const { app,server } = require("./sockets");

const mongoose = require("mongoose");

const userRouter = require("./routes/users");
const chatRouter = require("./routes/chats");
const cors = require("cors");
const friendRouter = require("./routes/friends");
const dbUrl =
  "mongodb+srv://Harsha_sj:harsha@cluster0.3ba50.mongodb.net/chatApp?retryWrites=true&w=majority";
// database connection
mongoose.connect(
  dbUrl,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("database connected sucessfully");
    }
  }
);

// middlewares
app.use(cors());
// body parser middlewares

app.use(express.urlencoded({ extended: true }));
// json level middleware
app.use(express.json());
// router level middleware
app.use("/users", userRouter);
app.use("/chat", chatRouter);
app.use("/friends", friendRouter);
// module.exports = { io };
server.listen(4500, () => {
  console.log("server is listining on port", 4500);
});
