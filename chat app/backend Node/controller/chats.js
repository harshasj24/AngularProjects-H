const chatSchema = require("..//models/chats");
const usersSchema = require("../models/users");

const message = async (req, res, next) => {
  let { message, email, toEmail } = req.body;
  try {
    let fromEmailExists = await usersSchema.findOne({ email }).lean();
    let toEmailExists = await usersSchema.findOne({ toEmail }).lean();
    if (fromEmailExists && toEmailExists) {
      // console.log(userChatsDta);

      await chatSchema.insertMany([
        {
          toEmail: toEmail,
          fromEmail: email,
          message: message,
        },
      ]);

      res.json({
        error: false,
        message: "chat done",
        data: null,
      });
    } else {
      res.json({
        error: true,
        message: "no data found",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

const displayMessage = async (req, res, next) => {
  // let { user1Email, user2Email } = req.body;
  try {
    let usersdata = await chatSchema.find().lean();
    res.json({
      error: false,
      message: "data found",
      data: usersdata,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { message, displayMessage };
