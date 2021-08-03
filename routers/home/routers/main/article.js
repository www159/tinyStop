const Article = require('../../../../model/article')
const Column = require('../../../../model/column')
const {User} = require('../../../../model/user')

module.exports = async (req, res) => {
    // console.log(req.query)
    let {page, perPage} = req.query
    // console.
    let articles = await Article.find().lean()
    let subArticles = articles.slice((page-1)*perPage, perPage)
    for(let j = 0; j < subArticles.length; j++){
        let col = subArticles[j].column
        subArticles[j].author = (await User.findOne({_id: subArticles[j].author})).username
        subArticles[j].date = subArticles[j].date.toLocaleDateString()
        // console.log(subArticles[j].data)
        for(let i = 0; i < col.length; i++){
            // console.log((await Column.findOne({_id: col[i]})).name)
            subArticles[j].column[i] = (await Column.findOne({_id: col[i]})).name
        }
    }
    // console.log(subArticles)
    res.json({
        pages: Math.floor(articles.length/perPage),
        articles: subArticles
    })
}