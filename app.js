const express = require("express")
const app = express()

// importing routes form the routes folder.
const person = require('./routes/person')
const number = require('./routes/number')

app.use(express.json())

// app.get('/', (req, res) => {
//     res.send('hello world')
// })

// Routes are in routes folder.
app.use('/api/person', person)
app.use('/api/number', number)


app.listen(3000)
