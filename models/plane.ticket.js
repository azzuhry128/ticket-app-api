const mongoose = require("mongoose");

const planeTicketSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  from: {
    type: String,
  },
  to: {
    type: String,
  },
  kids: {
    type: Number,
  },
  adults: {
    type: Number,
  },
  type: {
    type: String,
  },
  departure: {
    type: String,
  },
  phone: { type: String },
});

const PlaneTicketModel = mongoose.model("Planes", planeTicketSchema);

module.exports = PlaneTicketModel;
