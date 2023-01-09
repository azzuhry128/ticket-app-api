const mongoose = require("mongoose");

const trainTicketSchema = new mongoose.Schema({
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

const TrainTicketModel = mongoose.model("Trains", trainTicketSchema);

module.exports = TrainTicketModel;
