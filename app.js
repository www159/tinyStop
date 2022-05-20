const express = require('express');
const path = require('path')



//create httpserver
const app = express()


//using art template
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'art')
app.engine('art', require('express-art-template'))



//static resourse
app.use(express.static(path.join(__dirname, 'public')))



// //work the cookie client sends
// const session = require('express-session')
// //session decoding
// app.use(session({secret: 'session-key'})) 
// //login gate
// app.use(require('./middleware/loginGate'))



//work the post req
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))


//cors send email
app.use(require('cors')())
//pre-connection

//filter login router
// app.use('/login', require('./routers/login'))

// app.use('/home', require('./routers/home'))

// app.use('/view', require('./routers/view'))

app.use('/waimai', require('./routers/waimai/main.js'))

// filter error msg
// app.use((err, req, res, next) => {
//     let params = JSON.parse(err)
//     res.render(params.path, params.msg)
// })



//start httpserver
app.listen(8080, () => {
    console.log("server start...")
})