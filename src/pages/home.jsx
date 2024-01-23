import React, { useContext } from 'react';
import Avatar from '../components/avatar';
import Header from '../components/header';
import TweetEditor from '../components/tweet-editor';
import InnerEditor from '../components/inner-tweet-editor';
import Tweets from '../components/tweets';
import { UserContext } from '../contexts/UserContext';
import { TweetsContext } from '../contexts/TweetsContext';

function Home() {
  const loggedUser = useContext(UserContext)
  const {tweetsDatas, addTweet} = useContext(TweetsContext)
  return (
    <>
      <Header isOrder={true} />
      <TweetEditor>
        <Avatar profileLink = {`/${loggedUser.username}`} />
        <InnerEditor onTweetSubmit={addTweet}/>
      </TweetEditor>
      <Tweets datas={tweetsDatas}/>
    </>
  );
}

export default Home;