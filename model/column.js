const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        rel: 'Users',
        require: true
    }
})

module.exports = require('./UserDB').model('Column', schema, 'column')