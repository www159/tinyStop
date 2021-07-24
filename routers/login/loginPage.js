const {User, createDefault} = require('../../model/user')
const bcrypt = require('bcrypt')

module.exports = async (req, res, next) => {
    let {email, password} = req.body
    let user = await User.findOne({email})
    if(!user){
        next(JSON.stringify({
            path: 'login',
            msg:{
                msg: '用户不存在'
            }
        }))
    }
    if(bcrypt.compareSync(password, user.password)){
        req.session.userInfo = user
        res.send('login success')
    }
    else{
        next(JSON.stringify({
            path: 'login',
            msg:{
                msg: '密码错误'
            }
        }))
    }
}