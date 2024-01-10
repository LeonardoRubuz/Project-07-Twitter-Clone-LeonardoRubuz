import clsx from "clsx";
import { useState } from "react";

function TweetAction({action, icon, extraClass}) {
    const [isClicked, setIsClicked] = useState(false);

    function handleClick() {
        if (!isClicked) {
            setIsClicked(true)
        }else{
            setIsClicked(false)
        }
    }

    return ( 
        <span className={
            clsx('tweet-action', extraClass, isClicked && extraClass+'-clicked')
        } title="Comments" onClick={handleClick}>
                <img src={icon} alt="" />
                {action}
            </span>
     );
}

export default TweetAction;