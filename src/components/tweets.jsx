import { datas } from "../datas/tweet-datas.jsx";
import Tweet from "./tweet.jsx";

function Tweets() {
    const tweets = datas.map(
        (tweet, index) => {
            return(
                
            <Tweet
                key={index}
                id={tweet.id}
                avatar={tweet.avatar}
                author={tweet.author}
                username={tweet.username}
                date={tweet.date}
                content={tweet.content}
                image={tweet.image}
                likes={tweet.likesNumber}
                comments={tweet.commentsNumber}
                retweets={tweet.retweetsNumber}
            />
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