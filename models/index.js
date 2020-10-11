const mongoose = require('mongoose');
const connectionString = 'mongodb://localhost:27017/equipMEN'

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
    console.log('mongoDB is connected...');
});

mongoose.connection.on('error', () => {
    console.log(error);
});

module.exports = {
    Equipment: require('./Equipment'),
};