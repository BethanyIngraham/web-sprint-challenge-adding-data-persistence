const express = require('express');
const Resources = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.getResources();
        res.json(resources);
    } catch(err) {
        next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const {resource_name, resource_description} = req.body;

        const allResources = await Resources.getResources();

        const existingResource = allResources.find(
            resource => 
                resource.resource_name === resource_name
        );

        if(existingResource) {
            next({
                status: 400,
                message: 'Resource already exists'
            });
        } else {
            const resourceObj = {
                resource_name: resource_name,
                resource_description: resource_description
            };
            
            const createdResource = await Resources.createResource(resourceObj);
            res.status(201).json(createdResource);
        }
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
