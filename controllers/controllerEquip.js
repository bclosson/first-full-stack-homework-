const express = require('express');
const router = express.Router();


const equipment = require('../models/equipment');

// New/Add Route
router.get('/new', (req, res) => {
    res.render('new');
});

// Show Route
router.get('/:index', (req, res) => {
    res.render('show', {
        equipment: equipment[req.params.index]
    });
});

// Index Route
router.get('/', (req, res) => {
    res.render('index', {
        equipment: equipment,
    });
});



module.exports = router; 