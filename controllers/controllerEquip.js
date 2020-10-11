const express = require('express');
const router = express.Router();


const db = require('../models');



// Index Route
router.get('/', (req, res) => {
    // Query DB
    db.Equipment.find({}, (err, allEquipment) => {
        if (err) return console.log(err);
        
        res.render('index', {
            equipment: allEquipment,
        });
    });
});

// New Equipment
router.get('/new', (req, res) => {
    res.render('new');
});

// Create Equipment
router.post('/', (req, res) => {
   req.body.SOP = req.body.SOP === 'on';
   db.Equipment.create(req.body, (err, newEquipment) => {
       if (err) return console.log(err);
       
       res.redirect(`/equipment/${newEquipment._id}`);
   });
});

// Show Route
router.get('/:equipId', (req, res) => {
    // Query DB for Equipment by ID
    db.Equipment.findById(req.params.equipId, (err, foundEquipment) => {
        // Always handle error first!!!
        if (err) return console.log(err);
        
        res.render('show', {
            equipment: foundEquipment,
        });
    });
});   

// DELETE Equipment

router.delete('/:equipId', (req, res) => {
    // Query the equipment model to delet equipment by ID
    db.Equipment.findByIdAndDelete(req.params.equipId, (err, deletedEquip) => {
        if (err) return console.log(err);

        res.redirect('/equipment');
    });
});


// Edit Equipment

router.get('/:equipId/edit', (req, res) => {
    // Qeury the equipment collection for equipment by ID
    db.Equipment.findById(req.params.equipId, (err, foundEquip) => {
        if (err) return console.log(err);
        
        res.render('edit', {
            equipment: foundEquip,
        });
    });
});

// Update Equipment
router.put('/:equipId', (req, res) => {
    req.body.SOP = req.body.SOP === 'on';
    // Query DB equipment collection by ID and Update
    db.Equipment.findByIdAndUpdate(
        req.params.equipId,
        req.body,
        {new: true},
        (err, updatedEquip) => {
            if (err) return console.log(err);
           
            res.redirect(`/equipment/${updatedEquip._id}`);
        }
    );
});

module.exports = router; 