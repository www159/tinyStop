const router = require('express').Router()

const connection = require('../../models/mysql')
// router.get('/', require('./main/mainPage'))


// router.get('/area-btn', require('./main/area-btn'))



// router.post('/area', require('./main/postArea'))


// router.get('/article', require('./main/article'))


router.get('/boss/bossName', (req, res) => {
    connection.query('select bossName from MInfo', (err, bossName) => {
        console.log('yes')
        if(err) error(err)
        console.log(bossName)
        res.json(bossName)
    })
})


module.exports = router