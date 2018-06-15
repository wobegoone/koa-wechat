const koa = require('koa')
const app = new koa()
const router = require('./router/index');
const config = require('./config/config');
import session from 'koa-session-minimal'
import mysqlStore from 'koa-mysql-session'

app
.use(router.routes())
.use(router.allowedMethods())
.use(session({
    key: 'USER_SID',
    store: new mysqlStore({
        user: config.database.USER,
        password: config.database.PASSWORD,
        database: config.database.DATABASE,
        host: config.database.HOST
    })
}));

app.listen(config.port, function () {
    console.log(`this server is listening at port ${config.port}`);
});