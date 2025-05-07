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
    if (mongoose.connection.readyState !== 1) {
      console.log("Database not connected. Seeding will not run");
      return;
    }

    console.log("Seeding database...");

    // check for existing admin User
    const existingUser = await User.findOne({
      email: "admin@admin.com",
      role: "admin",
    });
    if (existingUser) {
      console.log("Admin already exist");
    } else {
      const newAdmin = await user.save();
      console.log("Admin user created successfully: ", newAdmin);
    }
  } catch (error) {
    console.error("seeding error:", error);
  }
};

module.exports = createAdmin;
