const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const ticketSchema = new Schema({
  event: {
    type: Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Ticket = model("Ticket", ticketSchema);

module.exports = Ticket;
