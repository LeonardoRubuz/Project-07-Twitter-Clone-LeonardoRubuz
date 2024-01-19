import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import ProfilePage from "./pages/profilePage.jsx";
import { UserContext } from "./contexts/UserContext.jsx";
import datas from './datas/initial-data.json'
import { TweetsContext } from "./contexts/TweetsContext.jsx";

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
        path : ':username',
        element : <ProfilePage />
      }
    ]
  }
])

export default function App() {
  const user = datas["current-user"]
  return (
    <UserContext.Provider value={user}>
      <TweetsContext.Provider value={datas.tweets}>  
        <RouterProvider router={router} />
      </TweetsContext.Provider>
    </UserContext.Provider>
  ); 
}

// second commit