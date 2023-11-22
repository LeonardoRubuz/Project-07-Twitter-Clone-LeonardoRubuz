import profile from '../images/tweet-profile-photo.png';
import image from '../images/tweet-image.png';
import comment from "../comment.svg";
import like from "../like.svg";
import retweet from "../retweet.svg";
import share from "../share.svg";


function Tweet() {
    return ( 
        <div className='tweet'>
            <div className="tweet-avatar">
                <img src={profile} alt="" />
            </div>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title">
                        <span className='tweet-title-author'>John Doe</span>
                        <span className="tweet-title-details">@JohnDoe</span>
                        <span className="tweet-title-details">.</span>
                        <span className="tweet-title-details">April 3</span>
                    </div>
                    <div className="tweet-text">Lorem ipsum dolor sit amet consectetur adipisicing. </div>
                    <div className="tweet-image">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="tweet-actions">
                    <span className="tweet-action"><img src={comment} alt="" />10</span>
                    <span className="tweet-action"><img src={retweet} alt="" />10</span>
                    <span className="tweet-action"><img src={like} alt="" />10</span>
                    <span className="tweet-action"><img src={share} alt="" /></span>
                </div>
            </div>
        </div>
     );
}

export default Tweet;