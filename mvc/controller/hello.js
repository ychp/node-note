const hello = (ctx, next) => {
  const name = ctx.params.name || ''
  ctx.render('hello.html', {name})
}

module.exports = {
  "GET /hello/:name": hello
}