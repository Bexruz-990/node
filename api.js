const express = require('express');
const router = express.Router();
const data = require('./data.json'); 

router.get('/data', (req, res) => {
    res.json(data); 
});

module.exports = router;
