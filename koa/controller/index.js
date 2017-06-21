
const index = async (ctx, next) => {
  ctx.response.type = 'text/html'
  ctx.response.body = 'Index'
}

module.exports = {
  'GET /': index
}