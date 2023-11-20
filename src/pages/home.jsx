import React from 'react';

function Home({children}) {
  return (
    <main className="timeline">
      {children}
    </main>
  );
}

export default Home;