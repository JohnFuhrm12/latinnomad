import './App.css';
import {useState} from 'react';

import HomeScreen from './HomeScreen';
import StartHere from './StartHere';
import Posts from './Posts';
import Destinations from './Destinations';
import About from './About';
import PostDetail from './PostDetail';
import Admin from './Admin';

function App() {
  const [home, setHome] = useState(true);
  const [start, setStart] = useState(false);
  const [posts, setPosts] = useState(false);
  const [destinations, setDestinations] = useState(false);
  const [about, setAbout] = useState(false);

  const [admin, setAdmin] = useState(false);
  const [adminAccess, setAdminAccess] = useState(false);

  const [postDetail, setPostDetail] = useState(false);
  const [currentPost, setCurrentPost] = useState(false);

  const props = { 
    home,
    setHome,
    start,
    setStart,
    destinations,
    setDestinations,
    about,
    setAbout,
    posts,
    setPosts,
    postDetail,
    setPostDetail,
    currentPost,
    setCurrentPost,
    admin,
    setAdmin,
    adminAccess,
    setAdminAccess
  }

  return (
    <>
      {home ? <HomeScreen {...props}/> : <></>}
      {start ? <StartHere {...props}/> : <></>}
      {posts ? <Posts {...props}/> : <></>}
      {destinations ? <Destinations {...props}/> : <></>}
      {about ? <About {...props}/> : <></>}
      {postDetail ? <PostDetail {...props}/> : <></>}
      {admin ? <Admin {...props}/> : <></>}
    </>
  );
}

export default App;
