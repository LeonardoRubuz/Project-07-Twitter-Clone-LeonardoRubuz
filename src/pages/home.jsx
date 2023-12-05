import React from 'react';
import Sidebar from '../components/sidebar';
import Trends from '../components/trends';

function Home({children}) {
  return (
    <>
      <div className="sidebar">
        <Sidebar />
      </div>
    <main className="timeline">
      {children}
    </main>
    <div className="trends">
      <Trends />
    </div>
    </>
  );
}

export default Home;