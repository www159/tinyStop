const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: '2107795244@qq.com',
        pass: 'hlykdawmoffrbgec'
    }
})

let sendEmail = (dist, content, call) => {
    let mailOptions = {
        from: '2107795244@qq.com',
        to: dist,
        subject: '来自www的验证码',
        html: content
    }

    transporter.sendMail(mailOptions, (err, info) => {
        if(err){
            call(false)
        }
        else{
            call(true)
        }
    })
}

module.exports = sendEmail