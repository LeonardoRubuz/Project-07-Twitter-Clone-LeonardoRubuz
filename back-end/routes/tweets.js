const express = require('express')
const fs = require('fs').promises
const tweetRouter = express.Router()
const tweets = require('../models/tweets.json').tweets




tweetRouter
.get("/tweets", (req, res) => {
    res.json(tweets)
    
})
.get("/:username/tweets", (req, res) => {
    const filteredTweets = tweets.filter( tweet => tweet.username === req.params.username)
    res.json(filteredTweets) 
})
.post("/tweets", async (req, res) => {
    // Ouvrir le fichier json
    // Tranformer l'objet js en chaîne json
    // Ecrire dans le fichier json
    // Envoyer une réponse positive
    console.log(req.body);
    res.send(req.body)
})

module.exports = tweetRouter