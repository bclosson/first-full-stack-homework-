const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const PORT = 3000;

// Equipment Controller
const equipCntrl = require('./controllers/controllerEquip');
const equipment = require('./models/Equipment');

app.set('view engine', 'ejs');

// -----------------MIDDLEWARE

// BodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));

// Custom Middleware
app.use((req, res, next) => {
    const method = req.method;
    const path = req.url;
    const timestamp = new Date().toLocaleTimeString();
    console.log(`${method} ${path} ${timestamp}`);
    next();
});

// ------------------ ROUTES

// Home Route
app.get('/', (req, res) => {
    res.render('home', {
        
    });
});

// Equipment Routes 
app.use('/equipment', equipCntrl);

// Listener 
app.listen(PORT, () => {
    console.log('listening');
});