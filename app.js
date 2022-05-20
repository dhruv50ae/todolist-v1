const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.get("/", (req, res) => {
  let today = new Date();
  let currentDay = today.getDate();

  if (currentDay === 6 || currentDay === 0) {
    res.send("<h1>Yay, it's the weekends!</h1>");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(3000, () => {
  console.log("The server has started");
});
