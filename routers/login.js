const router = require("express").Router();
// const {createDefault} = require('../model/user')
router.get('/', (req, res) => {
    res.render('login')
    // createDefault()
})

router.post('/', require('./login/loginPage'))



router.post('/emailValid', require('./login/emailValid'))



//register router
router.use('/register', require('./routers/register'))

module.exports = router