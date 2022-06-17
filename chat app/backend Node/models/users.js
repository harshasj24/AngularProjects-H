const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pNumber: {
    type: Number,
    required: true,
  },
  dP: {
    type: String,
  },
  status: {
    type: String,
  },
});

module.exports = mongoose.model("users", usersSchema);
