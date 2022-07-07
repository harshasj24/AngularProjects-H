const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  fromEmail: { type: String },
  toEmail: { type: String },
  message: { type: String },
  time: { type: String },
});

module.exports = mongoose.model("chat", chatSchema);
