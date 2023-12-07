import comment from "../../public/svg/comment.svg";
import like from "../../public/svg/like.svg";
import retweet from "../../public/svg/retweet.svg";
import share from "../../public/svg/share.svg";


function Tweet({ id,  avatar, author, username, date, content, image, likes, comments, retweets }) {
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
                <div className="tweet-actions">
                    <span className="tweet-action"><img src={comment} alt="" />{comments}</span>
                    <span className="tweet-action"><img src={retweet} alt="" />{retweets}</span>
                    <span className="tweet-action"><img src={like} alt="" />{likes}</span>
                    <span className="tweet-action"><img src={share} alt="" /></span>
                </div>
            </div>
        </div>
     );
}

export default Tweet;