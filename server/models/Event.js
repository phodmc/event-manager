const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const eventSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, default: "A generic event" },
    date: { type: Date, required: true },
    location: { type: String },
    capacity: { type: Number, default: 0 },
    ticketPrice: { type: Number, default: 0 },
    ticketsSold: { type: Number, default: 0 },
    category: {
      type: String,
      enum: ["music", "conference", "sports", "other"],
    },
    status: {
      type: String,
      enum: ["active", "completed", "canceled"],
      default: "active",
    },
    image: { type: String }, // Store image URL for event banner
  },
  { timestamps: true },
);

const Event = model("Event", eventSchema);

module.exports = Event;
