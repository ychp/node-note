
// url带参
const hello = async (ctx, next) => {
  ctx.response.type = 'text/html'
  ctx.response.body = `Hello, ${ctx.params.name}!`
}

module.exports = {
  'GET /hello/:name': hello
}