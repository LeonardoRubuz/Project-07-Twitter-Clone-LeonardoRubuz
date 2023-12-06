function Profile() {
    return ( 
        <div className="profile">
            <div className="profile-banner">
                <img src="" alt="" />
            </div>
            <div className="profile-photo-actions">
                <div className="profile-photo">
                    <img src="" alt="" />
                </div>
                <div className="profile-actions">
                    <div>
                        <img src="" alt="" />
                    </div>
                    <div>
                        <button>Follow</button>
                    </div>
                </div>
            </div>
            <div className="profile-infos">
                <div className="usernames">
                    <h1>CNN</h1>
                    <p>@CNN</p>
                </div>
                <div className="profile-bio">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, dolore!</p>
                    <div className="additional-infos">
                        <div>
                            <img src="" alt="" />
                            <span>cnn.com</span>
                        </div>
                        <div>
                            <img src="" alt="" />
                            <span>Joined Twitter since 2007</span>
                        </div>
                    </div>
                    <div className="followers">
                        <p><span>1086</span> following</p>
                        <p><span>6M</span> followers</p>
                    </div>
                    <div className="profile-nav">
                        <ul>
                            <li>
                                <p>Tweets</p>
                                <div></div>
                            </li>
                            <li>
                                <p>Answers</p>
                                <div></div>
                            </li>
                            <li>
                                <p>Highlighted Tweets</p>
                                <div></div>
                            </li>
                            <li>
                                <p>Medias</p>
                                <div></div>
                            </li>
                            <li>
                                <p>Likes</p>
                                <div></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Profile;