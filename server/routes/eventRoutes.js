const express = require("express");
const router = express.Router();
const eventController = require("../controllers/eventController");

router.get("/", (req, res) => {
  res.send("Hello! from the backend...");
});

// router for fetching all events
router.get("/events", eventController.getAllEvents);

// router for creating a new event
router.post("/events", eventController.createEvent);

// router for fetching a single event by ID
router.get("/events/:id", eventController.getEventById);

// router for updating an event by ID
router.put("/events/:id", eventController.updateEvent);

// router for deleting an event by ID
// router.delete("/events/:id", eventController.deleteEvent);

// router for fetching all events by user ID
// router.get("/users/:userId/events", eventController.getEventsByUserId);

// router for testing

module.exports = router;
