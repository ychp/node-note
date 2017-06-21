const Sequelize = require('sequelize')
const config = require('../config.js')

const sequelize =  new Sequelize(config.mysql.database, config.mysql.username, config.mysql.password, {
  host: config.mysql.host,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 30000
  }
})

const ID_TYPE = Sequelize.BIGINT(20)

const defineModel = (name, attributes) => {
    var attrs = {}
    for (let key in attributes) {
        let value = attributes[key]
        if (typeof value === 'object' && value['type']) {
            value.allowNull = value.allowNull || false
            attrs[key] = value
        } else {
            attrs[key] = {
                type: value,
                allowNull: false
            }
        }
    }
    attrs.id = {
        type: ID_TYPE,
        autoIncrement: true,
        primaryKey: true
    }
    attrs.created_at = {
        type: Sequelize.BIGINT,
        allowNull: false
    }
    attrs.updated_at = {
        type: Sequelize.BIGINT,
        allowNull: false
    }
    return sequelize.define(name, attrs, {
        tableName: name,
        timestamps: false,
        hooks: {
            beforeValidate: function (obj) {
                let now = Date.now()
                if (obj.isNewRecord) {
                    obj.created_at = now
                    obj.updated_at = now
                } else {
                    obj.updated_at = Date.now()
                }
            }
        }
    })
}

module.exports = defineModel