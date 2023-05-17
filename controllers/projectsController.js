const express = require('express');
const projects = express.Router();


// INDEX
projects.get('/', async (req, res) => {

});

// SHOW
projects.get('/:id', async (req, res) => {

});

// CREATE
projects.post('/', async (req, res) => {

});

// UPDATE
projects.put('/:id', async (req, res) => {

});

// DELETE
projects.delete('/:id', async (req, res) => {

});

module.exports = projects;