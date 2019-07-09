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
const bcrypt = require('bcrypt')

const app = express()

SECRET = "k"

const corsOptions = {
    "origin": "http://localhost:3000",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": true, // false
    "optionsSuccessStatus": 200, // 204
    "credentials":true,
    "allowedHeaders":"Content-Type,*"
}
app.use(cors(corsOptions))
app.use(bodyParser.json())

async function getId(name) {
    var id = -1;
    await User.findAll({where:{username:name}})
    .then(
      users => {
        if(users.length > 0) {
          id = users[0].id
        }
      }
    ).catch( () => {console.log("could not find user")});
    return id;
  }
  

function getToken(req) {
    if(req.headers.authorization) {
      var arr = req.headers.authorization.split(" ");
      if((arr.length===2) && (arr[0]==="Bearer")) {
        return arr[1];
      }
    }
}

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
app.get('/computers/:id', (req, res) => {
    let arr = []
    Computer.findByPk(req.params.id)
    .then(computer => {
        res.json(computer)
    })
})

app.get('/computers/:id/reviews', async (req, res) => {
    // var compId = await getId(req.params.name);
    Review.findAll({where:{computerId: req.params.id}})
    .then(review => {
        res.json(review)
    })
    .catch(
        () => { res.json({failed:"Could not complete request"}) }
    );
})


app.get('/computers/:id/favorites', async (req, res) => {
    // var compId = await getId(req.params.name);
    Favorite.findAll({where:{computerId: req.params.id}})
    .then(fav => {
        res.json(fav)
    })
    .catch(
        () => { res.json({failed:"Could not complete request"}) }
    );
})

app.get('/users/:id/favorites', async (req, res) => {
    // var compId = await getId(req.params.name);
    Favorite.findAll({where:{userId: req.params.id}})
    .then(fav => {
        res.json(fav)
    })
    .catch(
        () => { res.json({failed:"Could not complete request"}) }
    );
})




app.get('/', (req, res) => {
    res.json("Maybe remember that you need something else? ex: /users or /computers")
})

app.post('/reviews', async (req, res) => {
    // var userId = await getId(req.body["name"])
    const review = Review.build({
        content: req.body.content,
        userId: req.body.userId,
        computerId: req.body.computerId
    })

    review.save().then(
        function(result){
            return res.status(200).json({success: "Review Posted!"})
        }
    ).catch(error =>{
        return res.status(500).json({error: "Those chickens are up to something"})
    })
    

})

app.post('/favorites', async (req, res) => {
    // var userId = await getId(req.body["name"])
    const favorite = Favorite.build({
        userId: req.body.userId,
        computerId: req.body.computerId
    })

    favorite.save().then(
        function(result){
            return res.status(200).json({success: "Favorite Created!"})
        }
    ).catch(error =>{
        return res.status(500).json({error: "Those chickens are up to something"})
    })
    

})

app.post('/users/register', (req, res) => {
    bcrypt.hash(req.body.password, 10, async function(err, hash){
        if(err){
            return res.status(500).json({error:"error creating hash"})
        }
        else{
            const user = User.build({
                username: req.body.username,
                passwordhash: hash,
                name: req.body.name,
                isverified: false,
                isadmin: false
            });
            // await user.build()
            user.save().then(
                function(result){
                    return res.status(200).json({success:'New User Created!'})
                }).catch(error => {
                    return res.status(500).json({error:'Well that failed. Try again?'})
                })
        }
    })

})

app.post('/login', cors(corsOptions), async function(req, res) {
    var id = await getId(req.body.username)
    User.findByPk(id)
    .then(
        function(user) {
            bcrypt.compare(req.body.password, user.passwordhash,
                function(err, result){
                    if(err){
                        return res.status(401).json({failed:"Invalid Username or Password"})
                    }
                    if(result){
                        const token = jwt.sign({
                            name:user.username,
                            id:user.id
                        },
                        SECRET,
                        {expiresIn: '2h'})
                        return res.status(200).json({success:'Approved', token:token, name:user.name, userId: user.id, username: user.username})
                    }
                    return res.status(401).json({failed:'Pay no attention to the man behind the curtain'})
                })
        }
    )

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
