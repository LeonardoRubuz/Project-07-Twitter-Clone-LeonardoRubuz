
import TweetActions from "./tweet-actions";


function Tweet({ id,  avatar, author, username, date, content, image, likes, comments, retweets}) {
    return ( 
        <div className='tweet'key={id}>
            <div className="tweet-avatar">
                <img src={avatar} alt="" />
            </div>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <span className='tweet-title-author'>{author}</span>
                        <span className="tweet-title-details">@{username}</span>
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