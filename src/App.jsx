import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import ProfilePage from "./pages/profilePage.jsx";
import { UserContext } from "./contexts/UserContext.jsx";
import datas from './datas/initial-data.json'
import { TweetsContext } from "./contexts/TweetsContext.jsx";
import { getCurrentUser,  getAllTweets } from "./api/apiRequests.jsx";


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
  const [user, setUser] = useState({});
  const [tweets, setTweets] = useState([]);

  // Fetching the current user
  useEffect(() => {
    async function fetchUser(){
      const userData = await getCurrentUser()
      setUser(userData)
      // console.log(userData);
    }
    fetchUser()
  }, [])

  // Fetching all the tweets
  useEffect(() => {
    async function fetchAllTweets(){
      const tweetsList = await getAllTweets()
      setTweets(tweetsList)
    }
    fetchAllTweets()
  }, [])
  
  return (
    <UserContext.Provider value={user}>
      <TweetsContext.Provider value={tweets}>  
        <RouterProvider router={router} />
      </TweetsContext.Provider>
    </UserContext.Provider>
  ); 
}

// second commit