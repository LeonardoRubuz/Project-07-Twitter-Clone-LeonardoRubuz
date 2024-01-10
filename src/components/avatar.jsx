import { Link } from "react-router-dom";
import profilePhoto from "../images/profile-photo.png";

function Avatar({profileLink}) {
    return ( 
        <div className="avatar">
            <Link to={profileLink}>    
                <img src={profilePhoto} alt="" />
            </Link>
        </div>
     );
}

export default Avatar;