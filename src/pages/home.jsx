import React from 'react';
import Sidebar from '../components/sidebar';

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
      
    </div>
    </>
  );
}

export default Home;