const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  toEmail: { type: String },
  fromEmail: { type: String },
  message: { type: String },
});

module.exports = mongoose.model("chat", chatSchema);
