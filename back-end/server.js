const express = require('express');
const app = express()
const cors = require('cors')
const tweetRouter = require('./routes/tweets');

app.use(cors())

app.get('/', (req, res) => {
    res.send("Twitter mini API")
})

app.use("/tweets",tweetRouter)


app.listen(5500, () => {
    console.log("serveur lancé au port 5500");
})