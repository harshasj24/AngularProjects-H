const express = require("express");
const router = express.Router();
const auth = require("../middlewares/index");
const userRouter = require("../controller/users");

router.post("/signUp", userRouter.signUp);
router.post("/login", userRouter.login);
router.post("/changePass", userRouter.editPassword);
router.get("/users", userRouter.allUsers);
module.exports = router;
