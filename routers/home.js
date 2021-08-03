const router = require('express').Router()
// const {createDefault} = require('../model/user')

// createDefault()
router.get('/', (req, res) => {
    res.redirect('/home/main')
})



// router.use('/view', require('./view'))



router.use('/func', require('./home/routers/func'))


//服务器端缓存


router.use('/main', require('./home/routers/main'))



router.use('/back', require('./home/routers/back'))



// router.use('/todo', require('./home//fuc/routers/todo'))



// router.use('/btn', require('./home/routers/funcRouter'))




module.exports = router