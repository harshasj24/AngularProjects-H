const express = require("express");
const router = express.Router();
const auth = require("../middlewares/index");
const userRouter = require("../controller/users");

router.post("/signUp", userRouter.signUp);
router.post("/login", userRouter.login);
router.post("/changePass", userRouter.editPassword);
router.get("/users", auth.isValidToken, userRouter.allUsers);
router.post("/status", auth.isValidToken, userRouter.userStatus);
module.exports = router;

// ("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmTmFtZSI6IkhhcnNoYSIsImVtYWlsIjoiaGFyc2hhQGdtYWlsLmNvbSIsImxOYW1lIjoiUyBKIiwiaWF0IjoxNjU2NDkyMjExfQ.hjm-26-jaO1YurPwc29z7I5acoleuFBPZbrA4aE-2bo");
