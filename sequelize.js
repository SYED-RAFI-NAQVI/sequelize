const Sequelize = require('sequelize')
const connection = require('./db')
const person = require('./models/person')
const number = require('./models/number')


connection.sync()
    .then(() => {
        console.log("connected and created")
    })
    .catch(err => console.log(err))


module.exports = {
    person,
    number
}