import { useContext } from "react";
import comment from "../../public/svg/comment.svg";
import like from "../../public/svg/like.svg";
import retweet from "../../public/svg/retweet.svg";
import share from "../../public/svg/share.svg";
import TweetAction from "./tweetAction";
import { TweetContext } from "../contexts/TweetContext";

function TweetActions() {
    const tweet = useContext(TweetContext)
    return ( 
        <div className="tweet-actions">
            <span className="tweet-action comment-action"title="Comments">
                <img src={comment} alt="" />
                {tweet.commentsNumber}
            </span>
            <TweetAction
               action={tweet.retweetsNumber}
               icon={retweet}
               extraClass='retweet-action'
               title="Retweets" 
            />
            <TweetAction
               action={tweet.likesNumber}
               icon={like}
               extraClass='like-action'
               title="Likes" 
            />
            <span className="tweet-action comment-action" title="Share">
                <img src={share} alt="" />
            </span>
        </div>
         );
}

export default TweetActions;