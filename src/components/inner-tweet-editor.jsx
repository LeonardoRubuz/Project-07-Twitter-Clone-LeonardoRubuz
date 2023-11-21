import { BiPoll, BiImage,  } from "react-icons/bi";
import { HiOutlineGif } from "react-icons/hi2";
import { GrEmoji } from "react-icons/gr";
import { LuCalendarClock } from "react-icons/lu";

function InnerEditor() {
    return ( 
        <form action="" className="tweet-editor-form">
            <input type="text" className="tweet-editor-input" placeholder="What's happening?" />
            <div className="tweet-editor-buttons">
                <div className="tweet-editor-actions">
                    <span><BiImage /></span>
                    <span><HiOutlineGif /></span>
                    <span><BiPoll /></span>
                    <span><GrEmoji /></span>
                    <span><LuCalendarClock /></span>
                </div>
                <button className="button">Tweet</button>
            </div>
        </form>
     );
}

export default InnerEditor;