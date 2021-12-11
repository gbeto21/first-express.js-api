const express = require("express");
const {
  postFriends,
  getFriends,
  getFriend,
} = require("../controllers/friends.controller");
const friendsRouter = express.Router();

friendsRouter.use((req, res, next) => {
  console.log("IP:", req.ip);
  next();
});
friendsRouter.post("/", postFriends);
friendsRouter.get("/", getFriends);
friendsRouter.get("/:id", getFriend);

module.exports = friendsRouter;
