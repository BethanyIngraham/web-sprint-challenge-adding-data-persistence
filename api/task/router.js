const express = require('express');
const Tasks = require('./model');
const Projects = require('../project/model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const tasks = await Tasks.getTasks();
        res.json(tasks);
    } catch(err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const {
            task_description, 
            task_notes, 
            task_completed, 
            project_id
        } = req.body;

        if(!task_description || !project_id) {
            next({
                status: 400,
                message: 'Please provide the task description and project id'
            })
        }

        const allProjects = await Projects.getProjects();

        const existingProject = allProjects.find(
            project => 
                project.project_id === project_id
        )

        if(!existingProject) {
            next({
                status: 404,
                message: 'Project not found'
            })
        }  

        const taskObj = {
            task_description: task_description,
            task_notes: task_notes,
            task_completed: 
                task_completed !== undefined ? (task_completed ? 1 : 0) : 0,
            project_id: project_id 
        };
    
        const createdTask = await Tasks.createTask(taskObj);
        
        res.status(201).json(createdTask);
        
    } catch(err) {
        next(err);
    }
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong with the server'
    })
});

module.exports = router;
