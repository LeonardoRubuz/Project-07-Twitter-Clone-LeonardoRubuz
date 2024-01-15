import { TweetContext } from "../contexts/TweetContext.jsx";
import { datas } from "../datas/tweet-datas.jsx";
import Tweet from "./tweet.jsx";

function Tweets() {
    const tweets = datas.map(
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

    return ( 
        <section className="tweets">
            {tweets}
        </section>
     );
}

export default Tweets;