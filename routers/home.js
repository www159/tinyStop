const router = require('express').Router()



router.get('/', (req, res) => {
    res.redirect('home/main')
})



router.get('/func', require('./home/func'))



router.use('/main', require('./home/main'))



router.use('/back', require('./home/back'))



router.use('/todo', require('./home/todo'))



router.use('/btn', require('./home/routers/funcRouter'))



module.exports = router