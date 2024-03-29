const express = require('express');
const app = express()
const cors = require('cors')
const fs = require("fs")
//routers
const tweetRouter = require('./routes/tweets');
const profileRouter = require('./routes/profiles');
const userRouter = require('./routes/user');


// settings
app.set('view engine', 'ejs' )
app.use(cors());
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended : true}))


app.get('/', (req, res) => {
    res.render('index')
})


app.use(tweetRouter)
app.use("/profiles",profileRouter)
app.use("/user",userRouter)


app.listen(5500, () => {
    console.log("serveur lancé au port 5500");
})