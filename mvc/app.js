const Koa = require('koa')
const app = new Koa()

// 设置POST body解析
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

// 读取配置
const opts = require('./config.js')

// 配置页面渲染
const render = require('./base/render.js')
app.use(render(`${__dirname}/views`, opts))

// 增加请求监听
const monitor = require('./base/monitor.js')
app.use(monitor(opts))

// 静态文件拦截
const static = require('./base/staticFilter.js')
app.use(static('/static/', `${__dirname}/static/`))

// 注入controller
const mappings = require('./base/mapping.js')
app.use(mappings(`${__dirname}/controller`))

// 启动
app.listen(opts.server.port, () => {
  console.log(`mvc demo start at port ${opts.server.port}!`)
})