import './App.css';
import {useState} from 'react';

import HomeScreen from './HomeScreen';
import StartHere from './StartHere';
import Posts from './Posts';
import Destinations from './Destinations';
import About from './About';
import PostDetail from './PostDetail';

function App() {
  const [home, setHome] = useState(true);
  const [start, setStart] = useState(false);
  const [posts, setPosts] = useState(false);
  const [destinations, setDestinations] = useState(false);
  const [about, setAbout] = useState(false);
  const [postDetail, setPostDetail] = useState(false);

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
    setPostDetail
  }

  return (
    <>
      {home ? <HomeScreen {...props}/> : <></>}
      {start ? <StartHere {...props}/> : <></>}
      {posts ? <Posts {...props}/> : <></>}
      {destinations ? <Destinations {...props}/> : <></>}
      {about ? <About {...props}/> : <></>}
      {postDetail ? <PostDetail {...props}/> : <></>}
    </>
  );
}

export default App;
