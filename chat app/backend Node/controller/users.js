const users = require("../models/users");
const friendsList = require("../models/friendsList");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
let signUp = async (req, res, next) => {
  let { fName, lName, email, password, pNumber, dp, status } = req.body;
  try {
    let emailExists = await users.findOne({ email }).lean();
    if (emailExists) {
      res.json({
        error: true,
        message: "Email already exists",
        data: null,
      });
    } else {
      let saltRounds = 10;
      let salt = await bcrypt.genSalt(saltRounds);
      let hashPassword = await bcrypt.hash(password, salt);
      await users.insertMany([
        {
          fName,
          lName,
          email,
          password: hashPassword,
          pNumber,
          dp,
          status,
        },
      ]);
      await friendsList.insertMany([
        {
          email,
        },
      ]);
      res.json({
        error: false,
        message: "Scuess SignUp",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

let login = async (req, res, next) => {
  let { email, pNumber, password } = req.body;
  try {
    let userdata = await users.findOne({ email });
    if (userdata) {
      let { _id, fName, lName, email } = userdata;
      let passMatch = await bcrypt.compare(password, userdata.password);

      if (passMatch) {
        let payload = {
          fName,
          email,
          lName,
        };
        let token = await jwt.sign(payload, process.env.SCRECT_KEY);
        res.json({
          error: false,
          message: "Login scucessfull",
          data: {
            token,
            email,
          },
        });
      } else {
        res.json({
          error: true,
          message: "password Dosent match",
          data: null,
        });
      }
    } else {
      res.json({
        error: true,
        message: "Email dosent exixts",
        data: null,
      });
    }
  } catch (err) {
    next(err);
  }
};

let allUsers = async (req, res, next) => {
  try {
    const usersData = await users.find({}, { password: 0 }).lean();

    res.json({
      error: false,
      message: "data fetched sucessfully",
      data: usersData,
    });
  } catch (err) {
    next(err);
  }
};
const editPassword = async (req, res, next) => {
  let { email, password } = req.body;
  try {
    let emailExists = await users.findOne({ email });
    if (emailExists) {
      console.log(emailExists);
      let saltRounds = 10;
      let salt = await bcrypt.genSalt(saltRounds);
      let hashPassword = await bcrypt.hash(password, salt);
      await users.updateOne({ email }, { password: hashPassword });
      res.json({
        error: false,
        message: "update success",
      });
    } else {
      res.json({
        error: true,
        message: "no user",
      });
    }
  } catch (error) {}
};
// console.log(usersData);

const userStatus = async (req, res, next) => {
  let { email } = req.body;
  try {
    await users.updateOne({ email }, { status: "online" });
    res.json({
      message: "active ",
    });
  } catch (error) {
    next(error);
  }
};
module.exports = { signUp, login, allUsers, editPassword, userStatus };
