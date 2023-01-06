const express = require("express");
const router = express.Router();

const ticketPost = require("../controllers/ticket.controller");

router.get("/", (req, res) => {
  res.send("im main route, please dont send request to me, wont reply anyway");
});

router.get("/ticket", (req, res) => {
  res.send(
    "welcome to ticket route, pls send POST request to input any ticket data"
  );
});

router.post("/ticket", (req, res) => {
  ticketPost;
});

module.exports = router;
