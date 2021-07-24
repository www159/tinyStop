const {User} = require('../../../model/user')
module.exports = async (req, res) => {

    let {email} = req.body
    let user = await User.findOne({email})
    let reg = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$', 'i')
    if(user){
        return res.json({
            msg: '该邮箱已被注册',
            class: 'layui-font-red'
        })
    }
    else if(!reg.test(email)){
        return res.json({
            msg: '邮箱格式不对',
            class: 'layui-font-red'
        })
    }
    else{
        return res.json({
            msg: '邮箱正确',
            class: 'layui-font-green'
        })
    }
}