module.exports = (req, res) => {//TODO后期在登录拦截器中实现
    if(!req.session.userInfo){
        res.send('unlogged')
        // res.redirect('/home/back')
    }
    else{
        res.send('')
    }
}