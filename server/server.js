const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// routes
const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");

// load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());

// connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("connected to MongoDB Atlas"))
  .catch((err) => console.log("MongoDB connection error: ", err));

// routes - for testing
app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);

// app.use("/", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
