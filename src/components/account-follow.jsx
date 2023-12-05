import avatar from "../images/profile-photo.png";
import more2 from "../../public/svg/More-2.svg";
function AccountFollow() {
    return (  
        <div className="user-info">
            <div className="profile-picture">
                <img src={avatar} alt="" />
            </div>
            <div className="user-ids">
                <h2 className="tweet-title-author">Leonardo</h2>
                <p className="tweet-title-details">@rbmachine</p>
            </div>
            <div className="more-info">
                <img src={more2} alt="" />
            </div>
        </div>
     );
}

export default AccountFollow;