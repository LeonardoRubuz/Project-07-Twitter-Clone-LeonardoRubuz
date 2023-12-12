import comment from "../../public/svg/comment.svg";
import like from "../../public/svg/like.svg";
import retweet from "../../public/svg/retweet.svg";
import share from "../../public/svg/share.svg";

function TweetActions({comments, likes, retweets }) {
    return ( 
        <div className="tweet-actions">
            <span className="tweet-action comment-action" title="Comments">
                <img src={comment} alt="" />
                {comments}
            </span>
            <span className="tweet-action retweet-action" title="Retweets">
                <img src={retweet} alt="" />
                {retweets}
            </span>
            <span className="tweet-action like-action" title="Likes">
                <img src={like} alt="" />
                {likes}
            </span>
            <span className="tweet-action comment-action" title="Share">
                <img src={share} alt="" />
            </span>
        </div>
         );
}

export default TweetActions;