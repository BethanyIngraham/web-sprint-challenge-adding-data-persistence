const express = require('express');
const Projects = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const projects = await Projects.getProjects();
        res.json(projects);
    } catch(err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const {project_name, project_description, project_completed} = req.body;

        const projectObj = {
            project_name: project_name,
            project_description: project_description,
            project_completed: 
                project_completed !== undefined ? (project_completed ? 1 : 0) : 0
        };

        const createdProject = await Projects.createProject(projectObj);
        res.status(201).json(createdProject);

    } catch(err) {
        next(err);
    }
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong with the server',
        stack: err.stack
    })
});

module.exports = router;