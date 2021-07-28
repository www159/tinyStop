const router = require('express').Router()


const {createModel} = require('../../model/todo')

router.get('/tasks', async (req, res) => {//get all tasks
    let TodoList = createModel(req.session.userInfo.username)
    let tasks = await TodoList.find({}).lean()
    console.log('get tasks: ', tasks)
    res.json(tasks)
})



router.post('/addTask', async(req, res) => {//add task
    let {name} = req.body
    // res.send(name)
    let TodoList = createModel(req.session.userInfo.username)
    let newTask = await TodoList.create({
        name: name,
        state: 0
    })
    res.json(newTask)
})



router.delete('/tasks/:id', async (req, res) => {//delete task
    let {id} = req.params
    let TodoList = createModel(req.session.userInfo.username)
    let task = await TodoList.findOne({_id: id})
    await TodoList.findOneAndDelete({_id: id})
    res.json(task)
})



router.delete('/clearCompleted', async (req, res) => {//clear completed
    let {deleteTask} = req.body
    // console.log(deleteTask)
    let TodoList = createModel(req.session.userInfo.username) 
    // console.log(await TodoList.find({_id: {$in: deleteTask}}))
    await TodoList.deleteMany({_id: {$in: deleteTask}})
    res.send('delete!')
})



router.put('/tasks', async (req, res) => {
    let TodoList = await createModel(req.session.userInfo.username) 
    let {id, state} = req.body
    await TodoList.updateOne({_id: id}, {state: (state ? 1 : 0)})
    let task = await TodoList.findOne({_id: id})
    // console.log(task)
    res.json(task)
})



router.put('/tasksName', async (req, res) => {
    let TodoList = await createModel(req.session.userInfo.username)
    let {id, newName} = req.body
    await TodoList.updateOne({_id: id}, {name: newName})
    let task = await TodoList.findOne({_id: id})
    res.json(task)
})



module.exports = router