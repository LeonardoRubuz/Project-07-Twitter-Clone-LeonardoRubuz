const express = require('express')
const tweetRouter = express.Router()
const tweets = require('../models/tweets.json').tweets

tweetRouter.get("/", (req, res) => {
    res.json(tweets)
    console.log(typeof tweets);
    
})


module.exports = tweetRouter