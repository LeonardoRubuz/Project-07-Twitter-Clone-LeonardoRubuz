import { createContext } from "react";

export const TweetContext = createContext(
    {
        id : 0,
        avatar : "",
        author : "",
        username : "",
        date : "",
        content : "" ,
        image : "",
        likesNumber : 0,
        commentsNumber : 0,
        retweetsNumber : 0,
        isLiked : false,
        isRetweeted : false

    }
)