const factory = require('../base/factory.js')
const Sequelize = require('sequelize')

const Blog = factory('blogs', {
    title: Sequelize.STRING()
})

module.exports = Blog