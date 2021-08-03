// const {createModel} = require('../../../model/todo')
const router = require('express').Router()



router.get('/', (req, res) => {//json back html
  //连接todo数据库,根据session创建todo数据库文件
  // await todoList.create({
  //   name: '喝酒',
  //   state: 0
  // })
  res.render('homeBody/func', {
    id: 'func'
  })
})



router.use('/todo', require('./func/routers/todo'))



router.use('/btn', require('./func/routers/btn'))



module.exports = router