const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send("Twitter mini API")
})

app.listen(5500, () => {
    console.log("serveur lancé au port 5500");
})