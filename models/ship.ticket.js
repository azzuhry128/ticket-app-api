const mongoose = require("mongoose");

const shipTicketSchema = new mongoose.Schema({
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

const ShipTicketModel = mongoose.model("Ships", shipTicketSchema);

module.exports = ShipTicketModel;
