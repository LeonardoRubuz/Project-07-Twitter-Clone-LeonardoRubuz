import { useParams } from "react-router-dom";
import { TweetContext } from "../contexts/TweetContext.jsx";
//import datas from '../datas/initial-data.json'
import Tweet from "./tweet.jsx";
import { useContext } from "react";
import { TweetsContext } from "../contexts/TweetsContext.jsx";

function Tweets() {
    const user = useParams()
    const datas = useContext(TweetsContext)
    let tweets = null
    if (user.username){
        const filteredDatas = datas.filter((data) => data.username == user.username)
    
        tweets = filteredDatas.map(
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