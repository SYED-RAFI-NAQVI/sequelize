const Sequelize = require('sequelize')

const connection = new Sequelize('new_dbb', 'root', 'password', {
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
},
)
// { dialect: 'mysql', logging: false, force: true, benchmark: true }



module.exports = connection
