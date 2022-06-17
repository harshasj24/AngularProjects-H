const friendsRouter = require("../controller/friends");
const express = require("express");
const router = express.Router();

router.put("/addFriends", friendsRouter.addFriends);
router.get("/listFriends/:email", friendsRouter.showFriends);

module.exports = router;
