import Home from "./pages/home.jsx";
import Layout from "./components/layout.jsx";
import Profile from "./components/profile.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfilePage from "./pages/profilePage.jsx";

import('./style/reset.css');
import('./style/App.css');

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
          <Routes>
            <Route
              path="/"
              element={<Home />} 
            />
            <Route
              path="profile"
              element={<ProfilePage />} 
            />
          </Routes>
      </Layout>
    </BrowserRouter>
  ); 
}

// second commit