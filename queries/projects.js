const db = require("../db/dbConfig");

const getAllProjects = async () => {
    try {
        const projects = await db.any(`SELECT * FROM projects`);
        return { projects };
    } catch (error) {
        return { error: error };
    }
};

const getProject = async (id) => {
    try {
        const project = await db.one(`SELECT * FROM projects WHERE id=$1`, id);
        return { project };
    } catch (error) {
        return { error: error };
    }
};

const createProject = async (project) => {
    try {
        const createdProject = await db.one(
            `INSERT INTO
              projects(title, description, tech, image, github_link, demo_link, is_favorite, created_on, updated_on)
             VALUES
              ($1, $2, $3, $4, $5, $6, $7, $8, $9)
             RETURNING *;`,
             [
                project.title,
                project.description,
                project.tech,
                project.image,
                project.github_link,
                project.demo_link,
                project.is_favorite,
                project.created_on,
                project.updated_on
             ]);
             return { createdProject };
    } catch (error) {
        return { error: error };
    }
};

const deleteProject = async (id) => {
    try {
        const deletedProject = await db.one(`DELETE FROM projects WHERE id=$1 RETURNING *`, id);
        return { deletedProject };
    } catch (error) {
        return { error: error };
    }
};

const updateProject = async (id, project) => {
    try {
        const updatedProject = await db.one(
          `UPDATE 
              projects 
             SET 
              title=$1, description=$2, tech=$3, image=$4, github_link=$5, demo_link=$6, is_favorite=$7, created_on=$8, updated_on=$9 
             WHERE 
              id=$10 
             RETURNING *`,
          [
            project.title,
            project.description,
            project.tech,
            project.image,
            project.github_link,
            project.demo_link,
            project.is_favorite,
            project.created_on,
            project.updated_on,
          ]
        );
        return { updatedProject };
    } catch ( error ) {
        return { error: error };
    }
};

module.exports = {
    getAllProjects,
    getProject,
    createProject,
    deleteProject,
    updateProject
};