const express = require("express")
const app = express()

const { person, number } = require('./sequelize')

app.use(express.json())

// get request for the getting all the prople or users in the DB.
app.get('/api/people', (req, res) => {
    person.findAll()
        .then(people => res.json(people))
})


// writing a post request for adding a new name or person in the DB.
app.post('/api/person', (req, res) => {
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
})


app.listen(3000)
