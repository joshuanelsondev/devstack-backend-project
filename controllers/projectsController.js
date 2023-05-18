const express = require('express');
const projects = express.Router();
const {
    getAllProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
} = require('../queries/projects');


// INDEX
projects.get('/', async (req, res) => {
    const { error, allProjects } = await getAllProjects();
    allProjects.sort((projectA, projectB) => projectA.id - projectB.id);

    if (error) {
        console.log(error);
        return res.status(500).json({ error: "server error" });
    }  else {
        return res.status(200).json(allProjects)
    }
});

// SHOW
projects.get('/:id', async (req, res) => {
    const { id } = req.params;
    const { error, project } = await getProject(id);

    if (error) {
        console.log(error);
        return res.status(404).json({ error: "Project Not Found" });
    } else {
        return res.status(200).json(project);
    }
});

// CREATE
projects.post('/', async (req, res) => {
    const project = req.body;
    const { error, createdProject } = await createProject(project);

    if (error) {
        console.log(error);
        return res.status(500).json({ error: "server error" });
    } else {
        return res.status(201).json(createdProject);
    }
});

// UPDATE
projects.put('/:id', async (req, res) => {
    const { id } = req.params;
    const project = req.body;
    const { error, updatedProject } = await updateProject(id, project);
    
    if (error) {
        console.log(error);
        return res.status(500).json({ error: "server error" });
    } else {
        return res.status(200).json(updatedProject);
    }
});

// DELETE
projects.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const { error, deletedProject } = await deleteProject(id);

    if (error) {
        console.log(error);
        return res.status(404).json({ error: "Project Not Found"});
    } else {
        return res.status(201).json(deletedProject);
    }
});

module.exports = projects;