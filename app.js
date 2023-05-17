// DEPENDENCIES
const express = require("express");
const cors = require("cors");

// CONTROLLERS
const projectsController = require('./controllers/projectsController');

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to DevStack");
});

app.use('/projects', projectsController);


module.exports = app;
