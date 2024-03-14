const express = require('express');
const app = express()
const cors = require('cors')
const fs = require("fs")
const test = require('./models/test.json')
//routers
const tweetRouter = require('./routes/tweets');
const profileRouter = require('./routes/profiles');

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send("Twitter mini API")
})
app.post('/test', (req, res) => { 
    /* test.users.push(req.body)
    res.json(test) */
    
    fs.readFile('./models/test.json', err => {
        if (err) {
            console.log(err);
        }else {
            test.push(req.body)
            fs.writeFile("./models/test.json", JSON.stringify(test, null, 2), err => {
                if (err) {
                    console.log("Erreur", err);
                }else {
                    console.log("Succès");
                }
            })
        }
    })
    res.json(test)
})

app.use(tweetRouter)
app.use("/profiles",profileRouter)


app.listen(5500, () => {
    console.log("serveur lancé au port 5500");
})