const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        rel: 'User',
        require: true
    }
})

module.exports = require('./UserDB').model('Column', schema, 'column')