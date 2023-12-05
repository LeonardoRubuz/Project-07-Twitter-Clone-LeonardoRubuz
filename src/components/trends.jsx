import searchIcon from "../../public/svg/search.svg";
import settingsIcon from "../../public/svg/Settings.svg";
import Trend from "./trend";
import AccountFollow from "./account-follow";
import ShowMore from "./showMore";

function Trends() {
    return ( 
        <>
            <div className="search-box">
                <img src={searchIcon} alt="search icon" />
                <input className="searchInput" type="text" placeholder="Search Twitter" />
            </div>
            <div className="trending-list">
                <div className="trend-title">
                    <h3>Trends for you</h3>
                    <div><img src={settingsIcon} alt="" /></div>
                </div>
                <ul className="trends-list">
                    <Trend />
                    <Trend />
                    <Trend />
                    <Trend />
                </ul>
                <ShowMore />
            </div>
            <div className="follow-list">
                <AccountFollow />
                <AccountFollow />
                <AccountFollow />
                <ShowMore />
            </div>
            <div className="trends-footer"></div>
        </>
     );
}

export default Trends;