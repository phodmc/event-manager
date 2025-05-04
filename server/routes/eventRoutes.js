const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

// router for fetching all events
router.get("/", eventController.getAllEvents);

// router for creating a new event
router.post("/", eventController.createEvent);

// router for fetching a single event by ID
router.get("/:id", eventController.getEventById);

// router for updating an event by ID
router.put("/:id", eventController.updateEvent);

// router for deleting an event by ID
router.delete("/:id", eventController.deleteEvent);

// router for fetching all events by user ID
// router.get("/users/:userId/events", eventController.getEventsByUserId);

// router for testing

module.exports = router;
