const mongoose = require("mongoose");

const shipTicketSchema = new mongoose.Schema({
  name: String,
  from: String,
  to: String,
  kids: Number,
  adults: Number,
  type: String,
  departure: String,
  phone: String,
});

const ShipTicketModel = mongoose.model("Ships", shipTicketSchema);

module.exports = ShipTicketModel;
