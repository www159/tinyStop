const router = require('express').Router()



router.get('/', (req, res) => {
    res.render('home')
})



router.get('/func', require('./home/func'))



router.get('/main', require('./home/main'))



router.use('/todo', require('./home/todo'))



module.exports = router