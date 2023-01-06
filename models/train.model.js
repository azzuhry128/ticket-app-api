const mongoose = require("mongoose");

const trainTicketSchema = new mongoose.Schema({
  name: String,
  from: String,
  to: String,
  kids: Number,
  adults: Number,
  type: String,
  departure: String,
  phone: String,
});

const trainTicketModel = mongoose.model("Trains", trainTicketSchema);

module.exports = trainTicketModel;
