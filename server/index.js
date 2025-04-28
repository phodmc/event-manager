const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// models
const Event = require("./models/Event");
const User = require("./models/User");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to MongoDB Atlas"))
  .catch((err) => console.log("MongoDB connection error: ", err));

app.use(cors());
app.use(express.json());

const musicEvent = new Event({
  name: "Open Mic Festival",
  date: Date.now(),
  location: "Independence Stadium, Bakau",
  ticketsAvailable: 1000,
  ticketPrice: 200.0,
  category: "music",
});

app.get("/", (req, res) => {
  res.send("Hello from the backend!");
});

app.get("/api", (req, res) => {
  res.json({
    name: "Foday",
    addr: "Bakau",
    books: [
      {
        author: "Michael Connelly",
        title: "Angels Flight",
        genre: "Mystery",
        price: "4.99",
      },
      {
        author: "Agatha Christie",
        title: "Death on the Nile",
        genre: "Thriller",
        price: "$6.99",
      },
      {
        author: "Michael Connelly",
        title: "Brass Verdict",
        genre: "Crime",
        price: "$9.99",
      },
      {
        author: "Agatha Christie",
        title: "Death on the Nile",
        genre: "Thriller",
        price: "$6.99",
      },
    ],
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
