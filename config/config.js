const path = require('path')
const ticket_file = path.join(__dirname, '../util/ticket.txt')
const util = require('../util/accessTxt')
const config = {
    database: {
        DATABASE: 'CPP',
        USER: 'root',
        PASSWORD: 'root',
        PORT: '3306',
        HOST: '45.77.203.254'
    },
    port: '4000',

    appID:'wx60893c87f2211ac1',
    appSecret:'a9134a27e54f53bb2b90ae354a138792',
    token:'wechat',
    //获取access_token
    getAccessToken: function () {
        return util.readFileAsync(wechat_file)
    },
    //保存access_token
    saveAccessToken: function (data) {
        data = JSON.stringify(data)
        return util.writeFileAsync(wechat_file, data)
    },
    //获取ticket
    getTicket: function () {
        return util.readFileAsync(ticket_file)
    },
    //保存ticket
    saveTicket: function (data) {
        data = JSON.stringify(data)
        return util.writeFileAsync(ticket_file, data)
    },
}

module.exports = config