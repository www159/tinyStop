module.exports = (req, res, next) => {
    // console.log(req.url)
    // switch(req.url){
    //     case '/login':
    //     case '/login/emailValid':
    //     case '/login/register':
    //     case '/login/register/emailValid':
    //     case '/login/register/code':
    //     case '/home':
    //     case '/home/func':
    //     case '/home/main':
    //         next()
    //     break
    //     default:
    //         if(!req.session.userInfo)  res.redirect('/login')
    //         else next()
    //     break
    // }
    //TODO add admin session
    req.session.userInfo = {
        _id: '60f77b6769b55150c07db440',
        username: 'www159',
        email: '2107795244@qq.com',
        password: '064919'
    }
    next()
}