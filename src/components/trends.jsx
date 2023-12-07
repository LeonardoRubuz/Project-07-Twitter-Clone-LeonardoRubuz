import searchIcon from "../../public/svg/search.svg";
import Trend from "./trend";
import AccountFollow from "./account-follow";
import TrendingList from "./trending-list";

function Trends() {
    return ( 
        <>
            <div className="search-box">
                <img src={searchIcon} alt="search icon" />
                <input className="searchInput" type="text" placeholder="Search Twitter" />
            </div>
            <TrendingList title='Trends for you' hasIcon={true}>
                <Trend />
                <Trend />
                <Trend />
                <Trend />
            </TrendingList>
            <TrendingList title='Who to follow'>
                <AccountFollow />
                <AccountFollow />
                <AccountFollow />
            </TrendingList>
            <div className="trends-footer">
                <ul>
                    <li>Terms of service</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    <li>Imprint</li>
                    <li>Ads info</li>
                    <li>More...</li>
                    <li>2021 Twitter, Inc</li>
                </ul>
            </div>
        </>
     );
}

export default Trends;