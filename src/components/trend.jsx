import moreIcon from '../../public/svg/More-2.svg';

function Trend() {
    return ( 
        <li>
            <div className="trend-location">
                <span>Trending in Turkey</span>
                <div>
                    <img src={moreIcon} alt="more icon" />
                </div>
            </div>
            <p className="hashtag">#SQUID</p>
            <p className="hashtag-tweets">2066 Tweets</p>
        </li>
     );
}

export default Trend;