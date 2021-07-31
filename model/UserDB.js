const mongoose = require('mongoose');

module.exports = mongoose.createConnection('mongodb://localhost/tiny', 
{ 
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})