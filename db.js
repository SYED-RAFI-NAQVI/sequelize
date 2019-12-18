const Sequelize = require('sequelize')

const connection = new Sequelize('new_dbb', 'root', 'password', { dialect: 'mysql' })
// { dialect: 'mysql', logging: false, force: true, benchmark: true }



module.exports = connection
