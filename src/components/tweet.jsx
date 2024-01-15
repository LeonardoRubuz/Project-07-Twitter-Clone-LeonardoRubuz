import { useContext } from "react";
import TweetActions from "./tweet-actions";
import { Link } from "react-router-dom";
import { TweetContext } from "../contexts/TweetContext";

function Tweet() {
    const tweet = useContext(TweetContext)
    return ( 
        <div className='tweet'key={tweet.id}>
            <div className="tweet-avatar">
            <Link to={`/${tweet.username}`}><img src={tweet.avatar} alt="" /></Link>
            </div>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <span className='tweet-title-author'><Link to={`/${tweet.username}`}>{tweet.author}</Link></span>
                        <span className="tweet-title-details">@<Link to={`/${tweet.username}`}>{tweet.username}</Link></span>
                        <span className="tweet-title-details">.</span>
                        <span className="tweet-title-details">{tweet.date}</span>
                    </div>
                    <div className="tweet-text">{tweet.content}</div>
                    { tweet.image ?
                        <div className="tweet-image">
                            <img src={tweet.image} alt="" />
                        </div> :
                        null 
                    }
                </div>
                <TweetActions
                 />
            </div>
        </div>
     );
}

export default Tweet;