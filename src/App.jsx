import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Header from "./components/header.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <Layout>
      <Home>
        <Header />
      </Home>
    </Layout>
  ); 
}

// second commit