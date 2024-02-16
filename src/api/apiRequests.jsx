import axios from "axios";

// List of all API requests

// Users
const getCurrentUser = async () => {
    
    return await axios.get(`http://localhost:8000/current-user`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.error(error);
    })        
}

// Tweets
const getAllTweets = async () => {
    return await axios.get(`http://localhost:8000/tweets`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
    })
 }

const getTweetsByUser = async (username) => {
    return await axios.get(`http://localhost:8000/tweets/?username=${username}`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
    })
}

const addTweet = (data) => {
    axios.post("http://localhost:8000/tweets", data)
    .then(response => {
        console.log(`${response.status} Tweet enregistré!`);
    })
    .catch(error => {
        console.log(error);
    })
}

export { getCurrentUser, getAllTweets, getTweetsByUser, addTweet }