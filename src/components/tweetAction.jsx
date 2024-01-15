import clsx from "clsx";
import { useState } from "react";

function TweetAction({action, icon, extraClass, title}) {
    const [isClicked, setIsClicked] = useState(false);
    const [value, setValue] = useState(action);

    function handleClick() {
        if (!isClicked) {
            setIsClicked(true)
            setValue(action+1)
        }else{
            setIsClicked(false)
            setValue(action)
        }
    }

    return ( 
        <span className={
            clsx('tweet-action', extraClass, isClicked && extraClass+'-clicked')
        } title={title} onClick={handleClick}>
                <img src={icon} alt="" />
                {value}
            </span>
     );
}

export default TweetAction;