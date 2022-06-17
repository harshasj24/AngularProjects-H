const chatRouter = require("../controller/chats");
const express = require("express");
const router = express.Router();
const auth = require("../middlewares/index");

router.post("/chats", chatRouter.message);
router.get("/messages", chatRouter.displayMessage);

module.exports = router;
