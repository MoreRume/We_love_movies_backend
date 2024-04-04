// Import necessary dependencies
const express = require("express");
const theatersController = require("./theaters.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");



// Create a router instance
const router = express.Router();

// Define routes
router
.get("/", theatersController.list)
.all(methodNotAllowed);

// Export the router
module.exports = router;
