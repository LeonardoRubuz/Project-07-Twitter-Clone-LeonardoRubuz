import logo from "../images/tweet-profile-photo.png"
import more from "../../public/svg/More.svg"
import { usersProfiles } from "../datas/profiles";

function Profile({profile}) {
    const userProfile = usersProfiles.find(element => element.username === profile)
    return ( 
        <div className="profile">
            <div className="profile-banner">
                <img src="" alt="" />
            </div>
            <div className="profile-photo-actions">
                <div className="profile-photo">
                    <img src={logo} alt="" />
                </div>
                <div className="profile-actions">
                    <div>
                        <img src={more} alt="" />
                    </div>
                    <div>
                        <button className="follow-button">Follow</button>
                    </div>
                </div>
            </div>
            <div className="profile-infos">
                <div className="usernames">
                    <h1>{userProfile.accountName}</h1>
                    <p>@{userProfile.username}</p>
                </div>
                <div className="profile-bio">
                    <p>{userProfile.bio}</p>
                    <div className="additional-infos">
                        {
                            userProfile.links.website !== "" ?
                            <div>
                                <img src='' alt="" />
                                <span><a href={"http://"+userProfile.links.website} target="_blank">{userProfile.links.website}</a></span>
                            </div> :
                            null
                        }
                        <div>
                            <img src='' alt="" />
                            <span>Joined Twitter since {userProfile.join_date}</span>
                        </div>
                    </div>
                    <div className="followers">
                        <p><span>{userProfile.following}</span> following</p>
                        <p><span>{userProfile.followers}</span> followers</p>
                    </div>
                    <div className="profile-nav">
                        <ul>
                            <li>
                                <p>Tweets</p>
                            </li>
                            <li>
                                <p>Answers</p>
                            </li>
                            <li>
                                <p>Highlighted Tweets</p>
                            </li>
                            <li>
                                <p>Medias</p>
                            </li>
                            <li>
                                <p>Likes</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Profile;