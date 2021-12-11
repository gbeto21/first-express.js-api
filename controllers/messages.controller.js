const path = require("path");

function getMessages(req, res) {
  // res.sendFile(
  //   path.join(__dirname, "..", "public", "images", "panchitoPistolas.jpg")
  // );
  res.render("messages", {
    title: "Messages to my friends!",
    friend: "Elon Musk",
  });
}

function postMessages(req, res) {
  console.log("Updating messages.");
}

module.exports = {
  getMessages,
  postMessages,
};
