const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// route to get all users
router.get("/", userController.getAllUsers);

// route to get user by Id
router.get("/:id", userController.getUserById);

// route to register a new user
router.post("/register", userController.registerUser);

// route to login
router.post("/login", userController.loginUser);

module.exports = router;
