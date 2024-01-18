import React from 'react';
import Avatar from '../components/avatar';
import Header from '../components/header';
import TweetEditor from '../components/tweet-editor';
import InnerEditor from '../components/inner-tweet-editor';
import Tweets from '../components/tweets';

function Home() {
  return (
    <>
      <Header isOrder={true} />
      <TweetEditor>
        <Avatar profileLink="/profile" />
        <InnerEditor />
      </TweetEditor>
      <Tweets />
    </>
  );
}

export default Home;