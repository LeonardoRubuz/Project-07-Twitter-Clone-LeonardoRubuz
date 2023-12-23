import React from 'react';
import Sidebar from '../components/sidebar';
import Trends from '../components/trends';
import Profile from '../components/profile';
import Tweets from '../components/tweets';

function ProfilePage() {
  return (
    <>
      <Profile />
      <Tweets />
    </>
  );
}

export default ProfilePage;