import React from 'react';
import Sidebar from '../components/sidebar';
import Trends from '../components/trends';
import Profile from '../components/profile';
import Tweets from '../components/tweets';

function ProfilePage() {
  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
    <main className="timeline">
      <Profile />
      <Tweets />
    </main>
    <div className="trends">
      <Trends />
    </div>
    </>
  );
}

export default ProfilePage;