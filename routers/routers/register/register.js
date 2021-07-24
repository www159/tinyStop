const {User} = require('../../../model/user')
const bcrypt = require('bcrypt')
let rootCode = '18181818'
module.exports = async (req, res) => {
    let {username, email, password, key, code} = req.body
    let reg = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[~!@#$%^&*])[\da-zA-Z~!@#$%^&*]{8,}$/
    // console.log(req.body)
    if(!reg.test(password)){
       return res.json({msg: '密码格式错误'})
    }

    if(!req.session.code){
        return res.json({msg: '未获取验证码'})
    }
    console.log(req.session.code, code)
    if(code != req.session.code){
        return res.json({msg: '验证码错误'})
    }

    if(key !== rootCode) {
        return res.json({msg: '授权码错误'})
    }
    let salt = bcrypt.genSaltSync(10)
    let pass = bcrypt.hashSync(password, salt)
    let newUser = await User.create({
        username: username,
        email: email,
        password: pass
    })
    console.log('create a new user: ', newUser)
    req.session.destory((err) => {
        res.clearCookie(connect.sid)
    })
    return res.json({})
}