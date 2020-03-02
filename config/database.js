const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/flights', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//shortcut variable
const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}`)
});