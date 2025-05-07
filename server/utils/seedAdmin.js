const mongoose = require("mongoose");
const dotenv = require("dotenv");

const User = require("../models/User");

// load environment variables
dotenv.config();

// define admin User
const user = new User({
  name: "admin",
  email: "admin@admin.com",
  password: "admin@2025",
  role: "admin",
  isVerified: true,
});

const createAdmin = async () => {
  try {
    // connect to MongoDB
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB for seeding");

    // check for existing admin User
    const existingUser = await User.findOne({
      email: "admin@admin.com",
      role: "admin",
    });
    if (existingUser) {
      console.log("Admin already exist");
    } else {
      const newAdmin = await user.save();
      console.log(newAdmin);
    }
  } catch (error) {
    console.error("seeding error:", error);
  } finally {
    await mongoose.disconnect();
  }
};

module.exports = createAdmin;
