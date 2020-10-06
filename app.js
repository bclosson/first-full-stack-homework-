const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Equipment Controller
const equipCntrl = require('./controllers/controllerEquip');
const equipment = require('./models/equipment');

app.set('view engine', 'ejs');

// -----------------MIDDLEWARE

// BodyParser
app.use(bodyParser.urlencoded({extended: false}));

// Custom Middleware
app.use((req, res, next) => {
    console.log('I run for all routes');
    next();
});

// ------------------ ROUTES

// Home Route
app.get('/', (req, res) => {
    res.send('This is Some Text');
});

// Equipment Routes 
app.use('/equipment', equipCntrl);

// Listener 
app.listen(PORT, () => {
    console.log('listening');
});