const router = require('express').Router()
const multiparty = require('multiparty')
const path = require('path')
const fs = require('fs')

const Column = require('../../model/column')
const Article = require('../../model/article')

router.get('/', (req, res) => {
    // console.log(1)
    res.render('homeBody/back', {
        id: 'back'
    })
})



router.get('/isLogin', (req, res) => {//TODO后期在登录拦截器中实现
    if(!req.session.userInfo){
        res.send('unlogged')
        // res.redirect('/home/back')
    }
    else{
        res.send('')
    }
})



router.get('/submitConfirm', async (req, res) => {//render c
    // console.log(1)
    res.render('homeBody/back/submit-confirm', {
        columns: await Column.find()
    })
})



router.post('/cover', (req, res) => {
    let form = new multiparty.Form({
        uploadDir: path.join(__dirname, '../../public/upload/')
    })
    form.parse(req, (err, fields, files) => {
        if(err){
            return res.json({
                code: 1,
                msg: err
            })
        }
        // console.log(files)
        return res.json({
            code: 0,
            data: {
                src: files.file[0].path.split('public')[1]
            }
        })
    })
})



router.delete('/cover', (req, res) => {
    let {imgPath} = req.body
    let aboPath = path.join(__dirname, '../../public', imgPath)
    console.log(aboPath)
    fs.unlinkSync(aboPath, (err) => {
        res.status(400).send(err)
    })
    res.send('退出成功')
})



router.get('/addColumn', (req, res) => {
    res.render('homeBody/back/add-column')
})




router.post('/article', async (req, res) => {//new article
    console.log(req.body)
    let {title, column, cover, content} = req.body
    cover = cover.trim().length ? cover : null
    let column_ = await Column.findOne({name: column})
    if(!column_){
        column_ = await Column.create({name: column})
    }

    let article = await Article.create({
        title,
        column: column_,
        cover,
        content,
        author: req.session.userInfo._id
    })
    console.log(article)
    res.send('发布成功')
}) 


module.exports = router