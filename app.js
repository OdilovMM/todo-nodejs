const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks");
const notFound = require("./middlewares/not-found");
const errorHandler = require("./middlewares/errorHandler");

// setting up static files
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasksRouter);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
