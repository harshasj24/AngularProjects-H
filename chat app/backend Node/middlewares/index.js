const jwt = require("jsonwebtoken");
SCRECT_KEY = "123$%^&";
let isLogin = (req, res, next) => {
  if (req.headers["authorization"]) {
    const token = req.headers["authorization"].split(" ")[1];
    const payload = jwt.verify(token, SCRECT_KEY);
    console.log(payload);
    if (req.headers["authorization"].split(" ")[1]) {
      next();
    } else {
      console.log("done");
      res.json({
        error: true,
        message: "invalid user",
        data: null,
      });
    }
  } else {
    res.json({
      error: true,
      message: "Invalid Authorizaton key",
      data: null,
    });
  }
};

module.exports = { isLogin };
