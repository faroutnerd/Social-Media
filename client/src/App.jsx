import React, { useEffect, useRef } from 'react'
import Login from './pages/Login'

import { Route, Routes, useLocation } from 'react-router-dom'
import Feed from './pages/Feed'
import ChatBox from './pages/ChatBox'
import Connections from './pages/Connections'
import Discover from './pages/Discover'
import Profile from './pages/Profile'
import CreatePost from './pages/CreatePost'
import Messages from './pages/Messages'
import Layout from './pages/Layout'
import {Toaster} from 'react-hot-toast'

import { useUser, useAuth } from '@clerk/clerk-react'
import { useDispatch } from 'react-redux'
import { fetchUser } from './features/user/userSlice'
import { fetchConnections } from './features/connections/connectionsSlice'
import { addMessage } from './features/messages/messagesSlice'

const App = () => {

  const {user} = useUser()
  const {getToken} = useAuth();
  const {pathname} = useLocation();
  const pathnameRef = useRef(pathname);
  const dispatch = useDispatch();

  // to get the token
  // useEffect(()=>{
  //   if(user) {
  //     getToken().then(token => console.log(token));
  //   }
  // }, [user]);

  useEffect(()=>{
    const fetchData = async () => {
      // console.log(`app: ${user}`);
      // console.log(JSON.stringify(user));
      const token = await getToken();
      console.log("🔑 Clerk Token:", token);  // 👈 log token
      
      if(user) {
        const token = await getToken();
        dispatch(fetchUser(token));
        dispatch(fetchConnections(token));
      }
    }
    fetchData();
  }, [user, getToken, dispatch]);

  useEffect(() => {
    pathnameRef.current = pathname;
  }, [pathname]);

  // useEffect(() => {

  //   let eventSource;

  //   if(user) {
  //     const eventSource = new EventSource(import.meta.env.VITE_BASEURL + '/api/message/' + user.id);

  //     eventSource.onmessage = (event) => {
  //       const message = JSON.parse(event.data);
  //       if(pathnameRef.current === ('/messages/' + message.from_user_id._id)) {
  //         dispatch(addMessage(message));
  //       } else {
  //         dispatch(addMessage(message));
  //       }
  //     };
  //   }
  //   return () => {
  //     if (eventSource) {
  //     eventSource.close();
  //   }
  //   };
  // }, [user, dispatch]);

  useEffect(() => {
  if (!user) return;

  const eventSource = new EventSource(
    `${import.meta.env.VITE_BASEURL}/api/message/${user.id}`
  );

  eventSource.onmessage = (event) => {
    const message = JSON.parse(event.data);

    // If user is currently viewing the chat
    if (pathnameRef.current === '/messages/' + message.from_user_id._id) {
      dispatch(addMessage(message));
    } else {
      // 👉 Still update global store OR show a toast/notification
      dispatch(addMessage(message));
      // toast.success(`New message from ${message.from_user_id.name}`)
    }
  };

  eventSource.onerror = (err) => {
    console.error("SSE error:", err);
    eventSource.close();
  };

  return () => {
    eventSource.close();
  };
}, [user?.id, dispatch]);

  return (
    <>
      <Toaster />
      <Routes>
        <Route path='/' element={!user ? <Login /> : <Layout/>}>
          <Route index element={<Feed />} />
          <Route path='/messages' element={<Messages />} />
          <Route path='/messages/:userId' element={<ChatBox />} />
          <Route path='/connections' element={<Connections />} />
          <Route path='/discover' element={<Discover />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/profile/:profileId' element={<Profile />} />
          <Route path='/create-post' element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
