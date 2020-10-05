const express = require('express');
const app = express();
const PORT = 3000;

const equipment = require('./models/equipment');


app.get('/equipment/:index', (req, res) => {
    res.send(equipment[req.params.index]);
});

app.get('/equipment', (req, res) => {
    res.send('Here is your equipment');
});


app.listen(PORT, () => {
    console.log('listening');
});