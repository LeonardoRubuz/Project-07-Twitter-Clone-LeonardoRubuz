import profilePhoto from "../images/profile-photo.png";

function Avatar() {
    return ( 
        <div className="avatar">
            <img src={profilePhoto} alt="" />
        </div>
     );
}

export default Avatar;