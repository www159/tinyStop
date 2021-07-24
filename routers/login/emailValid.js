const {User} = require('../../model/user')

module.exports = async (req, res) => {
    let {email} = req.body
    let user = await User.findOne({email})
    if(!user){
        return res.status(400).json({msg: '用户不存在'})
    }
    return res.status(200).json({msg: '邮箱正确'})
}