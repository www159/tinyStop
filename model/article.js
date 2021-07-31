
const mongoose = require('mongoose')
let schema = {
    title: {
        type: String,
        required: true
    },

    column: [{
        type: mongoose.Schema.Types.ObjectId,
        rel: 'Column',
    }],

    author: {
        type: mongoose.Schema.Types.ObjectId,
        rel: 'User',
        required: true
    },

    data: {
        type: Date,
        default: Date.now
    },

    cover: {
        type: String,
        default: null
    },

    content: {
        type: String,
    }
}

module.exports = require('./UserDB').model('Article', schema, 'article')