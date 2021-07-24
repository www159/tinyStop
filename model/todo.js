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

createModel = async (name) => {
    try{
        return (await require('./connectToTodoDB')()).model(name, schema)
    }
    catch(e){
        console.log(e)
    }

}


module.exports = {createModel}