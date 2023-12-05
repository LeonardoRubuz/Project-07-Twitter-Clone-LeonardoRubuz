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
            <TrendingList title='Trends for you'>
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
            <div className="trends-footer"></div>
        </>
     );
}

export default Trends;