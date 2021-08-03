const router = require('express').Router()
const Article = require('../model/article')
const Column = require('../model/column')
const {User} = require('../model/user')



let nearId = new Object
router.get('/', async (req, res) => {
    let {_id} = req.query
    let article = await Article.findOne({_id}).lean()
    // console.log(article.date  instanceof Date)
    let nextAtl = await Article.findOne({_id: {$gt: _id}})
    let prevAtl = await Article.findOne({_id: {$lt: _id}})
    nearId.nextId = nextAtl ? nextAtl._id : null
    nearId.prevId = prevAtl ? prevAtl._id : null
    // console.log(nearId)
    res.render('homeBody/view', {
        title: article.title,
        content: article.content,
        cover: article.cover,
        author: (await User.findOne({_id: article.author})).username,
        date: article.date.toLocaleDateString(),
        column: (await Column.findOne({_id: article.column})).name
    })
})




router.get('/near', (req, res) => {
    res.json(nearId)
})


module.exports = router