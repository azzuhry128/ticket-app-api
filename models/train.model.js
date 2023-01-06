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

const TrainTicketModel = mongoose.model("Trains", trainTicketSchema);

module.exports = TrainTicketModel;
