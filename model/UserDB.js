const mongoose = require('mongoose');

module.exports = mongoose.createConnection('mongodb://localhost/tiny', 
{ 
    useNewUrlParser: true,
    useUnifiedTopology: true
})