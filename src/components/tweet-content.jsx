import Image from "../images/tweet-image.png";
function TweetContent() {
    return ( 
        <>
            <div className="tweet-body">
                <div className="tweet-title">
                    <div className="tweet-title-author">CNN</div>
                    <div className="tweet-title-details"></div>
                    <div className="tweet-title-details">@CNN</div>
                    <div className="tweet-title-details">.</div>
                    <div className="tweet-title-details">7m</div>
                </div>
                <p className="tweet-text">
                    Lorem
                </p>
                <img src={Image} alt="" className="tweet-image" />
            </div>
            <div className="tweet-actions">
                <div className="tweet-action">
                    <span>Comments</span><span>10</span>
                </div>
                <div className="tweet-action">
                    <span>Retweets</span><span>10</span>
                </div>
                <div className="tweet-action">
                    <span>Likes</span><span>10</span>
                </div>
                <div className="tweet-action">
                    <span>Share</span>
                </div>
            </div>
        </>
     );
}

export default TweetContent;