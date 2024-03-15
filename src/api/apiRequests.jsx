import axios from "axios";

// List of all API requests

// Users
const getCurrentUser = async () => {
    
    return await axios.get(`http://localhost:5500/user`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    })        
}

// Tweets
const getAllTweets = async () => {
    return await axios.get(`http://localhost:5500/tweets`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
    })
 }

const getTweetsByUser = async (username) => {
    return await axios.get(`http://localhost:5500/${username}/tweets`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
    })
}

const addTweet = (data) => {
    axios.post("http://localhost:5500/tweets", data)
    .then(response => {
        console.log(`${response.status} Tweet enregistré!`);
    })
    .catch(error => {
        console.log(error);
    })
}

export { getCurrentUser, getAllTweets, getTweetsByUser, addTweet }