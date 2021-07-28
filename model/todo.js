const mongoose = require('mongoose')

let schema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },

    state: {
        type: Number,
        require: true
    }
})

createModel = (name) => {
    return require('./privateDB').model(name, schema)
}

module.exports = {createModel}