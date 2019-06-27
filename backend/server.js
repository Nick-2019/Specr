const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const pry = require('pryjs')
const User = require('./models/User')
const Computer = require('./models/Computer')
const Favorite = require('./models/Favorite')
const Recommendation = require('./models/Recommendation')
const Spec = require('./models/Spec')
const Review = require('./models/Review')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/users', (req, res) => {
    User.findAll()
    .then(user => res.json(user))
})
























const port = 8000
app.listen(port, () => {console.log('I am listening at ' + port)})
