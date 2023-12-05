import settingsIcon from "../../public/svg/Settings.svg";
import ShowMore from "./showMore";

function TrendingList({ children, title }) {
    return ( 
        
        <div className="trending-list">
            <div className="trend-title">
                <h3>{title}</h3>
                <div><img src={settingsIcon} alt="" /></div>
            </div>
            <ul className="trends-list">
                {children}
            </ul>
            <ShowMore />
        </div>
     );
}

export default TrendingList;