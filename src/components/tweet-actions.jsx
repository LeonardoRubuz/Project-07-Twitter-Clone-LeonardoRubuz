import comment from "../../public/svg/comment.svg";
import like from "../../public/svg/like.svg";
import retweet from "../../public/svg/retweet.svg";
import share from "../../public/svg/share.svg";
import TweetAction from "./tweetAction";

function TweetActions({comments, likes, retweets }) {
    return ( 
        <div className="tweet-actions">
            <TweetAction
               action={comments}
               icon={comment}
               extraClass='comment-action' 
            />
            <TweetAction
               action={likes}
               icon={like}
               extraClass='like-action' 
            />
            <TweetAction
               action={retweets}
               icon={retweet}
               extraClass='retweet-action' 
            />
            <span className="tweet-action comment-action" title="Share">
                <img src={share} alt="" />
            </span>
        </div>
         );
}

export default TweetActions;