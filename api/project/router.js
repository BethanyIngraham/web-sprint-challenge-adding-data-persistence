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

router.post('/', (req, res, next) => {
    try {

    } catch(err) {

    }
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong with the server'
    })
});

module.exports = router;