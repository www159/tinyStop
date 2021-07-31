const router = require('express').Router()


const Todo = require('../../model/todo')

router.get('/tasks', async (req, res) => {//get all tasks
    let tasks = await Todo.find({author: req.session.userInfo._id}).lean()
    // console.log('get tasks: ', tasks)
    res.json(tasks)
})



router.post('/addTask', async(req, res) => {//add task
    let {name} = req.body
    // res.send(name)
    let newTask = await Todo.create({
        name: name,
        state: 0,
        author: req.session.userInfo._id
    })
    res.json(newTask)
})



router.delete('/tasks/:id', async (req, res) => {//delete task
    let {id} = req.params
    let task = await Todo.findOne({_id: id})
    await Todo.findOneAndDelete({_id: id})
    res.json(task)
})



router.delete('/clearCompleted', async (req, res) => {//clear completed
    let {deleteTask} = req.body 
    // console.log(await TodoList.find({_id: {$in: deleteTask}}))
    await Todo.deleteMany({_id: {$in: deleteTask}})
    res.send('delete!')
})



router.put('/tasks', async (req, res) => {//update state
    let {id, state} = req.body
    await Todo.updateOne({_id: id}, {state: (state ? 1 : 0)})
    let task = await Todo.findOne({_id: id})
    // console.log(task)
    res.json(task)
})



router.put('/tasksName', async (req, res) => {//update name
    let {id, newName} = req.body
    await Todo.updateOne({_id: id}, {name: newName})
    let task = await Todo.findOne({_id: id})
    res.json(task)
})



module.exports = router