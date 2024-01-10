import TweetActions from "./tweet-actions";
import { Link } from "react-router-dom";

function Tweet({ id,  avatar, author, username, date, content, image, likes, comments, retweets}) {
    return ( 
        <div className='tweet'key={id}>
            <div className="tweet-avatar">
            <Link to={`/${username}`}><img src={avatar} alt="" /></Link>
            </div>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <span className='tweet-title-author'><Link to={`/${username}`}>{author}</Link></span>
                        <span className="tweet-title-details">@<Link to={`/${username}`}>{username}</Link></span>
                        <span className="tweet-title-details">.</span>
                        <span className="tweet-title-details">{date}</span>
                    </div>
                    <div className="tweet-text">{content}</div>
                    { image ?
                        <div className="tweet-image">
                            <img src={image} alt="" />
                        </div> :
                        null 
                    }
                </div>
                <TweetActions
                 likes={likes}
                 comments={comments}
                 retweets={retweets}
                 />
            </div>
        </div>
     );
}

export default Tweet;