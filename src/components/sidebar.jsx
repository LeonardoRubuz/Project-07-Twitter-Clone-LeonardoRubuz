import logo from "../../public/svg/Twitter.svg";
import bookmark from "../../public/svg/Bookmarks.svg";
import explore from "../../public/svg/Explore.svg";
import home from "../../public/svg/Home-Fill.svg";
import lists from "../../public/svg/Lists.svg";
import messages from "../../public/svg/Messages.svg";
import more from "../../public/svg/More.svg";
import notifications from "../../public/svg/Notifications.svg";
import profile from "../../public/svg/Profile.svg";
import avatar from "/images/profile-photo.png";
import more2 from "../../public/svg/More-2.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Sidebar() {
    const user = useContext(UserContext)
    return ( 
        <div className="sidebar">
            <div className="navigation-item">
                <Link to={"/"}><img src={logo} alt="" /></Link>
            </div>
            <ul className="side-navigation">
                <li className="navigation-item">
                    <img src={home} alt="" />
                    <Link to={"/"}>Home</Link>
                </li>
                <li className="navigation-item">
                    <img src={explore} alt="" />
                    <span>Explore</span>
                </li>
                <li className="navigation-item">
                    <img src={notifications} alt="" />
                    <span>Notifications</span>
                </li>
                <li className="navigation-item">
                    <img src={messages} alt="" />
                    <span>Messages</span>
                </li>
                <li className="navigation-item">
                    <img src={bookmark} alt="" />
                    <span>Bookmarks</span>
                </li>
                <li className="navigation-item">
                    <img src={lists} alt="" />
                    <span>Lists</span>
                </li>
                <li className="navigation-item">
                        <img src={profile} alt="" />
                        <Link to={`/${user.username}`}>Profile</Link>
                </li>
                <li className="navigation-item">
                    <img src={more} alt="" />
                    <span>Plus</span>
                </li>
                <button className="button">Tweet</button>
            </ul>
            <div className="user-info">
                <div className="profile-picture">
                    <Link to={`/${user.username}`}><img src={avatar} alt="" /></Link>
                </div>
                <div className="user-ids">
                    <h2 className="tweet-title-author"><Link to={`/${user.username}`}>Leonardo</Link></h2>
                    <p className="tweet-title-details"><Link to={`/${user.username}`}>@rbmachine</Link></p>
                </div>
                <div className="more-info">
                    <img src={more2} alt="" />
                </div>
            </div>
        </div>
     );
}

export default Sidebar;