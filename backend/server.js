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
const jwt = require('jsonwebtoken')

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

// Playing with Verification/authentication

// app.get('/api', (req, res) => {
//     res.json({
//         message: 'Welcome to the API'
//     })
// })

// app.post('/api/posts', verifyToken, (req, res) => {
//     jwt.verify(req.token, 'secretkey', (err, authData) => {
//         if(err){
//             res.sendStatus(403);
//         }else{
//             res.json({
//                 message: 'Post created...',
//                 authData
//             })
//         }
    // });


    // res.json({
    //     message: 'Post created...'
    // })
// })


// app.post('/api/login', (req, res) => {
//     const user = {
//         id: 100,
//         username: 'brad',
//         email: 'brad@gmail.com'
//     }
//     jwt.sign({user}, 'secretkey', { expiresIn: '30s' } (err, token) => {
//         res.json({
//             token: token
//         })

//     });
// })


// function verifyToken(req, res, next) {
//     const bearerHeader = req.headers['authorization'];
//     if(typeof bearerHeader !== 'undefined'){
//         const bearer = bearerHeader.split(' ')
//         const bearerToken = bearer[1]
//         req.token = bearerToken
//         next();


//     }else{
//         res.sendStatus(403)
//     }

// }




















const port = 8000
app.listen(port, () => {console.log('I am listening at ' + port)})
