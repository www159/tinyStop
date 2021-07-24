const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    
    username:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true
    },

    password:{
        type: String,
        require: true
    }
})
// const conUser = require('./connectToUsersDB').conUser

//解析promise
let getUser = async () => {
    try{
        return (await require('./connectToUsersDB')()).model('user', schema)
    }
    catch(e){
        console.log(e)
    }
}

let User = getUser()

const bcrypt = require('bcrypt')
let createDefault = async () => {
    let salt = bcrypt.genSaltSync(10)
    let password = bcrypt.hashSync('064919', salt)
    let admin = await User.create({
        username: 'www159',
        email: '2107795244@qq.com',
        password: password
    })
}

module.exports = {User, createDefault}