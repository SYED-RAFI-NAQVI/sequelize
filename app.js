const express = require("express")
const app = express()

const connection = require('./db')
// const person = require('./models/person')

app.get('/', (req, res) => {
    res.send('hello')
})




connection.sync()
    .then(result => {
        app.listen(3000)
    })
    .catch(err => console.log(err))
