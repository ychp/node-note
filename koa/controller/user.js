
const login_page = async (ctx, next) => {
  ctx.response.type = 'text/html'
  ctx.response.body = `<h1>Index</h1>
        <form action="/login" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`
}

// 引入koa-bodyparser后，可以直接使用ctx.request.body获取数据
const login = async (ctx, next) => {
  const name = ctx.request.body.name || '' // 双竖线表示，如果取得的数据为空，设置默认值
  const password = ctx.request.body.password || ''
  if(name == 'koa' && password == '12345') {
    ctx.response.type = 'text/html'
    ctx.response.body = `Hello, ${ctx.request.body.name}!`
  } else {
    ctx.response.type = 'text/html'
    ctx.response.body = `password mismatch!`
  }
}

module.exports = {
  'GET /login': login_page,
  'POST /login': login
}