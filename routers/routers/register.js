const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('register')
})



router.post('/emailValid', require('./register/emailValid'))



router.post('/code', require('./register/code'))



router.post('/', require('./register/register'))

module.exports = router