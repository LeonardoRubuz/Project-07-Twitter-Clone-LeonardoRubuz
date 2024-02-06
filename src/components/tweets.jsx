import { useParams } from "react-router-dom";
import { TweetContext } from "../contexts/TweetContext.jsx";
//import datas from '../datas/initial-data.json'
import Tweet from "./tweet.jsx";
import { useContext, useEffect, useState } from "react";
import { TweetsContext } from "../contexts/TweetsContext.jsx";
import { getTweetsByUser } from "../api/apiRequests.jsx";

function Tweets() {
    const user = useParams()
    const datas = useContext(TweetsContext)
    const [filteredTweets, setFilteredTweets] = useState([]);
    let tweets = null
    if (user.username){
        useEffect(() => {
            async function fetchTweetsByUser() {
                const tweetsList = await getTweetsByUser(user.username)
                setFilteredTweets(tweetsList)
            }
            fetchTweetsByUser()
        }, [])

        tweets = filteredTweets.map(
            (tweet, index) => {
                return(
                <TweetContext.Provider value={tweet}>    
                    <Tweet
                        key={index}
                    />
                </TweetContext.Provider>    
                )
            }
        )
    }
    else{
        tweets = datas.map(
            (tweet, index) => {
                return(
                <TweetContext.Provider value={tweet}>    
                    <Tweet
                        key={index}
                    />
                </TweetContext.Provider>    
                )
            }
        )
    }
    return ( 
        <section className="tweets">
            {tweets}
        </section>
     );
}

export default Tweets;