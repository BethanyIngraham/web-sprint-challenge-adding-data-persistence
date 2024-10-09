const express = require('express');
const Resources = require('./model');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const resources = await Resources.getResources()
        res.json(resources)
    } catch(err) {
        next(err);
    }
});

router.post('/', (req, res, next) => {

});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong with the server'
    })
});

module.exports = router;
