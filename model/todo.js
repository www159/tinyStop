const mongoose = require('mongoose')

let schema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    state: {
        type: Number,
        required: true
    },

    author: {
        type: mongoose.Schema.Types.ObjectId,
        rel: 'User',
        required: true
    }
})

module.exports = require('./UserDB').model('Todo', schema, 'todo')