import media from "../../public/svg/Media.svg";
import emoji from "../../public/svg/Emoji.svg";
import gif from "../../public/svg/Gif.svg";
import poll from "../../public/svg/Poll.svg";
import schedule from "../../public/svg/Schedule.svg";

function InnerEditor() {
    return ( 
        <form action="" className="tweet-editor-form">
            <input name="tweetInput" type="text" className="tweet-editor-input" placeholder="What's happening?" />
            <div className="tweet-editor-buttons">
                <div className="tweet-editor-actions">
                    <button><img src={media} alt="" /></button>
                    <button><img src={gif} alt="" /></button>
                    <button><img src={poll} alt="" /></button>
                    <button><img src={emoji} alt="" /></button>
                    <button><img src={schedule} alt="" /></button>
                </div>
                <button className="button" type="submit">Tweet</button>
            </div>
        </form>
     );
}

export default InnerEditor;