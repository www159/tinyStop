const mongoose = require('mongoose')

let schema = new mongoose.Schema({
    
    username:{
        type: String,
        require: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },

    password:{
        type: String,
        require: true
    }
})
// const conUser = require('./connectToUsersDB').conUser

//解析promise

let User = require('./UserDB').model('Users', schema, 'users')

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