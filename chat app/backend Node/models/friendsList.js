const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const friendListSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  friendsList: [
    {
      email: {
        required: true,
        type: String,
      },
      fName: {
        type: String,
        required: true,
      },
      lName: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("friendsList", friendListSchema);
