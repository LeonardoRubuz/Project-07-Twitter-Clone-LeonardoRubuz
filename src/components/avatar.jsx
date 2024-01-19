import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Avatar({profileLink}) {
    const userAvatar = useContext(UserContext)
    return ( 
        <div className="avatar">
            <Link to={profileLink}>    
                <img src={userAvatar.avatar} alt="" />
            </Link>
        </div>
     );
}

export default Avatar;