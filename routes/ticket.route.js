const express = require("express");
const router = express.Router();
const ticket = require("../models/ticket.model");

router.get("https://ticket-app-api.vercel.app/", (req, res) => {
  res.send("im main route, please dont send request to me, wont reply anyway");
});

router.get("/ticket", (req, res) => {
  res.send(
    "welcome to ticket route, pls send POST request to input any ticket data"
  );
});

router.post("/ticket", (req, res) => {
  const { name, from, to, kids, adults, type, departure, phone } = req.body;

  const ticketData = new ticket({
    name: name,
    from: from,
    to: to,
    kids: kids,
    adults: adults,
    type: type,
    departure: departure,
    phone: phone,
  });

  ticketData.save();

  return res.send({ status: 200, data: req.body });
});

module.exports = router;
