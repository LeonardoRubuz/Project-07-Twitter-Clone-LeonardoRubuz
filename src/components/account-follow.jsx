
import avatar from "../images/profile-photo.png";

function AccountFollow() {
    return ( 
        
        <div className="account-info">
            <div className="account-picture">
                <img src={avatar} alt="" />
            </div>
            <div className="user-ids">
                <h2 className="tweet-title-author">Leonardo</h2>
                <p className="tweet-title-details">@rbmachine</p>
            </div>
            <div className="follow-button">
                <p>Follow</p>
            </div>
        </div>
     );
}

export default AccountFollow;