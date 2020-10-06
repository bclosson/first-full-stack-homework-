const express = require('express');
const router = express.Router();


const equipment = require('../models/equipment');



// Index Route
router.get('/', (req, res) => {
    res.render('index', {
        equipment: equipment,
    });
});

// New Equipment
router.get('/new', (req, res) => {
    res.render('new');
});

// Create Equipment
router.post('/', (req, res) => {
    res.send('Hello');
});

// Show Route
router.get('/:index', (req, res) => {
    res.render('show', {
        equipment: equipment[req.params.index]
    });
});





module.exports = router; 