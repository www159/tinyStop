const router = require('express').Router()


router.get('/', require('./main/mainPage'))



router.get('/area-btn', require('./main/area-btn'))



router.post('/area', require('./main/postArea'))


router.get('/article', require('./main/article'))



module.exports = router