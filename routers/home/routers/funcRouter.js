const router = require('express').Router()

const SignalServer = require('./plugins/signalServer')
let signalserver = new SignalServer(4399)

router.get('/signal/on', (req, res) => {
    setTimeout(() => {
        signalserver.start((err) => {
            if(err){
                res.status(500).send(err)
            }
            else{
                return res.status(200).send('ok')
            }
        })
    }, 2000)
})




router.get('/signal/off', (req, res) => {
    setTimeout(() => {
        signalserver.stop((err) => {
            if(err){
                res.status(500).send(err)
            }
            else{
                return res.status(200).send('ok')
            }
        })
    }, 2000)
})

module.exports = router