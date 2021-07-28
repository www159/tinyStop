const WebSocket = require('ws')

class SignalServer{
    constructor(port){
        this.port = port
        this.code2ws = new Map()
    }

    start(callback){
        this.wss = new WebSocket.Server({port: this.port})

        this.wss.on('error', (err) => {
            console.log(err)
            callback(err)
        })

        this.wss.on('listening', () => {
            console.log('webSocketServer start...')
            callback()
        })

        this.wss.on('connection', (ws, request) => {
            let code = Math.floor(Math.random()*100000) + 100000
            ws.code = code
            this.code2ws.set(code, ws)

            ws.sendData = (event, data) => {
                ws.send(JSON.stringify({event, data}))
            }

            ws.sendError = msg => {
                ws.sendData('error', msg)
            }

            ws.on('message', (message) => {
                let parseMessage = {}

                try{
                    parseMessage = JSON.parse(message)
                }
                catch(e){
                    ws.sendError('message invalid')
                    console.log('parse message error', e)
                    return
                }

                let {event, data} = parseMessage
                switch(event){
                    case 'login':{
                        console.log(code, 'log in')
                        ws.sendData('logined', {code})
                        break
                    }

                    case 'control': {
                        let remoteCode = +data.remoteCode
                        if(this.code2ws.has(remoteCode)){
                            ws.sendData('controlled', {remoteCode})
                            ws.remoteWs = this.code2ws.get(remoteCode)
                            ws.remoteWs.remoteWs = ws
                            ws.remoteWs.sendData('be-controlled', {remoteCode})
                        }
                        break
                    }

                    case 'forward':{
                        console.log(ws.code, `send data:`, data.event, 'to', ws.remoteWs.code)
                        ws.remoteWs.sendData(data.event, data.data)
                        break
                    }
                }
            })

            ws._closeTimeout = setTimeout(() => {
                ws.terminate()
            }, 10 * 60 * 1000)

            ws.on('close', () => {
                this.code2ws.delete(code)
                clearTimeout(ws._closeTimeout)
                console.log(code, 'log out')
            })
        })

    }

    stop(callback){
        if(!this.wss){
            callback('hasn\'t start')
        }
        this.wss.close((err) => {
            if(err){
                console.log( 'websocketServer failed to close >>> ',err)
                callback(err)
            }
            else{
                console.log('websocketServer close...')
                callback()
            }
        })
    }
}

module.exports = SignalServer