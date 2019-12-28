const express = require('express')
const router = express.Router()

// require the models to make crud operations and to make routes.
const { number } = require('../sequelize')

router.get('/', (req, res) => {
    number.findAll()
        .then(numbers => res.json(number))
})

router.post('/', (req, res) => {
    return number.create({
        id: req.body.id,
        title: req.body.title,
        number: req.body.number
    })
        .then(num => res.json(num))
        .then(console.log(req.body))
        .catch(err => console.log(err))
})

module.exports = router