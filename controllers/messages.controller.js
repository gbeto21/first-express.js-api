const path = require("path");

function getMessages(req, res) {
  res.sendFile(path.join(__dirname, "..", "public", "panchitoPistolas.jpg"));
  // res.send("<ul><li>Hello Albert!</li></ul>");
}

function postMessages(req, res) {
  console.log("Updating messages.");
}

module.exports = {
  getMessages,
  postMessages,
};
