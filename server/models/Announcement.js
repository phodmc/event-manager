const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const AnnouncementSchema = new Schema(
  {
    title: String,
    content: String,
    date: Date,
    creator: { type: Schema.Types.ObjecId, ref: "User" },
    event: { type: Schema.Types.ObjecId, ref: "Event" },
  },
  { timestamps: true },
);
