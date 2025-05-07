const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require("../models/User");

// load environment variables
dotenv.config();

// connect to mongo database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch((err) => console.log(err));

// define admin User
const user = new User({
  name: "admin",
  email: "admin@admin.com",
  password: "admin@2025",
  role: "admin",
  isVerified: true,
});

const createAdmin = async () => {
  // check for existing admin User
  try {
    const existingUser = await User.findOne({
      email: "admin@admin.com",
      role: "admin",
    });
    if (existingUser) {
      console.log("Admin already exist");
    } else {
      await user.save();
      console.log(user);
    }
  } catch (error) {
    console.error("seeding error:", error);
  } finally {
    await mongoose.disconnect();
  }
};

module.exports = createAdmin;
