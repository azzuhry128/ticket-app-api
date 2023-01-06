const mongoose = require("mongoose");

const ticketSchema = new mongoose.Schema({
  name: String,
  from: String,
  to: String,
  kids: Number,
  adults: Number,
  type: String,
  departure: String,
  phone: String,
});

const ticketModel = mongoose.model("Tickets", ticketSchema);

module.exports = ticketModel;
