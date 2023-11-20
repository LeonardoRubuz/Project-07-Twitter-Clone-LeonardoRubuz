import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Header from "./components/header.jsx";
import Avatar from "./components/avatar";
import InnerEditor from "./components/inner-tweet-editor.jsx";
import TweetEditor from "./components/tweet-editor.jsx";
import Tweets from "./components/tweets.jsx";
import TweetAvatar from "./components/tweet-avatar.jsx";
import Tweet from "./components/tweet.jsx";
import TweetContent from "./components/tweet-content.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Home>
        <Header />
        <TweetEditor>
          <Avatar />
          <InnerEditor />
        </TweetEditor>
        <Tweets>
          <Tweet>
            <TweetAvatar />
            <TweetContent />
          </Tweet>
        </Tweets>
      </Home>
    </Layout>
  ); 
}

// second commit