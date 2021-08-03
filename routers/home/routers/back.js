const router = require('express').Router()



router.get('/', (req, res) => {
    // console.log(1)
    res.render('homeBody/back', {
        id: 'back'
    })
})



router.get('/isLogin', require('./back/isLogin'))



router.use('/editor', require('./back/routers/editor'))



module.exports = router