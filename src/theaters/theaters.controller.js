// Import necessary dependencies and utilities
const db = require('../db/connection')
const service = require("./theaters.service")

// Controller function to handle GET /theaters endpoint
async function list(req, res) {
    res.json({data: await service.list()})
}

// Export the controller function
module.exports = {
     list,
};