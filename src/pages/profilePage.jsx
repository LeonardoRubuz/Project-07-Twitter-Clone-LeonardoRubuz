import React from 'react';
import Profile from '../components/profile';
import Tweets from '../components/tweets';
import { useParams } from 'react-router-dom';

function ProfilePage() {
  const userProfile = useParams()
  return (
    <>
      <Profile profile={userProfile.username}/>
      <Tweets />
    </>
  );
}

export default ProfilePage;