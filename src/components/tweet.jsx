import profile from '../images/tweet-profile-photo.png';
import image from '../images/tweet-image.png';
function Tweet() {
    return ( 
        <>
            <div className="tweet-avatar">
                <img src={profile} alt="" />
            </div>
            <div className="tweet-content">
                <div className="tweet-body">
                    <div className="tweet-title"></div>
                    <div className="tweet-text">Lorem ipsum dolor sit amet consectetur adipisicing. </div>
                    <div className="tweet-image">
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="tweet-actions"></div>
            </div>
        </>
     );
}

export default Tweet;