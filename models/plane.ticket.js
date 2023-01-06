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

const PlaneTicketModel = mongoose.model("Planes", planeTicketSchema);

module.exports = PlaneTicketModel;
