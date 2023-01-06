const mongoose = require("mongoose");

const planeTicketSchema = new mongoose.Schema({
  name: String,
  from: String,
  to: String,
  kids: Number,
  adults: Number,
  type: String,
  departure: String,
  phone: String,
});

const planeTicketModel = mongoose.model("Planes", planeTicketSchema);

module.exports = planeTicketModel;
