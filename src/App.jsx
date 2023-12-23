import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import ProfilePage from "./pages/profilePage.jsx";

import('./style/reset.css');
import('./style/App.css');


const router = createBrowserRouter([
  {
    path : "/",
    element : <Layout/>,
    children : [
      {
        path : '',
        element : <Home />
      },
      {
        path : '/profile',
        element : <ProfilePage />
      }
    ]
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  ); 
}

// second commit