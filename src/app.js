if (process.env.USER) require("dotenv").config();
const express = require("express");

const cors = require("cors");
const app = express();
const notFound = require("./errors/notFound");
const errorHandler = require("./errors/errorHandler");
const movies = require("./movies/movies.router");
const theaters = require("./theaters/theaters.router");
const reviews = require("./reviews/reviews.router")


app.use(cors())
app.use(express.json());

app.use("/movies", movies);
app.use("/theaters", theaters);
app.use("/reviews", reviews);

app.use(notFound);
app.use(errorHandler)

module.exports = app;
