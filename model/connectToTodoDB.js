const mongoose = require('mongoose');

// let connection = mongoose.createConnection('mongodb://www159:064919@localhost:27017/todo', 
// { 
//     useNewUrlParser: true,
// })
//         .then(() => {
//             console.log('todoDB connect...')
//         })
//         .catch(() => {
//             console.log('failed to connect')
//         })

let connection = async() => {
    try{
        return await mongoose.createConnection('mongodb://www159:064919@localhost:27017/todo', 
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true 
        })
    }
    catch(e){
        console.log(e)
    }
}

module.exports = connection