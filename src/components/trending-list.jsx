import settingsIcon from "../../public/svg/Settings.svg";
import ShowMore from "./showMore";

function TrendingList({ children, title, hasIcon }) {
    return ( 
        
        <div className="trending-list">
            <div className="trend-title">
                <h3>{title}</h3>
                {hasIcon ? <div><img src={settingsIcon} alt="" /></div> : null}
            </div>
            <ul className="trends-list">
                {children}
            </ul>
            <ShowMore />
        </div>
     );
}

export default TrendingList;