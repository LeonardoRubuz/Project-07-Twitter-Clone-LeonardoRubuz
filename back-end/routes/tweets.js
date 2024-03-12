const express = require('express')
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

module.exports = tweetRouter