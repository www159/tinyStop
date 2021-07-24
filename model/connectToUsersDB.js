const mongoose = require('mongoose');

let getConnect = async () => {
    try{
        return await mongoose.createConnection('mongodb://localhost/tiny', 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    }
    catch(e){
        console.log(e)
    }
}

module.exports = getConnect