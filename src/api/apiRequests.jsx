import axios from "axios";

// List of all API requests

// Users
const getAllProfiles = () => {
    
}

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

const addTweet = () => {
    
}

export { getAllProfiles, getCurrentUser, getAllTweets, getTweetsByUser, addTweet }