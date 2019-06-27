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
app.get('/computers', (req, res) => {
    Computer.findAll()
    .then(computer => res.json(computer))
})
app.get('/specs', (req, res) => {
    Spec.findAll()
    .then(spec => res.json(spec))
})
app.get('/reviews', (req, res) => {
    Review.findAll()
    .then(review => res.json(review))
})
app.get('/recomendations', (req, res) => {
    Recommendation.findAll()
    .then(recomendation => res.json(recomendation))
})
app.get('/favorites', (req, res) => {
    Favorite.findAll()
    .then(favorite => res.json(favorite))
})























const port = 8000
app.listen(port, () => {console.log('I am listening at ' + port)})
