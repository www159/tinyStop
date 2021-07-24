const sendEmail = require('../../../model/email')
module.exports = (req, res) => {
    // console.log(req.body)
    let {email} = req.body
    let code = Math.floor(Math.random()*100000+100000)
    let content = 
    `
    <html>
        <body style="background-color: #dddddd;">
            <div style="line-height: 200px">
                <h1>您收到的验证码为:</h1>
                <div style="text-align: center; background-color: black;">
                    <h1 style="font: italic; color: white; font-size: 80px;">${code}</h1>
                </div>
            </div>
        </body>
    </html>
    `
    sendEmail(email, content, (state) => {
        if(state){
            console.log(`email send to ${email}`)
        }
        else{
            console.log(`fail send to ${email}`)
        }
    })

    req.session.code = code
    res.json()
}