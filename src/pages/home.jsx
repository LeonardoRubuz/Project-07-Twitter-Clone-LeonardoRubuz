import React from 'react';

function Home({children}) {
  return (
    <>
      <div className="sidebar">
        
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