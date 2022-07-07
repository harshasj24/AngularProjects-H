const jwt = require("jsonwebtoken");

const isValidToken = (req, res, next) => {
  if (!req.headers["authorization"]) {
    return res.status(404).json({
      error: true,
      message: "Authorization key is required",
    });
  }
  const token = req.headers["authorization"].split(" ")[1];
  try {
    const payload = jwt.verify(token, process.env.SCRECT_KEY);
    return next();
  } catch (error) {
    console.log(token);
    return res.status(401).json({
      error: true,
      message: "Token not valid",
    });
  }
};

module.exports = { isValidToken };
