import logo from "../images/twitter.png";
import bookmark from "../../public/svg/Bookmarks.svg";
import explore from "../../public/svg/Explore.svg";
import home from "../../public/svg/Home-Fill.svg";
import lists from "../../public/svg/Lists.svg";
import messages from "../../public/svg/Messages.svg";
import more from "../../public/svg/More.svg";
import notifications from "../../public/svg/Notifications.svg";
import profile from "../../public/svg/Profile.svg";
import AccountFollow from "./account-follow";

function Sidebar() {
    return ( 
        <>
        <div className="avatar">
            <img src={logo} alt="" />
        </div>
        <ul className="side-navigation">
            <li className="navigation-item">
                <img src={home} alt="" />
                <span>Home</span>
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
                <span>Profile</span>
            </li>
            <li className="navigation-item">
                <img src={more} alt="" />
                <span>Plus</span>
            </li>
            <button className="button">Tweet</button>
        </ul>
        <AccountFollow />
        </>
     );
}

export default Sidebar;