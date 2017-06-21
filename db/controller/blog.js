const blogs = async (ctx, next) => {
  const model = require('../base/model.js')
  const Blog = model.Blog
  const condition = {}
  if(ctx.params.title) {
    condition.title = ctx.params.title
  }
  const blogList = await Blog.findAll(condition)
  ctx.render('blogs.html', { blogs: blogList })
}

module.exports = {
  "GET /blogs": blogs
}