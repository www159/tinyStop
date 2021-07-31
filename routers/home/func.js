const {createModel} = require('../../model/todo')
module.exports = async (req, res) => {//json back html
    //连接todo数据库,根据session创建todo数据库文件
    // await todoList.create({
    //   name: '喝酒',
    //   state: 0
    // })
    res.render('homeBody/func', {
      id: 'func'
    })
}