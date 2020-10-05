const express = require('express');
const app = express();
const PORT = 3000;

const equipment = require('./models/equipment');

app.set('view engine', 'ejs');

app.get('/equipment/:index', (req, res) => {
    res.render('show', {
        equipment: equipment[req.params.index]
    });
});

app.get('/equipment', (req, res) => {
    res.render('index', {
        equipment: equipment,
    });
});

app.get('/', (req, res) => {
    res.send('This is Some Text');
});


app.listen(PORT, () => {
    console.log('listening');
});