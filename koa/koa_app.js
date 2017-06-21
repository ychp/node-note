const Koa = require('koa')
const app = new Koa()

// post方法，参数使用requestBody传入时，需要引入第三方组件
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

const controllers = require('./koa-mapping.js')

// middleware 是顺序调用的，所以代码的顺序需要按照调用的顺序书写

app.use(async (ctx, next) => {
    const start = new Date().getTime() // 当前时间
    await next() // 调用下一个middleware
    const ms = new Date().getTime() - start // 耗费时间
    console.log(`${ctx.request.method} ${ctx.request.url}, cost ${ms} ms`) // 打印耗费时间
})

app.use(controllers(`${__dirname}/controller`))

app.listen(8091, function() {
  console.log('koa demo listen port is 8091')
})