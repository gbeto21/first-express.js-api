const {
  getMessages,
  postMessages,
} = require("./controllers/messages.controller");
const {
  postFriends,
  getFriends,
  getFriend,
} = require("./controllers/friends.controller");

const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.post("/friends", postFriends);
app.get("/friends", getFriends);
app.get("/friends/:id", getFriend);

app.get("/messages", getMessages);
app.post("/messages", postMessages);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
