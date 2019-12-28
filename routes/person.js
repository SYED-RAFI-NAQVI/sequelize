const express = require("express")
const router = express.Router()

// require the models to make crud operations and to make routes.
const { person } = require('../sequelize')
// get request for the getting all the prople or users in the DB.
router.get('/', (req, res) => {
    person.findAll()
        .then(people => res.json(people))
})


// writing a post request for adding a new name or person in the DB.
router.post('/', (req, res) => {
    // creating a record in DB
    return person.create({
        // to create a record in DB
        // take all the required values form the body of the request.
        id: req.body.id,
        title: req.body.title,
        age: req.body.age
    })
        // then parse it to json
        .then(per => res.json(per))
        .then(console.log(req.body))
        .catch(err => console.log(err))
})

module.exports = router