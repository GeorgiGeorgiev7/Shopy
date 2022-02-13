const mongoose = require('mongoose');

const CONNECTION_STRING = 'mongodb://localhost:27017/shopy';


const connectDatabase = () => {
    mongoose.connect(CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;

    db.once('open', () => {
        console.log('>>> Database connected');
    });

    db.once('error', (err) => {
        console.log('!!! Database connection error');
        process.exit(1);
    });
};


module.exports = connectDatabase;