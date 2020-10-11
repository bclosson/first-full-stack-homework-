const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const equipmentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    power: {
        type: String,
        required: true,
    },
    injury: {
        type: String,
        required: true,
    },
     SOP: Boolean,
}, {timestamps: true});

const Equipment = mongoose.model('Equipment', equipmentSchema);

module.exports = Equipment;

