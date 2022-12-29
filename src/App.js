import './App.css';
import {useState} from 'react';

import HomeScreen from './HomeScreen';
import StartHere from './StartHere';
import Destinations from './Destinations';
import About from './About';

function App() {
  const [home, setHome] = useState(true);
  const [start, setStart] = useState(false);
  const [destinations, setDestinations] = useState(false);
  const [about, setAbout] = useState(false);

  const props = { 
    home,
    setHome,
    start,
    setStart,
    destinations,
    setDestinations,
    about,
    setAbout
  }

  return (
    <>
      {home ? <HomeScreen {...props}/> : <></>}
      {start ? <StartHere {...props}/> : <></>}
      {destinations ? <Destinations {...props}/> : <></>}
      {about ? <About {...props}/> : <></>}
    </>
  );
}

export default App;
