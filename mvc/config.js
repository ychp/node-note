
const opts = {
  server: {
    port: 8091
  },
  autoescape: true,
  noCache: process.env.NODE_ENV !== 'prod',
}

module.exports = opts