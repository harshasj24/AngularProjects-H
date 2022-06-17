const users = require("../models/users");
const usersFriends = require("../models/friendsList");
const friendsList = require("../models/friendsList");

let addFriends = async (req, res, next) => {
  try {
    let { myEmail, friEmail } = req.body;
    let myData = await usersFriends.findOne({ email: myEmail }).lean();
    let FriData = await users.findOne({ email: friEmail }).lean();
    if (myData && FriData) {
      await usersFriends.updateOne(
        { email: myEmail },
        {
          $push: {
            friendsList: {
              email: FriData.email,
              fName: FriData.fName,
              lName: FriData.lName,
            },
          },
        }
      );
      //   console.log(FriData);
      res.json({
        error: false,
        message: "Sucess",
        data: null,
      });
    } else {
      res.json({
        error: true,
        message: "failed",
        data: null,
      });
    }
  } catch (error) {
    next(error);
  }
};

let showFriends = async (req, res, next) => {
  try {
    let email = req.params.email;
    let frends = await friendsList.findOne({ email }, { friendsList: 1 });
    if (frends) {
      res.json({
        error: false,
        message: "data found",
        data: frends,
      });
    } else {
      res.json({
        error: true,
        message: "not found",
        data: null,
      });
    }
  } catch (error) {}
};
module.exports = { addFriends, showFriends };
