import topTweet from '../../public/latest.svg';

function Header() {
    return ( 
        <header className="header">
            <h1 className="page-title">Home</h1>
            <img src={topTweet} alt="top tweets" />
        </header>
     );
}

export default Header;