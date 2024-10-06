const express = require('express');

const router = express.Router();

router.use('*', (req, res) => {
    res.json('testing resource router')
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message || 'Something went wrong with the server'
    })
});

module.exports = router;
