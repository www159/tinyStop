const mysql = require('mysql')

const config = {
    host: 'www.wsalmon.site', // 主机名
    port: 3306,        // MySQL 默认端口为 3306
    user: 'root',          // 使用 root 用户登入 MySQL
    password: '12345678', // MySQL 密码，用你自己的
    database: 'waimai' // 使用数据库

}

module.exports = mysql.createConnection(config) 